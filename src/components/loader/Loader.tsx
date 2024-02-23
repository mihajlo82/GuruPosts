import * as S from "./LoaderStyled";
import ClipLoader from "react-spinners/ClipLoader";


const Loader = () => {
  console.log("LOADER POSTER")

  return (
    <S.LoaderLayout> 
        <ClipLoader
          color={"green"}
          loading={true}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </S.LoaderLayout>
  );
};

export default Loader;
