import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import TrackContext from "../context/TrackContext";
import "./SongSearch.css";

const SongSearch = () => {
	const [state, setState] = useContext(TrackContext);
	console.log("tracks data", state.saved_songs);
	const [userInput, setUserInput] = useState("");
	const [keyWords, setKeyWords] = useState("");

	useEffect(() => {
		axiosWithAuth()
			.post("/findsongsquery", keyWords)
			.then((res) => {
				console.log("search", res.data);
				let searched = res.data;
				setState({ saved_songs: searched });
			})
			.catch((err) => console.log(err.message, err.response));
	}, [keyWords]);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const songSubmit = (e) => {
		e.preventDefault();
		setKeyWords(userInput);
	};

	return (
		<div className="search-container">
			<button classname="saved-list-btn" type="submit">
				View Saved List
			</button>
			<br />
			<h4>
				<i className="fas fa-music"></i>
				<span> ..</span> or{" "}
			</h4>
			<img
				class="search-img"
				style={{ height: "100px", borderRadius: "50%" }}
				src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
				alt="spotify logo"></img>
			<h3 class="search-header">
				Song <span>Finder</span>
			</h3>
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
			<hr />

			<div className="search-results">
				<p>Results will populate here</p>
			</div>
		</div>
	);
};

export default SongSearch;
