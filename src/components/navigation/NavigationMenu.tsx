import * as S from "./NavigationStyled";

const NavigationMenu = () => {
  return (
    <S.NavigationContainer>
      <ul>
        <li>
          <S.NavLink to={"/home"}>Home </S.NavLink>
        </li>

        <li>
          <S.NavLink to={"/photos"}>Photos</S.NavLink>
        </li>
      </ul>
    </S.NavigationContainer>
  );
};

export default NavigationMenu;
