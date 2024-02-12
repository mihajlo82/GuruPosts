import { ISingePost } from "@/utils/types/typesHome";
import { Button } from "@/components/button/Button";
import PostComments from "./PostComments";
import * as S from "./HomeStyled";
import useSinglePoster from "./customHook/useSinglePoster";

interface ISinglePoster {
  post: ISingePost;
}

const SinglePoster = ({ post }: ISinglePoster) => {
  const { showComments, comments, proceedToSinglePost, showCommentsHandler } =
    useSinglePoster(post);

  const handleComments = () => {
    if (showComments && (!comments || !comments[0]?.id))
      return <p>No comments...</p>;
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
SinglePoster.defaultProps = {
  body: "",
  id: 0,
  title: "",
  user: { name: "" },
  userId: 0,
};
