// import React, { useEffect, useState } from 'react';
// import { StarFilled } from '@ant-design/icons';
// // import StyledPagination from './StyledPagination'; // Đảm bảo import đúng StyledPagination
// import { showAllFeedback } from '@/services/feedBackAPI';

// const Review: React.FC = () => {
//   const [reviewsData, setReviewsData] = useState<ReviewData[]>([]);
//   const [averageRating, setAverageRating] = useState<number>(0);
//   const [totalReviews, setTotalReviews] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await showAllFeedback({});
//         if (response && response.data) {
//           setReviewsData(response.data);
//           setTotalReviews(response.total);

//           // Tính trung bình xếp hạng
//           const totalStars = response.data.reduce((sum, review) => sum + review.Stars, 0);
//           const avgRating = response.data.length ? totalStars / response.data.length : 0;
//           setAverageRating(avgRating);
//         }
//       } catch (error) {
//         console.error('Error fetching feedback:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="review">
//       <div className="head-review">
//         <div className="sum-rating">
//           <strong>{averageRating.toFixed(1)}</strong>
//           <span>{totalReviews} reviews</span>
//         </div>
//       </div>
//       <div className="body-review">
//         {reviewsData.map((review) => (
//           <div key={review.FeedbackID} className="profile">
//             <div className="thumb-name">
//               <div className="image">
//                 {/* Hiển thị hình đại diện nếu có, nếu không thì hiển thị "No Image" */}
//                 <div className="default-avatar">No Image</div>
//               </div>
//               <div className="grouping">
//                 <div className="name">Anonymous</div>
//                 <div className="rating">
//                   {[...Array(review.Stars)].map((_, i) => (
//                     <StarFilled
//                       key={i}
//                       style={{ color: "#D8A25A", fontSize: "16px" }}
//                     />
//                   ))}
//                 </div>
//                 <div className="date grey-color">
//                   On {new Date(review.CommentTime).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>
//             <div className="comment reply">
//               <strong>{review.Comment}</strong>
//               <p className="grey-color">{review.Comment}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <StyledPagination defaultCurrent={1} total={totalReviews} /> */}
//     </div>
//   );
// };

// export default Review;
