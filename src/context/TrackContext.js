import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const TrackContext = createContext();

export const TrackHandler = ({ children }) => {
	let initialState = {
		saved_songs: [],
		users: [],
	};

	const [state, setState] = useState(initialState);

	// useEffect(() => {
	// 	axios
	// 		.get("https://cors-anywhere.herokuapp.com/https://spotify-api-project.herokuapp.com/api/frontend/savedsongs")
	// 		.then((res) => {
	// 			console.log("user data", res);
	// 			return axios
	// 				.get(
	// 					"https://cors-anywhere.herokuapp.com/https://spotify-api-project.herokuapp.com/api/frontend/users"
	// 				)
	// 				.then((res) => {
	// 					console.log("saved song data", res);
	// 				});
	// 		})
	// 		.catch((err) => console.log('errors',err.message, err.response));
	// }, []);

	return (
		<TrackContext.Provider value={[state, setState]}>
			{children}
		</TrackContext.Provider>
	);
};

export default TrackContext;
