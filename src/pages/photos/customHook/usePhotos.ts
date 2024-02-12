import { APIPhotos } from "@/services/ApiPhotos";
import { IPhoto } from "@/utils/types/typesPhotos";
import { useEffect, useState } from "react";

const photosService = new APIPhotos();

const usePhotosReducer = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [totalPagesNo, setTotalPagesNo] = useState<number>(0);
  const [limiter, setLimiter] = useState<number>(10);
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);

  const onGenerateLimit = async (generatedNo: string) => {
    if (!isNaN(Number(generatedNo)) && Number(generatedNo) >= 5) {
      const limit = parseInt(generatedNo);
      setLoader(true);
      const photosAll = await photosService.fetchPhotos(limit);

      setLoader(false);

      if (photosAll.error) {
        return setError(true);
      }
      setLimiter(limit);
      setPhotos(photosAll.photos);
      setTotalPagesNo(photosAll.totalPages);
    } else {
      window.alert("Please enter a valid number grater than or equal to 5!");
    }
  };

  const onPageChange = async (e: any) => {
    if (!e?.selected && +e.selected !== 0)
      return window.alert("Pagination error!");
    setLoader(true);

    const fetchedPhotos = await photosService.onPageChange(
      +e.selected + 1,
      limiter
    );

    setLoader(false);
    if (fetchedPhotos.error) {
      return setError(true);
    }

    setPhotos(fetchedPhotos.photos);
  };

  useEffect(() => {
    setLoader(false);
  }, []);

  return { onGenerateLimit, loader, photos, totalPagesNo, onPageChange,error
   };
};

export default usePhotosReducer;
