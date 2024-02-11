import { useParams, useNavigate } from "react-router-dom";
import * as S from "./SinglePostStyled";
import { useEffect, useState } from "react";
import { ISingePost } from "@/utils/types/types";
import { Api } from "@/services/Api";
import { Button } from "@/components/button/Button";

const apiService = new Api();

const SinglePostScreen = () => {
  const [singlePost, setSinglePost] = useState<ISingePost>();
  const navigate = useNavigate();
  const { id } = useParams();
  const parseId = Number(id);

  const navitateToHome = () => {
    navigate("/home");
  };

  const fetchSinglePost = async () => {
    try {
      if (parseId) {
        const fetchedPost = await apiService.getSinglePost(parseId);

        if (!fetchedPost || !fetchedPost?.id) {
          throw new Error("No data found!");
        }

        setSinglePost(fetchedPost);
      } else {
        throw new Error("Invalid Parameter!");
      }
    } catch (error) {
      window.alert(error);
      navitateToHome();
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <S.SinglePostLayout>
      <Button text="Back to Home" onClickHandler={navitateToHome} />

      <h1>{singlePost?.title}</h1>
      <p>{singlePost?.body}</p>
    </S.SinglePostLayout>
  );
};

export default SinglePostScreen;
