export interface Images {
  id: string
  description: string
  alt_description: string
      urls: {
    regular: string;
        small: string;
      };
  likes: number
  user: string
}

export interface ApiResponse {
  results: Images[]
}

export type HandleVoidArgString = (arg: string) => void;

export type HandleVoid = () => void;

export interface SearchBarProps {
	onSearch: HandleVoidArgString;
}

export interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

export interface ImageGalleryProps {
  pictures: Images[]
  handleOpenModal: HandleVoidArgString
}

export interface ImageCardProps {
  alt: Images["alt_description"]
  src: Images["urls"]
  handleOpenModal: HandleVoidArgString
  id: string
}

export interface LoadMoreBtnProps {
  handleLoadMore: HandleVoid
}