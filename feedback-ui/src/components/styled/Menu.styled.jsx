import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  margin-top: 80px;
  margin-left: 300px;
  width: 100px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1260px) {
    margin: 80px auto;
  }
`;

export function Menu(props) {
  return (
    <StyledMenu>
      <a href="https://linkedin.com/">
        <img src="/images/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://twitter.com/">
        <img src="/images/twitter.svg" alt="twitter" />
      </a>
      <a href="https://facebook.com/">
        <img src="/images/facebook.svg" alt="facebook" />
      </a>
      <a href="https://pinterest.com">
        <img src="/images/pinterest.svg" alt="pinterest" />
      </a>
    </StyledMenu>
  );
}
