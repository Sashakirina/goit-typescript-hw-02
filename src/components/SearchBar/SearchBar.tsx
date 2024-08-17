import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { FormEvent } from "react";
import { FormElements, SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const searchQuery = (evt.currentTarget.elements as FormElements).search.value;
		if (!searchQuery.trim()) {
			toast.error("This field cannot be empty!", {
				position: "top-right",
			});
			return;
		}
		onSearch(searchQuery);
		evt.currentTarget.reset();
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
