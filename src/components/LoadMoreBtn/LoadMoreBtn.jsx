function LoadMoreBtn({ handleLoadMore }) {
	return (
		<div>
			<button type="button" onClick={handleLoadMore}>
				Load more
			</button>
		</div>
	);
}

export default LoadMoreBtn;
