import styled from "styled-components";

const LoaderLayout = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left:0;
  z-index: 10;
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {LoaderLayout} 