// Coupon.tsx
import React from 'react';

// CouponProps interface to define prop types
interface CouponProps {
  companyLogo: string;
  imageUrl: string;
  discountText: string;
  description: string;
  promoCode: string;
  expiryDate: string;
}

const Coupon: React.FC<CouponProps> = ({
  companyLogo,
  imageUrl,
  discountText,
  description,
  promoCode,
  expiryDate,
}) => {
  const styles = {
    coupon: {
      border: '3px dotted #151542',
      width: '100%',
      borderRadius: '15px',
      margin: '10px',
      maxWidth: '315px',
      fontFamily: 'Arial, sans-serif' as 'Arial'
    },
    container: {
      padding: '2px 16px',
      backgroundColor: '#f1f1f1'
    },
    whiteContainer: {
      backgroundColor: 'white'
    },
    promo: {
      background: '#ccc',
      padding: '3px'
    },
    expire: {
      color: 'red'
    },
    image: {
      width: '100%'
    },
    companyLogo: {
        fontSize: '1.5rem' // Adjust this value as needed
      },
      discountText: {
        fontSize: '1.5rem', // Adjust this value as needed
        fontWeight: 'bold'
      },
      description: {
        fontSize: '15px' // Adjust this value as needed
      },
      promoCode: {
        fontSize: '20px' // Adjust this value as needed
      },
      expiryDate: {
        fontSize: '20px',
        color: 'red' // Adjust this value as needed
      }
  };

  return (
    <div style={styles.coupon}>
      <div style={styles.container}>
        <h3 style={styles.companyLogo}>{companyLogo}</h3>
      </div>
      <img src={imageUrl} alt="Coupon" style={styles.image} />
      <div style={{ ...styles.container, ...styles.whiteContainer }}>
        <h2 style={styles.discountText}><b>{discountText}</b></h2>
        <p style={styles.description}>{description}</p>
      </div>
      <div style={styles.container}>
        <p>Use Promo Code: <span style={styles.promo}>{promoCode}</span></p>
        <p style={styles.expiryDate} className="expire">Expires: {expiryDate}</p>
      </div>
    </div>
  );
};

export default Coupon;
