import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero>
      <VideoBackground autoPlay muted loop>
        <source src="/landingVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <Content>
        <Title>Revolutionize Your Health with Smart Wearables</Title>
        <Description>
          Discover the future of wellness with our cutting-edge health wrist watch and ring.
          Designed with advanced technology, they empower you to monitor your health effortlessly.
        </Description>
        <Buttons>
          <Button className="shop">Shop</Button>
          <Button className="learn">Learn More</Button>
        </Buttons>
      </Content>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for better text contrast */
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  max-width: 800px;
  text-align: center;
  color: #fff;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #d4d4d4;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.shop {
    background-color: #ff6a00;
    color: #fff;
  }

  &.learn {
    background-color: transparent;
    border: 2px solid #ff6a00;
    color: #ff6a00;
  }

  &:hover {
    background-color: transparent;
    color: #ff6a00;
    border: 2px solid #ff6a00;

    &.shop {
      background-color: transparent;
      color: #ff6a00;
    }

    &.learn {
      background-color: #ff6a00;
      color: #fff;
    }
  }
`;
