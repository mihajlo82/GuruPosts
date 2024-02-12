import { useParams, useNavigate } from "react-router-dom";
import * as S from "./SinglePostStyled";
import { useEffect, useState } from "react";
import { ISingePost } from "@/utils/types/typesHome";
import { ApiHome } from "@/services/ApiHome";
import { Button } from "@/components/button/Button";
import Loader from "@/components/loader/Loader";

const apiService = new ApiHome();

const SinglePostScreen = () => {
  const [singlePost, setSinglePost] = useState<ISingePost>();
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const parseId = Number(id);

  const navitateToHome = (msg: string) => {
    setLoader(false)
    if (msg) {
      window.alert(msg);
    }
    navigate("/home");
  };

  const fetchSinglePost = async () => {
    setLoader(true);
    if (parseId) {
      const fetchedPost = await apiService.getSinglePost(parseId);
      setLoader(false);

      if (!fetchedPost || !fetchedPost?.id) {
        navitateToHome("Failed Post Fetching...");
      } else if (fetchedPost) {
        setSinglePost(fetchedPost);
      }
    } else {
      navitateToHome("Not a valid parameter!");
    }
  }; 

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <S.SinglePostLayout>
      <Button text="Back to Home" onClickHandler={()=>navitateToHome('')} />

      <h1>{singlePost?.title}</h1>
      <p>{singlePost?.body}</p>

      {loader && <Loader />}
    </S.SinglePostLayout>
  );
};

export default SinglePostScreen;
