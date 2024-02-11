import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationContainer = styled.nav`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & ul {
    display: flex;
    list-style-type: none;
  }

  & li {
    color: black;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  margin-left: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

export { NavigationContainer, NavLink };
