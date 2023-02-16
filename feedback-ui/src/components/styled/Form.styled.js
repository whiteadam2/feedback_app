import styled from "styled-components";

export const StyledForm = styled.div`
  width: 400px;
  max-width: 80%;
  margin: 150px 0 0 200px;

  h1 {
    font-size: 26px;
    font-weight: lighter;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    width: 180px;
    height: 60px;
    margin-top: 15px;
    border-radius: 100px;
    border: 0px;
    background-color: #fad34f;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    width: 100%;
    height: ${({ inputHeight }) => inputHeight}px;
    border: 1px solid #dcdcdc;
    outline: 0;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 12px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  textarea {
    width: 100%;
    height: ${({ areaHeight }) => areaHeight}px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    outline: 0;
    padding-left: 20px;
    padding-top: 20px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  @media (max-width: 1260px) {
    margin: 150px auto;
  }
`;
