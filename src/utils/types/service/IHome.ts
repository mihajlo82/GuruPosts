import { IComment, ISingePost } from "../typesHome";

export interface IHome {
    getPostsAndUsers: () => Promise<ISingePost[] | null>,
    searchPostsAndUsers: (searchString: string) => Promise<ISingePost[] | null>,
    getCommentsFromPost: (postId: number) => Promise<IComment[] | null>,
    getSinglePost: (postId: number) => Promise<ISingePost | null>  

}
 