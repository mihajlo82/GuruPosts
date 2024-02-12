import { BASE_URL } from "@/utils/constants";
import { IHome } from "@/utils/types/service/IHome";
import { IComment, ISingePost, IUser } from "@/utils/types/typesHome";
import axios from "axios";

export class ApiHome implements IHome {
  baseUrl;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  getPostsAndUsers = async (): Promise<ISingePost[] | null> => {
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        axios.get(`${this.baseUrl}/posts`),
        axios.get(`${this.baseUrl}/users`),
      ]);

      const postsData = postsResponse.data;
      const usersData = usersResponse.data;

      const postsWithUsers = postsData.map((post: ISingePost) => {
        const user = usersData.find((user: IUser) => user.id === post.userId);
        return { ...post, user };
      });

      return await postsWithUsers;
    } catch (error) {
      return null;
    }
  };

  searchPostsAndUsers = async (
    searchString: string
  ): Promise<ISingePost[] | null> => {
    try {
      const unfilteredPosts = await this.getPostsAndUsers();
      if (!unfilteredPosts) {
        throw new Error("Data fetching failed!");
      }

      return unfilteredPosts.filter((post: ISingePost) =>
        post.user.name.toLowerCase().includes(searchString.toLowerCase())
      );
    } catch (error) {
      return null;
    }
  };

  getCommentsFromPost = async (postId: number): Promise<IComment[] | null> => {
    try {
      const comments = await axios.get(
        `${this.baseUrl}/comments?postId=${postId}`
      );
      return comments.data;
    } catch (error) {
      return null;
    }
  };

  getSinglePost = async (postId: number): Promise<ISingePost | null> => {
    try {
      if (!postId) {
        throw new Error("Parameter Not Valid!");
      }
      const singlePost = await axios.get(`${this.baseUrl}/posts/${postId}`);
      return singlePost.data;
    } catch (error) {
      return null;
    }
  };
}
