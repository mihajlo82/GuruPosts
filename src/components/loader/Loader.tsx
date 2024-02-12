import * as S from "./LoaderStyled";
// import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const Loader = () => {
  return (
    <S.LoaderLayout> 
        <ClipLoader
          color={"green"}
          loading={true}
        //  cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </S.LoaderLayout>
  );
};

export default Loader;
