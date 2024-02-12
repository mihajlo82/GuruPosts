import { IComment } from "@/utils/types/typesHome";
import * as S from "./HomeStyled";

interface IPostComment {
  comments: IComment[];
}

const PostComments = ({ comments }: IPostComment) => {
  return (
    <S.Comments>
      <h4>Comments:</h4>

      {comments.map((comment: IComment) => {
        return (
          <S.Comment key={comment.id}>
            <h5><i>{comment.email}</i></h5>
            <p>{comment.body}</p>
          </S.Comment>
        );
      })}
    </S.Comments>
  );
};

export default PostComments;
PostComments.defaultProps = {
  comments: []
}
