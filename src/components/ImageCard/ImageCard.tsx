import { ImageCardProps } from "../../types";
import style from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({ alt, src, handleOpenModal, id }) => {
	return (
		<>
			<img
				className={style.picture}
				src={src.small}
				alt={alt}
				onClick={() => handleOpenModal(id)}
			/>
		</>
	);
}

export default ImageCard;
