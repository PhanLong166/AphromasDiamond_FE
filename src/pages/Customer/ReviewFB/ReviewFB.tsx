/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountCus from "@/components/Customer/Account Details/AccountCus";
import useAuth from "@/hooks/useAuth";
import { getDiamondDetails } from "@/services/diamondAPI";
import { showAllFeedback } from "@/services/feedBackAPI";
import { getImage } from "@/services/imageAPI";
import { Avatar, Card, Rate } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

const { Meta } = Card;

interface Feedback {
  AccountID: number | null;
  DiamondID: number;
  title: string;
  Comment: string;
  Stars: number;
  CommentTime: string;
}

interface FeedbackWithDetails extends Feedback {
  diamondName: string;
  diamondImage: string;
}

const formatDateTime = (dateTime: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(dateTime));
};

const ReviewFB = () => {
  const [feedBackData, setFeedBackData] = useState<FeedbackWithDetails[]>([]);
  const { AccountID } = useAuth();
  console.log(AccountID);
  const fetchFeedBackData = async () => {
    try {
      const res = await showAllFeedback({});
      if (res.data && res.data.data) {
        const filterFeedBackAccount = res.data.data.filter(
          (feedback: Feedback) => feedback.AccountID === AccountID
        );
        console.log(filterFeedBackAccount)
        const feedbackWithDetails = await Promise.all(
          filterFeedBackAccount.map(async (feedback: Feedback) => {
            try {
              const diamondDetails = await getDiamondDetails(
                feedback.DiamondID
              );
              // console.log(diamondDetails.data.data);
              if (diamondDetails.data && diamondDetails.data.data) {
                const diamond = diamondDetails.data.data;
                const diamondName = diamond.Name || "Unknown Diamond";

                let diamondImage = "https://via.placeholder.com/150";

                if (diamond.usingImage && diamond.usingImage.length > 0) {
                  const imageURLPromises = diamond.usingImage.map(
                    async (image: any) => {
                      try {
                        const imageRes = getImage(image.UsingImageID);
                        return imageRes || image.url;
                      } catch (error) {
                        console.error("Error fetching image:", error);
                        return image.url;
                      }
                    }
                  );

                  const imageURLs = await Promise.all(imageURLPromises);
                  diamondImage = imageURLs[0];
                }

                return {
                  ...feedback,
                  diamondName,
                  diamondImage,
                };
              } else {
                console.error(
                  "Diamond details not found for ID:",
                  feedback.DiamondID
                );
                return {
                  ...feedback,
                  diamondName: "Unknown Diamond",
                  diamondImage: "https://via.placeholder.com/150",
                };
              }
            } catch (error) {
              console.error("Error fetching diamond details:", error);
              return {
                ...feedback,
                diamondName: "Unknown Diamond",
                diamondImage: "https://via.placeholder.com/150",
              };
            }
          })
        );

        setFeedBackData(feedbackWithDetails);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  useEffect(() => {
    fetchFeedBackData();
  }, []);
  console.log(feedBackData);

  return (
    <Container>
      <div>
        <AccountCus />
      </div>
      <CartContainer>
        <Content>
          {feedBackData.map((feedback, index) => (
            <Card
              key={index}
              style={{ width: 430, marginTop: 16, marginRight: 20 }}
            >
              <Meta
                avatar={<Avatar src={feedback.diamondImage} />}
                title={
                  <div>
                    <Rate disabled defaultValue={feedback.Stars} />
                    <p>{formatDateTime(feedback.CommentTime)}</p>
                    <p>{feedback.diamondName}</p>
                  </div>
                }
                description={<p>{feedback.Comment}</p>}
              />
            </Card>
          ))}
        </Content>
      </CartContainer>
    </Container>
  );
};

export default ReviewFB;

const Container = styled.div``;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1400px;
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin-bottom: 3rem;
`;
