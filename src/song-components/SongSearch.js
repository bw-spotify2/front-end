import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import './SongSearch.css'

const SongSearch = () => {
	const [song, setSong] = useState({
		songName: "",
	});

	const handleSongChange = (e) => {
		setSong(e.target.value);
	};

	const songSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.message, err.response));
	};

	return (
		<div className="search-container">
			<img
      style={{height:'100px', borderRadius: '50%'}}
				src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
				alt="spotify logo"></img>
			<h3>Song Finder</h3>
			<form className='search-form'onSubmit={songSubmit}>
				<label htmlFor="search">
					<input
						type="text"
						name="search"
						placeholder=" Enter Song Title....."
						value={song.songName}
						onChange={handleSongChange}></input>
				</label>
        <button className='search-button'type='submit'>Search</button>
			</form>
		</div>
	);
};

export default SongSearch;
