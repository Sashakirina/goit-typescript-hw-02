import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const searchQuery = evt.target.elements.search.value;
		if (!searchQuery.trim()) {
			toast.error("This field cannot be empty!", {
				position: "top-right",
			});
			return;
		}
		onSearch(searchQuery);
		evt.target.reset();
	};

	return (
		<header>
			<form onSubmit={handleSubmit} className={style.searchForm}>
				<input
					className={style.searchInput}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					name="search"
				/>
				<button type="submit">Search</button>
			</form>
			<Toaster />
		</header>
	);
}

export default SearchBar;
