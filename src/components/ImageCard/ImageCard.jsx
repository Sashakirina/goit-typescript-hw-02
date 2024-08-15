import style from "./ImageCard.module.css";

function ImageCard({ alt, src, handleOpenModal, id }) {
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
