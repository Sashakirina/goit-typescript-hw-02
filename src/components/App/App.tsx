import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { getPictures } from "../../api/searchFetch";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { HandleVoid, HandleVoidArgString, Images } from "../../types";

function App () {
	const [query, setQuery] = useState<string>("");
	const [page, setPage] = useState<number>(1);
	const [pictures, setPictures] = useState<Images[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);
	const [selectedImage, setSelectedImage] = useState<Images | null | undefined>(null);

	useEffect(() => {
		const getData = async () => {
			try {
				setError(null);
				setLoading(true);
				const data = await getPictures(query, page);
				setPictures((prevPictures) => [...prevPictures, ...data.results]);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		query && getData();
	}, [query, page]);

	const handleSearch: HandleVoidArgString = async (searchQuery) => {
		setQuery(searchQuery);
		setPictures([]);
		setPage(1);
	};

	const handleLoadMore: HandleVoid = async () => {
		setPage(page + 1);
	};

	const openModal = (id: string) => {
		const selectedImage = pictures.find((picture) => picture.id === id);
		setSelectedImage(selectedImage);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setSelectedImage(null);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			{loading && <Loader />}
			{pictures.length > 0 && (
				<ImageGallery pictures={pictures} handleOpenModal={openModal} />
			)}
			{modalIsOpen && selectedImage && (
				<ImageModal
					modalIsOpen={modalIsOpen}
					pictures={selectedImage}
					closeModal={closeModal}
				/>
			)}
			{error && <ErrorMessage />}
			{pictures.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
		</>
	);
}

export default App;
