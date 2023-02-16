import styled from "styled-components";

export const Footer = styled.div`
  background: #fafafa;
  position: relative;
  height: 200px;
  overflow: hidden;

  div.decor-top {
    background-image: url("/images/cartoon4.svg");
    background-size: cover;
    position: absolute;
    width: 80px;
    height: 100px;
    top: 0px;
    right: 140px;
  }

  div.decor-left {
    background-image: url("/images/cartoon3.svg");
    background-size: cover;
    position: absolute;
    width: 240px;
    height: 240px;
    left: 20px;
    bottom: -60px;
  }

  div.decor-right {
    background-image: url("/images/cartoon1.svg");
    background-size: cover;
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 40px;
    right: -30px;
  }
`;
