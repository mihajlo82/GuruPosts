export interface IPhoto {
    body: string,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
} 

export interface ILimitGenerator {
     onGenerateLimit: (generatedNo: string) => Promise<void>
}

export interface IFetchPhotos {
    photos: IPhoto[];
    totalPages: number;
    error: boolean;
  }


export interface IOnChange {
    photos: IPhoto[],
    error: boolean
    
  }