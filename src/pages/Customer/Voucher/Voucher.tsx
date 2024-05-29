import * as React from "react";
import styled from "styled-components";

interface CardProps {
  imgSrc: string;
  voucherStatus: string;
  voucherTitle: string;
  typeLabel: string;
  typeValue: string;
  shippingLabel: string;
  shippingValue: string;
  priceLabel: string;
  priceValue: string;
  shopLabel: string;
  shopValue: string;
}

const VoucherCard: React.FC<CardProps> = ({
  imgSrc,
  voucherStatus,
  voucherTitle,
  typeLabel,
  typeValue,
  shippingLabel,
  shippingValue,
  priceLabel,
  priceValue,
  shopLabel,
  shopValue,
}) => {
  const statusColor = voucherStatus === "Active" ? "#4bbf41" : "#eb5050";
  const dotColor = voucherStatus === "Active" ? "#177c0f" : "#eb5050";

  return (
    <Card>
      <div className="card-content">
        <div className="left-column">
          <CardImage loading="lazy" src={imgSrc} />
        </div>
        <div className="right-column">
          <CardTitle>
            <Dot style={{ backgroundColor: dotColor }} />
            <Title>{voucherTitle}</Title>
            <Status style={{ color: statusColor }}>{voucherStatus}</Status>
          </CardTitle>
          <CardDetails>
            <Detail>
              <DetailIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c218693848a8542cc1ccb7df8e57bd17ed066f598620d433fe502d087cca6299?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" />
              <DetailLabel>{typeLabel}</DetailLabel>
              <DetailValue>{typeValue}</DetailValue>
            </Detail>
            <Detail>
              <DetailIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a65a7b76743050eb34864e4578009f0aa60c3a69aeb06708daff055a0c0a231f?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" />
              <DetailLabel>{shippingLabel}</DetailLabel>
              <DetailValue>{shippingValue}</DetailValue>
            </Detail>
            <Detail>
              <DetailIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c22dfc5774eda52e42b5f1aacb86319164f1d47b721e1cdf1197d487cd32c34?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" />
              <DetailLabel>{priceLabel}</DetailLabel>
              <DetailValue>{priceValue}</DetailValue>
            </Detail>
            <Detail>
              <DetailIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba093e4cbde54523567f82f610b2af2304b990faac54e98e37008ac33bbc98fd?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" />
              <DetailLabel>{shopLabel}</DetailLabel>
              <DetailValue>{shopValue}</DetailValue>
            </Detail>
          </CardDetails>
        </div>
      </div>
    </Card>
  );
};

const Voucher = () => {
  const vouchersData: CardProps[] = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "Active",
      voucherTitle: "Black Friday Voucher",
      typeLabel: "Type",
      typeValue: "Voucher",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "50$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "No Action",
      voucherTitle: "Black Friday Voucher",
      typeLabel: "Type",
      typeValue: "Voucher",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "50$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "Active",
      voucherTitle: "Cyber Monday Voucher",
      typeLabel: "Type",
      typeValue: "Discount",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "100$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "Expired",
      voucherTitle: "Holiday Sale Voucher",
      typeLabel: "Type",
      typeValue: "Discount",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "30$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "Active",
      voucherTitle: "Cyber Monday Voucher",
      typeLabel: "Type",
      typeValue: "Discount",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "100$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5b5a0b78c5e3c30671d0c7aa88123cb3eecd808ae026ab4c1dbcce2f0282705?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
      voucherStatus: "Active",
      voucherTitle: "Cyber Monday Voucher",
      typeLabel: "Type",
      typeValue: "Discount",
      shippingLabel: "Shipping",
      shippingValue: "Online voucher",
      priceLabel: "Price",
      priceValue: "100$",
      shopLabel: "Shop",
      shopValue: "Aphromas Diamond",
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>My Voucher</HeaderTitle>
      </Header>
      <Main>
        {vouchersData.map((voucher, index) => (
          <VoucherCard
            key={index}
            imgSrc={voucher.imgSrc}
            voucherStatus={voucher.voucherStatus}
            voucherTitle={voucher.voucherTitle}
            typeLabel={voucher.typeLabel}
            typeValue={voucher.typeValue}
            shippingLabel={voucher.shippingLabel}
            shippingValue={voucher.shippingValue}
            priceLabel={voucher.priceLabel}
            priceValue={voucher.priceValue}
            shopLabel={voucher.shopLabel}
            shopValue={voucher.shopValue}
          />
        ))}
      </Main>
    </Container>
  );
};

export default Voucher;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  padding-bottom: 17rem;
`;

const Header = styled.header`
  display: flex;
  margin-top: 22px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 65px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeaderTitle = styled.h1`
  color: #000;
  font: 600 32px Crimson Text, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Main = styled.section`
  margin-top: 95px;
  width: 100%;
  max-width: 1177px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-left: 123px;
  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 100%;
    margin-top: 40px;
  }
`;

// Card component
const Card = styled.article`
border-radius: 24px;
box-shadow: 0 7px 21.6px rgba(0, 0, 0, 0.25);
/* border: 1px solid rgba(0, 0, 0, 1); */
background-color: #fff;
flex-grow: 1;
display: flex;
flex-direction: column;
max-width: calc(50% - 20px);
margin-top: 20px;
  max-width: calc(50% - 20px);
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }

  .card-content {
    display: flex;
    gap: 20px;
    @media (max-width: 991px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .left-column {
    width: 43%;
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .right-column {
    width: 57%;
    display: flex;
    flex-direction: column;
    padding-top: 14px
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

const CardImage = styled.img`
  aspect-ratio: 0.79;
  object-fit: auto;
  object-position: center;
  width: 204px;
  
  max-width: 100%;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 17px;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 12px;
  align-self: center;
`;

const Title = styled.p`
  font-family: Inter, sans-serif;
  color: #000;
`;

const Status = styled.p`
  font-family: Inter, sans-serif;
  margin-top: 15px;
`;

const CardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 29px;
  gap: 20px;
  color: #000;
  justify-content: flex-start;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

const DetailIcon = styled.img`
  aspect-ratio: 1.16;
  object-fit: auto;
  object-position: center;
  width: 14px;
  margin-right: 8px;
`;

const DetailLabel = styled.span`
  font-family: Poppins, sans-serif;
  margin-right: 5px;
`;

const DetailValue = styled.span`
  font-family: Poppins, sans-serif;
`;
