import React, { useState,useEffect,useContext } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import TrackContext from '../context/TrackContext'
import './SongSearch.css'

const SongSearch = () => {
	const [state, setState] = useContext(TrackContext)
	console.log('tracks data',state)
	const [songTitle, setSongTitle] = useState('')

	const handleSongChange = (e) => {
		setSongTitle(e.target.value);
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
      style={{height:'80px', borderRadius: '50%'}}
				src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
				alt="spotify logo"></img>
			<h3>Song Finder</h3>
			<form className='search-form'onSubmit={songSubmit}>
				<label htmlFor="search">
					<input
						type="text"
						name="search"
						placeholder=" Enter Song Title....."
						value={songTitle.songName}
						onChange={handleSongChange}></input>
				</label>
        <button className='search-button'type='submit'>Search</button>
			</form>
		</div>
	);
};

export default SongSearch;
