import axios from "axios";

const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");
	return axios.create({
		baseURL: "https://spotify-api-project.herokuapp.com/api/frontend",
		
	});
};

export default axiosWithAuth;
