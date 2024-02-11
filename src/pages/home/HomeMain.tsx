import { BodyLayout } from "@/components/bodyLayout/BodyLayoutStyled";
import { Api } from "@/services/Api";
import { useState, useEffect } from "react";
import SinglePoster from "./SinglePoster";
import { ISingePost } from "@/utils/types/types";
import { useDebounce } from "use-debounce";
import Input from "@/components/input/Input";

const apiService = new Api();

const HomeMain = () => {
  const [posts, setPosts] = useState<ISingePost[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [debouncedSearch] = useDebounce(searchString, 300);
  const [errorPosts, setErrorPosts] = useState<boolean>(false);

  const searchForPosts = async () => {
    const filteredPosts = await apiService.searchPostsAndUsers(searchString);
    if (!filteredPosts) {
      setErrorPosts(true);
    } else {
      setPosts(filteredPosts);
    }
  };

  useEffect(() => {
    searchForPosts();
  }, [debouncedSearch]);

  const handlePosts = () => {
    if (posts.length === 0) {
      return <p>Data No Found!</p>;
    } else {
      return posts.map((post: ISingePost) => (
        <SinglePoster key={post.id} post={post} />
      ));
    }
  };

  if (errorPosts) return <BodyLayout>Some Error Occured...</BodyLayout>;
  return (
    <BodyLayout>
      <Input
        type="text"
        placeholder="Filter by user"
        value={searchString}
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchString(e.target.value)
        }
      />
      {handlePosts()}
      {/* {posts.map((post: ISingePost) => (
        <SinglePoster key={post.id} post={post} />
      ))} */}
    </BodyLayout>
  );
};

export default HomeMain;
