import { LoadMoreBtnProps } from "../../types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore })=> {
	return (
		<div>
			<button type="button" onClick={handleLoadMore}>
				Load more
			</button>
		</div>
	);
}

export default LoadMoreBtn;
