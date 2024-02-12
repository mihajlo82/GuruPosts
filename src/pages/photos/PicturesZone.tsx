import { IPhoto } from "@/utils/types/typesPhotos";
import * as S from "./PhotosStyled";

interface IPicZone {
  photos: IPhoto[];
}

const PicturesZone = ({ photos }: IPicZone) => {
  return (
    <S.PicturesLayout>
      {photos.map((photo: IPhoto) => {
        return (
          <S.PictureBox key={photo.id}>
            <S.Image src={photo.thumbnailUrl} alt="" />
            <S.Title>{photo.title}</S.Title>
          </S.PictureBox>
        );
      })}
    </S.PicturesLayout>
  );
};

export default PicturesZone;
PicturesZone.defaultProps = {
    photos: []
}
