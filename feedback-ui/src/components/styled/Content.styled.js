import styled from "styled-components";

export const Content = styled.div`
  min-height: 800px;
  background: #ffffff url("/images/Cloud.png");
  background-size: cover;
  position: relative;
  overflow: hidden;

  div.earth {
    background-image: url("/images/Earth2.png");
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    width: 840px;
    height: 840px;
    top: -50px;
    right: -260px;
  }

  div.smile1 {
    background-image: url("/images/cartoon3.svg");
    background-size: cover;
    position: absolute;
    width: 240px;
    height: 240px;
    top: 360px;
    right: 420px;
    z-index: 1;
  }

  div.smile2 {
    background-image: url("/images/cartoon2.svg");
    background-size: cover;
    position: absolute;
    width: 110px;
    height: 110px;
    top: 320px;
    right: 520px;
    z-index: 1;
  }

  div.smile3 {
    background-image: url("/images/cartoon1.svg");
    background-size: cover;
    position: absolute;
    width: 90px;
    height: 90px;
    top: 20px;
    left: 20px;
  }

  @media (max-width: 1260px) {
    .earth,
    .smile1,
    .smile2 {
      display: none;
    }
  }
`;
