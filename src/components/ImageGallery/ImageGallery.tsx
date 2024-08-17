import { ImageGalleryProps } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery: React.FC<ImageGalleryProps> = ({ pictures, handleOpenModal }) => {
	return (
		<ul className={style.galleryList}>
			{pictures.map(({ urls, alt_description, id }) => (
				<li key={id} className={style.galleryContainer}>
					<ImageCard
						alt={alt_description}
						src={urls}
						handleOpenModal={handleOpenModal}
						id={id}
					/>
				</li>
			))}
		</ul>
	);
}

export default ImageGallery;
