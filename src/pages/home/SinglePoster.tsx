import { useState } from "react";
import { ISingePost } from "@/utils/types/types";
import { Button } from "@/components/button/Button";
import { Api } from "@/services/Api";
import PostComments from "./PostComments";
import * as S from "./HomeStyled";
import { useNavigate } from "react-router-dom";

const apiService = new Api();

interface ISinglePoster {
  post: ISingePost;
}

const SinglePoster = ({ post }: ISinglePoster) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const fetchCommentsFromPost = async (postId: number) => {
    const postComments = await apiService.getCommentsFromPost(postId); 
    setComments(postComments);
  };

  const showCommentsHandler = (e: any) => {
    e.stopPropagation();

    if (!showComments) {
      fetchCommentsFromPost(post.id);
    }
    setShowComments((prev) => !prev);
  };

  const proceedToSinglePost = () => {
    navigate(`/posts/${post.id}`);
  };

  const handleComments = () => {
    if (showComments && !comments) return <p>No comments...</p>;
    else if (showComments && comments?.length > 0 && !!comments) {
      return <PostComments comments={comments} />;
    }
  };

  return (
    <S.PosterLayout onClick={proceedToSinglePost}>
      <S.Poster>
        <S.Text>{post.title}</S.Text>

        <S.Author> Posted by: {post.user.name} </S.Author>

        <S.Expand>
          <Button
            text={`${showComments ? "Close Comments" : "Expand Comments"}`}
            onClickHandler={showCommentsHandler}
          />
        </S.Expand>
      </S.Poster>

      {handleComments()}
    </S.PosterLayout>
  );
};

export default SinglePoster;
