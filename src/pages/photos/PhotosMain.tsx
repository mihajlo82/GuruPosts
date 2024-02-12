import { BodyLayout } from "@/components/bodyLayout/BodyLayoutStyled";
import LimitGenerator from "./LimitGenerator";
import PicturesZone from "./PicturesZone";
import PaginatedItems from "./pagination/Paginate";
import Loader from "@/components/loader/Loader";
import usePhotosReducer from "./customHook/usePhotos";

const PhotosMain = () => {
  const { onGenerateLimit, loader, photos, totalPagesNo, onPageChange, error } =
    usePhotosReducer();

  if (error) return <BodyLayout>Some Error Occured...</BodyLayout>;

  return (
    <BodyLayout>
      <LimitGenerator onGenerateLimit={onGenerateLimit} />

      <PicturesZone photos={photos} />

      <PaginatedItems totalPagesNo={totalPagesNo} onPageChange={onPageChange} />

      {loader && <Loader />}
    </BodyLayout>
  );
};

export default PhotosMain;
