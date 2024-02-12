import styled from "styled-components";

const SinglePostLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 45px;
  color: white;
  background-image: linear-gradient(
    to right,
    #abafb5,
    #9ea8ac,
    #93a09f,
    #8d9891,
    #8b8e83
  );

  & h1{
    font-style: italic;
    margin-top: 25px;
    padding: 5px;
  }

  & p {
    margin-top: 30px;
    padding: 10px
  }
`;
export { SinglePostLayout };
