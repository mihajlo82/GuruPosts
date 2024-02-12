import { ApiHome } from "@/services/ApiHome";
import { IComment, ISingePost } from "@/utils/types/typesHome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiService = new ApiHome();

const useSinglePoster = (post: ISingePost) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const navigate = useNavigate();

  const fetchCommentsFromPost = async (postId: number) => {
    const postComments = await apiService.getCommentsFromPost(postId);
    if (postComments) {
      setComments(postComments);
    }
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
  return { showComments, comments, proceedToSinglePost, showCommentsHandler };
};

export default useSinglePoster;
useSinglePoster.defaultProps = {
  body: "",
  id: 0,
  title: "",
  user: {
    id: 0,
    name: "",
    email: ""
  },
  userId: 0,
};
