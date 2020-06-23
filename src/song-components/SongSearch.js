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

		<div className="search-container">
			<img class="search-img"
      style={{height:'100px', borderRadius: '50%'}}
				src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
				alt="spotify logo"></img>
			<h3 class="search-header">Song Finder</h3>
			<form className='search-form'onSubmit={songSubmit}>
				<label htmlFor="search">
					<input
						type="text"
						name="search"
						placeholder=" Enter Song Title....."
						value={userInput}
						onChange={handleChange}></input>
				</label>
        <button className='search-button'type='submit'>Search</button>
			</form>
			< hr/>

			<div className="search-results">
				<p>Results will populate here</p>
			</div>
		</div>

		

	);
};

export default SongSearch;
