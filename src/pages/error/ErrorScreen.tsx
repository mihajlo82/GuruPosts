import * as S from "./ErrorStyled";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <S.ErrorLayout>
      <S.Paragpraph>
        Page Not Found... Go To <Link to="/home">Homepage</Link>
      </S.Paragpraph>
    </S.ErrorLayout>
  );
};

export default ErrorScreen;
