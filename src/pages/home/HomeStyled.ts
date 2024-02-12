import styled from "styled-components";

const HomeLayout = styled.section`
  width: 100vw;
`;

const HomeContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PosterLayout = styled.div`
  width: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 1px 6px 3px rgba(195, 204, 195, 0.75);
  -webkit-box-shadow: 0px 1px 6px 3px rgba(195, 204, 195, 0.75);
  -moz-box-shadow: 0px 1px 6px 3px rgba(195, 204, 195, 0.75);
  padding: 10px
  background-color: #e4ede6;

`;

const Poster = styled.article`
  width: 100%;
  padding: 10px;
  background-color: #e4ede6;
  display: flex;
`;

const Text = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Author = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-style: italic;
`;

const Expand = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Comments = styled.article`
  width: 100%;
  padding: 10px;
  background-color: #e4ede6;
`;

const Comment = styled.div`
  width: 90%;
  padding: 10px;
  background-color: #e4ede6;
  margin-top: 15px;
  border: 1px solid green;
  border-radius: 5px;

  & h5 {
    font-size: 0.8rem;
  }
`;

export {
  HomeContainer,
  Poster,
  Text,
  Author,
  Expand,
  Comment,
  PosterLayout,
  Comments,
  HomeLayout
};
