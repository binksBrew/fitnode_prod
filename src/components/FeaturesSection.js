// import React from "react";
// import styled from "styled-components";

// const FeaturesSection = () => {
//   return (
//     <Features>
//       <FeatureColumn>
//         <h3>Explore Our Products</h3>
//         <ul>
//           <li>Smart Watch - Discover the latest in health technology.</li>
//           <li>Health Ring - Track your wellness with style and precision.</li>
//           <li>About Us - Learn more about our innovative designs.</li>
//           <li>Contact Us - Get in touch for inquiries and support.</li>
//         </ul>
//       </FeatureColumn>
//       <FeatureColumn>
//         <h3>Latest Insights</h3>
//         <ul>
//           <li>Health Tips - Stay informed with our expert advice.</li>
//           <li>Product Updates - Be the first to know about new features.</li>
//           <li>User Stories - Read how others are using our products.</li>
//           <li>Expert Reviews - See what the experts say about us.</li>
//         </ul>
//       </FeatureColumn>
//       <FeatureColumn>
//         <h3>From Our Blog</h3>
//         <div>
//           <p>Wellness Journey - Tips for a healthier lifestyle.</p>
//           <a href="#">Read more</a>
//         </div>
//         <div>
//           <p>Tech Innovations - Latest advancements in wearable technology.</p>
//           <a href="#">Read more</a>
//         </div>
//       </FeatureColumn>
//     </Features>
//   );
// };

// export default FeaturesSection;

// const Features = styled.section`
//   display: flex;
//   justify-content: space-between;
//   padding: 50px;
//   background-color: #fff;
// `;

// const FeatureColumn = styled.div`
//   flex: 1;
//   margin-right: 20px;

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;

//     li {
//       margin-bottom: 10px;
//     }
//   }

//   a {
//     text-decoration: none;
//     color: #000;
//   }
// `;






import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Explore Our Products</FooterTitle>
          <FooterLink href="#smartwatch">Smart Watch - Discover the latest in health technology.</FooterLink>
          <FooterLink href="#healthring">Health Ring - Track your wellness with style and precision.</FooterLink>
          <FooterLink href="#aboutus">About Us - Learn more about our innovative designs.</FooterLink>
          <FooterLink href="#contact">Contact Us - Get in touch for inquiries and support.</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Latest Insights</FooterTitle>
          <FooterLink href="#healthtips">Health Tips - Stay informed with our expert advice.</FooterLink>
          <FooterLink href="#productupdates">Product Updates - Be the first to know about new features.</FooterLink>
          <FooterLink href="#userstories">User Stories - Read how others are using our products.</FooterLink>
          <FooterLink href="#expertreviews">Expert Reviews - See what the experts say about us.</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>From Our Blog</FooterTitle>
          <FooterLink href="#wellnessjourney">Wellness Journey - Tips for a healthier lifestyle.</FooterLink>
          <FooterLink href="#techinnovations">Tech Innovations - Latest advancements in wearable technology.</FooterLink>
        </FooterColumn>
      </FooterContent>

      {/* <FooterBottom>© 2024 Health Wearables. All rights reserved.</FooterBottom> */}
    </FooterContainer>
  );
};

export default FooterSection;

// Styled Components
const FooterContainer = styled.div`
  background-color: #101010;
  color: #d4d4d4;
  padding: 40px 20px;
  border-top: 2px solid #ff6a00;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 40px;
    height: 3px;
    background: #ff6a00;
    margin-top: 5px;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #d4d4d4;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6a00;
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.8rem;
  border-top: 1px solid #333;
  padding-top: 20px;
  color: #888;
  animation: fadeIn 2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
