// import React from "react";
// import styled from "styled-components";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <p>&copy; 2024 Health Wearables. All rights reserved.</p>
//     </FooterContainer>
//   );
// };

// export default Footer;

// const FooterContainer = styled.footer`
//   text-align: center;
//   padding: 20px;
//   background-color: #000;
//   color: #fff;
// `;










import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          &copy; 2024 <Brand>Health Wearables</Brand>. All rights reserved.
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #101010; /* Darker background for a sleek look */
  color: #d4d4d4; /* Muted text color */
  border-top: 2px solid #ff6a00; /* Highlighted top border */
`;

const FooterContent = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  animation: fadeIn 2s ease;

  p {
    margin: 0;
    line-height: 1.5;
    a {
      color: #ff6a00;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Brand = styled.span`
  color: #ff6a00; /* Highlighted brand color */
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #fff; /* Subtle hover effect */
  }
`;
