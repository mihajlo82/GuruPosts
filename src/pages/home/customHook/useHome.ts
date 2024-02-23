import { ApiHome } from "@/services/ApiHome";
import { ISingePost } from "@/utils/types/typesHome";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const apiService = new ApiHome();

const useHome = () => {
  const [posts, setPosts] = useState<ISingePost[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [errorPosts, setErrorPosts] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [debouncedSearch] = useDebounce(searchString, 300);

  const searchForPosts = async () => {
    setLoader(true);
    const filteredPosts = await apiService.searchPostsAndUsers(searchString);
    if (!filteredPosts) {
      setErrorPosts(true);
    } else {
      setPosts(filteredPosts);
    }

    setLoader(false);
  };

  useEffect(() => {
    searchForPosts();
  }, [debouncedSearch]);

  return {
    posts,
    loader,
    errorPosts,
    searchString,
    setSearchString,
  };
};

export default useHome;
