import * as S from "./HeaderStyle";
import logo from "@/assets/logo.jpg";
import NavigationMenu from "../navigation/NavigationMenu";
const Header = () => {
  return (
    <S.HeaderLayout>
      <S.LogoContainer>
        <img src={logo} alt="logo" />
      </S.LogoContainer>

      <NavigationMenu />
    </S.HeaderLayout>
  );
};

export default Header;
