import React, { useState, createContext } from "react";


const UserContext = createContext();

export const UserController = ({ children }) => {
	let initialState = {
		user: [],
		
	};

	const [currentUser, setCurrentUser] = useState(initialState);

	

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;