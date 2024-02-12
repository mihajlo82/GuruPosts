import { createContext, useState } from "react";

interface IContext {
  loading: ILoading
}

interface ILoading {
  loader: boolean,
  setLoader: React.Dispatch<React.SetStateAction<boolean>>,
}
export const ContextPost = createContext<IContext | null>(null);


const PostsContext = ({ children }: any) => {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <ContextPost.Provider value={{ loading: {loader, setLoader} }}> {children} </ContextPost.Provider>
  )
};

export default PostsContext;
