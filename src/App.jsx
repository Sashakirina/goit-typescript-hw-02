import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPictures } from "./api/searchFetch";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [pictures, setPictures] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				setError(false);
				setLoading(true);
				const { data } = await getPictures(query, page);
				setPictures((prevPictures) => [...prevPictures, ...data.results]);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		query && getData();
	}, [query, page]);

	const handleSearch = async (searchQuery) => {
		setQuery(searchQuery);
		setPictures([]);
		setPage(1);
	};

	const handleLoadMore = async () => {
		setPage(page + 1);
	};

	const openModal = (id) => {
		const selectedImage = pictures.find((picture) => picture.id === id);
		setSelectedImage(selectedImage);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setSelectedImage("");
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
