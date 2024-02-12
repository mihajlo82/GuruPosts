import { BASE_URL } from "@/utils/constants";
import { IPhotos } from "@/utils/types/service/IPhotos";
import { IFetchPhotos, IOnChange } from "@/utils/types/typesPhotos";
import axios from "axios";

export class APIPhotos implements IPhotos {
  baseUrl; 

  constructor() {
    this.baseUrl = BASE_URL; 
  }

  generateNoOfPages = (limit: number, totalPges: number): number => {
    return Math.ceil(totalPges / limit);
  };

  fetchPhotos = async (limit: number): Promise<IFetchPhotos> => {
    try {
      const [photosResponse, allPhotosResponse] = await Promise.all([
        axios.get(`${this.baseUrl}/photos?_page=1&_limit=${limit}`),
        axios.get(`${this.baseUrl}/photos`),
      ]);

      const pagePhotos = photosResponse.data;
      const allPhotosLength = allPhotosResponse.data.length;

      if (!pagePhotos || !allPhotosLength) {
        throw new Error("No data provided...");
      }

      const totalPages = this.generateNoOfPages(limit, allPhotosLength);

      return { photos: pagePhotos, totalPages, error: false };
    } catch (error) {
      return { photos: [], totalPages: 0, error: true };
    }  
  };

  onPageChange = async (page: number, limit: number): Promise<IOnChange> => {
    try {
      const photos = await axios.get(
        `${this.baseUrl}/photos?_page=${page}&_limit=${limit}`
      );

      if (!photos) {
        throw new Error("Photos error...");
      }

      return { photos: photos.data, error: false };
    } catch (error) {
      return { photos: [], error: true };
    }
  };
}
