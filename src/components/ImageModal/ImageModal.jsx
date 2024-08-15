import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ modalIsOpen, pictures, closeModal }) {
	const { description, urls, alt_description, likes, user } = pictures;
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			className={style.modal}
			overlayClassName={style.overlay}
			preventScroll={true}>
			<div className={style.modalWrap}>
				<div className={style.closeIconWrap}>
					<IoMdClose onClick={closeModal} className={style.closeIcon} />
				</div>
				<img
					src={urls.regular}
					alt={alt_description}
					className={style.picture}
				/>
				<p className={style.title}>{description}</p>
				<p className={style.details}>
					<span>Author: {user.name}</span> <span>Likes: {likes}</span>
				</p>
			</div>
		</Modal>
	);
}

export default ImageModal;
