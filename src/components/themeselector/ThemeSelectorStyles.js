import styled from "styled-components";

export const ThemeStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 20px auto;

  .theme-buttons div {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    margin-right: 20px;
    border-radius: 50%;
    border: solid #242222;
  }

  .mode-toggle {
    margin-right: auto;
  }

  .mode-toggle img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 30px;
  }
`;
