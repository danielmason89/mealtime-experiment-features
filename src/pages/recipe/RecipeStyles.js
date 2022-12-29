import styled from "styled-components";

export const RecipeStyle = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  background: #fff;
  padding: 40px;
  box-sizing: border-box;

  ul {
    display: flex;
    padding: 0;
    justify-content: center;
    margin-top: 0;
  }

  li {
    list-style-type: none;
    margin-right: 10px;
    color: #777;
  }

  li::after {
    content: ",";
  }

  li:last-child::after {
    content: ",";
  }

  .method {
    text-align: left;
    line-height: 1.5rem;
  }

  .dark {
    background: #555;
    color: #e4e4e4;
  }
`;
