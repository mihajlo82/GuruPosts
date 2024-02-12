import { BodyLayout } from "@/components/bodyLayout/BodyLayoutStyled";
import SinglePoster from "./SinglePoster";
import { ISingePost } from "@/utils/types/typesHome";
import Input from "@/components/input/Input";
import Loader from "@/components/loader/Loader";
import useHome from "./customHook/useHome"; 

const HomeMain = () => {
  const { 
    posts,
    loader,
    errorPosts,
    searchString,
    setSearchString,
  } = useHome();

  const handlePosts = () => {
    if (posts.length === 0 && !loader) {
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

      {loader && <Loader />}
    </BodyLayout>
  );
};

export default HomeMain;
