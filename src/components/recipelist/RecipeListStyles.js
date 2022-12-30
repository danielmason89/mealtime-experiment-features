import styled from "styled-components";

export const StyledRecipeList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  margin: 40px auto;

  .card {
    text-decoration: none;
    background: #fff;
    color: #333;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    position: relative;
  }

  .card:hover {
    transform: rotate(3deg);
  }

  .card h3 {
    color: #555;
    margin-bottom: 6px;
  }

  .card p {
    color: #999;
    font-size: 1.35rem;
  }

  .card div {
    color: #555;
    font-size: 1.5rem;
    margin: 20px 0;
    line-height: 1.5rem;
  }

  .child2 {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }
  .bounce2:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .card.dark {
    background: #555;
  }

  .card.dark p,
  .card.dark h3,
  .card.dark div {
    color: #e4e4e4;
  }

  .delete {
    position: absolute;
    height: 1.25rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
    filter: invert(60%);
    z-index: 1000;
  }
`;
