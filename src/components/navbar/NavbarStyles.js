import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background: #0d5c63;
  padding: 20px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  .brand {
    margin-right: auto;
    color: #fff;
    text-decoration: none;
  }

  a:last-child {
    color: #fff;
    text-decoration: none;
    margin-left: 40px;
    padding: 8px;
    border: 1px solid #fff;
    border-radius: 4px;
    height: 1.5rem;
    font-size: 1.15rem;
  }

  a:last-child:hover {
    background: #fff;
    color: #333;
    border: 1px solid #333;
    /* font-weight: bold; */
  }

  .child {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }
  .bounce:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default StyledNavbar;
