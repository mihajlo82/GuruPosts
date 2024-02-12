import styled from "styled-components";

const PicturesLayout = styled.section`
    width: 90%;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PictureBox = styled.div`
    margin: 7px;
    display: flex;
    align-items: center;
    width: 47%;
    background-color: white;
    border: 3px solid gray;
    border-radius: 10px;
`;

const Image = styled.img`
    width: 150px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

const Title = styled.article`
   display: flex;
   flex:1;
   align-items:center;
   justify-content: center;
   color: black; 
`;

export {PicturesLayout, PictureBox, Image, Title}