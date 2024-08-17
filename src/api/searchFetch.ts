import axios from "axios";
	import { ApiResponse } from "../types";

const API_KEY = "47hxLK_IRv0VxDoFBV2GjKTu0CB0ttZ3za2upmlqmdE";
axios.defaults.baseURL = "https://api.unsplash.com";

export const getPictures = async (searchQuery: string, page: number): Promise<ApiResponse> => {
	const {data} = await axios.get<ApiResponse>(
		`/search/photos?page=${page}&query=${searchQuery}`,
		{
			params: {
				per_page: 21,
				orientation: "landscape",
				client_id: API_KEY,
			},
		}
	);
	return data;
};
