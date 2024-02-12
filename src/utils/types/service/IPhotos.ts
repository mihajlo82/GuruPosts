import { IFetchPhotos, IOnChange } from "../typesPhotos";

export interface IPhotos {
  generateNoOfPages: (limit: number, totalPges: number) => number,
  fetchPhotos: (limit: number) => Promise<IFetchPhotos>,
  onPageChange: (page: number, limit: number) => Promise<IOnChange> 
}

