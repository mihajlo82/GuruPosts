import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorLayout = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    hsl(164deg 27% 46%) 0%,
    hsl(162deg 30% 47%) 11%,
    hsl(160deg 32% 48%) 22%,
    hsl(158deg 35% 49%) 33%,
    hsl(156deg 36% 50%) 44%,
    hsl(153deg 40% 51%) 56%,
    hsl(150deg 43% 53%) 67%,
    hsl(147deg 46% 54%) 78%,
    hsl(143deg 49% 56%) 89%,
    hsl(139deg 51% 58%) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragpraph = styled.article`
  color: white;
  font-size: 1.7rem;
  max-width: 500px;
  text-align: center;
`;
export { ErrorLayout, Paragpraph };
