import axios from "axios";

const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");
	return axios.create({
		baseURL: "https://cors-anywhere.herokuapp.com/https://spotify-api-project.herokuapp.com/api/frontend",
		headers: {
			authorization: token,
		},
	});
};

export default axiosWithAuth;
