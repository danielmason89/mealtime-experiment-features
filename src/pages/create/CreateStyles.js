import styled from "styled-components";

export const CreateStyle = styled.div`
  color: #555;
  max-width: 480px;
  margin: 60px auto;

  label {
    padding: 0.5rem;
    margin: 1rem 1rem;
  }

  label span {
    display: block;
    margin: 30px 0 10px;
  }

  p {
    margin-top: 10px;
    font-size: 1.25rem;
  }

  button {
    display: block;
    width: 12vw;
    font-size: 0.8rem;
    color: #fff;
    padding: 15px 20px;
    border: 0;
    border-radius: 4px;
    background-color: #0d5c63;
    cursor: pointer;
    text-decoration: none;
    margin: 20px auto;
  }

  .ingredients {
    display: flex;
    align-items: center;
  }

  .ingredients button {
    margin: 0 0 0 10px;
  }
`;
