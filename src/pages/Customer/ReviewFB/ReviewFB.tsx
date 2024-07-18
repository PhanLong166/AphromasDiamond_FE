import AccountCus from "@/components/Customer/Account Details/AccountCus";
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
  images: string;
  title: string;
  Comment: string;
  Stars: number;
  CommentTime: string;
}

interface FeedbackWithDetails extends Feedback {
  diamondName: string;
  diamondImage: string;
}
const ReviewFB = () => {
  const [feedBackData, setFeedBackData] = useState<FeedbackWithDetails[]>([]);
  // console.log(feedBackData);
  const fetchFeedBackData = async () => {
    try {
      const res = await showAllFeedback({});
      // console.log(res.data);

      if (res.data && res.data.data) {
        const filterFeedBackAccount = res.data.data.filter(
          (feedback: Feedback) => feedback.AccountID === null
        );

        const feedbackWithDetails = await Promise.all(
          filterFeedBackAccount.map(async (feedback: Feedback) => {
            try {
              const diamondDetails = await getDiamondDetails(
                feedback.DiamondID
              );
              console.log(diamondDetails.data);
              if (diamondDetails.data && diamondDetails.data.data) {
                const diamondName =
                  diamondDetails.data.data.Name || "Unknown Diamond";

                let diamondImage = "https://via.placeholder.com/150"; // Default image
                if (diamondDetails.data.data.UsingImage?.length > 0) {
                  const imageID = diamondDetails.data.data.UsingImage.Name;
                  const imageRes = await getImage(imageID.UsingImageID);

                  diamondImage = imageRes || diamondImage;
                  console.log("Image response:", diamondImage);
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
            <Card key={index} style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={<Avatar src={feedback.diamondImage} />}
                title={
                  <div>
                    <Rate disabled defaultValue={feedback.Stars} />
                    <p>{feedback.CommentTime}</p>
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
`;
