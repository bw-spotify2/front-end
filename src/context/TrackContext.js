import React, { useState, createContext } from "react";


const TrackContext = createContext();

export const TrackHandler = ({ children }) => {
	let initialState = {
		saved_songs: [],
		
	};

	const [state, setState] = useState(initialState);

	

	return (
		<TrackContext.Provider value={[state, setState]}>
			{children}
		</TrackContext.Provider>
	);
};

export default TrackContext;
