export interface ISingePost {
    body: string,
    id: number,
    title: string,
    user: IUser,
    userId: number
} 

export interface IUser {
    id: number,
    name: string,
    email: string
} 

export interface IComment {
    body: string,
    id: number,
    name: string,
    email: string,
    postId: number
} 
