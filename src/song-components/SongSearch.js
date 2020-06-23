import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import TrackContext from "../context/TrackContext";
import "./SongSearch.css";

const SongSearch = () => {
	const [state, setState] = useContext(TrackContext);
	console.log("tracks data", state.saved_song);
	const [userInput, setUserInput] = useState("");
	const [songTitle, setSongTitle] = useState("");

	useEffect(() => {
		axiosWithAuth()
			.get("/savedsongs")
			.then((res) => {
				console.log(res);
				let saved_song = res.data;
				setState({ saved_song: saved_song });
			})
			.catch((err) => console.log(err.message, err.response));
	}, [songTitle]);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const songSubmit = (e) => {
		e.preventDefault();
		setSongTitle(userInput);
	};

	return (
		<>
			<div className="search-container">
				<img
					style={{ height: "80px", borderRadius: "50%" }}
					src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
					alt="spotify logo"></img>
				<h3>Song Finder</h3>
				<form className="search-form" onSubmit={songSubmit}>
					<label htmlFor="search">
						<input
							type="text"
							name="search"
							placeholder=" Enter Song Title....."
							value={userInput}
							onChange={handleChange}></input>
					</label>
					<button className="search-button" type="submit">
						Search
					</button>
				</form>
			</div>
			{/* <div className="results-container">
				{state.saved_song.map((item) => (
					<li key={item.id} item={item.song_name}></li>
				))}
			</div> */}
		</>
	);
};

export default SongSearch;
