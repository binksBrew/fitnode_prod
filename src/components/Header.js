// import React from "react";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <NavBar>
//       <Logo>FitNode</Logo>
//       <NavLinks>
//         <a href="#home">Home</a>
//         <a href="#features">Features</a>
//         <a href="#pricing">Pricing</a>
//         <a href="#support">Support</a>
//       </NavLinks>
//       <Actions>
//         <button>Join</button>
//         <button className="shop">Shop</button>
//       </Actions>
//     </NavBar>
//   );
// };

// export default Header;

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   border-bottom: 1px solid #ddd;
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;

//   a {
//     text-decoration: none;
//     color: #333;
//     font-weight: 500;
//   }
// `;

// const Actions = styled.div`
//   button {
//     background-color: transparent;
//     border: 1px solid #333;
//     padding: 5px 10px;
//     margin-left: 10px;
//     cursor: pointer;
//   }

//   .shop {
//     background-color: #000;
//     color: #fff;
//   }
// `;











// import React from "react";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <Nav>
//       <Logo>FitNode</Logo>
//       <Menu>
//         <a href="#features">Features</a>
//         <a href="#pricing">Pricing</a>
//         <a href="#support">Support</a>
//         {/* <Button className="join">Shop</Button> */}
//         <Button className="shop">Shop</Button>
//       </Menu>
//     </Nav>
//   );
// };

// export default Header;

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 50px;
//   background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent header */
//   backdrop-filter: blur(10px);
//   z-index: 10;
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #fff;
//   text-transform: uppercase;
// `;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   a {
//     color: #d4d4d4;
//     text-decoration: none;
//     font-size: 1rem;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #ff6a00;
//     }
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &.join {
//     background-color: #ff6a00;
//     color: #fff;
//   }

//   &.shop {
//     background-color: transparent;
//     border: 2px solid #ff6a00;
//     color: #ff6a00;
//   }

//   &:hover {
//     background-color: #fff;
//     color: #ff6a00;

//     &.join {
//       background-color: #fff;
//       color: #ff6a00;
//     }
//   }
// `;










import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>FitNode</Logo>
      <Menu>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
        <NavLink href="#support">Support</NavLink>
        <ActionButtons>
          <JoinButton>Join</JoinButton>
          <ShopButton>Shop</ShopButton>
        </ActionButtons>
      </Menu>
    </Nav>
  );
};

export default Header;

// Styled Components

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: rgba(0, 0, 0, 0.85); /* Semi-transparent header */
  backdrop-filter: blur(8px);
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled.a`
  color: #d4d4d4;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6a00;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const JoinButton = styled.button`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  background-color: #ff6a00;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff6a00;
  }
`;

const ShopButton = styled.button`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  border: 2px solid #ff6a00;
  border-radius: 20px;
  background-color: transparent;
  color: #ff6a00;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 50px;


  &:hover {
    background-color: #ff6a00;
    color: #fff;
  }
`;
