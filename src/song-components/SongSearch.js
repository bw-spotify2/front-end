import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import TrackContext from "../context/TrackContext";
import UserContext from "../context/UserContext";

import "./SongSearch.css";
import FavoritesList from "./FavoritesList";

const SongSearch = () => {
	const [state, setState] = useContext(TrackContext);
	const [currentUser] = useContext(UserContext);

	console.log("song search state", state, currentUser);
	const user = currentUser;

	const [search, setSearch] = useState({
		keyWords: "",
	});

	const songSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/findsongsquery", search)
			.then((res) => {
				console.log("search results", res.data);
				let searched = res.data;
				setState({ saved_songs: searched });
			})
			.catch((err) => console.log(err.message, err.response));
		setSearch({ keyWords: "" });
	};

	const handleChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
		console.log("search text", search);
	};

	function openFaves() {
		document.getElementById("Faves").style.display = "block";
		document.getElementById("SongUI").style.display = "none";
	}

	function addToFavorites(id) {
		const SongId = id;
		console.log("song id", SongId);
		axiosWithAuth()
			.post(`/savedsongs/${user}`, SongId)
			.then((res) => {
				console.log(res);
				openFaves();
			})
			.catch((err) => console.log(err.message, err.response));
	}

	return (
		<div className="search-container">
			<Link to="/favorites"></Link>
			<button classname="saved-list-btn" type="submit" onClick={openFaves}>
				View Saved List
			</button>

			<br />
			<h4>
				<i className="fas fa-music"></i>
				<span> ..</span> or{" "}
			</h4>
			<img
				className="search-img"
				style={{
					height: "100px",
					borderRadius: "50%",
					boxShadow: "2px 4px black",
				}}
				src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png"
				alt="spotify logo"></img>
			<h3 className="search-header">
				Song <span>Finder</span>
			</h3>
			<form className="search-form" onSubmit={songSubmit}>
				<label htmlFor="keyWords">
					<input
						type="text"
						name="keyWords"
						placeholder=" Enter Song Title....."
						value={search.keyWords}
						onChange={handleChange}></input>
				</label>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<hr />

			{state.saved_songs.map((song) => (
				<div className="search-results" key={song.id}>
					<div className="faves-button" onClick={() => addToFavorites(song.id)}>
						+ faves
					</div>
					<div className="search-imgs">
						<img src={song.album.images[1].url} alt="album-artwork" />
					</div>
					<div className="search-name">
						{song.album.artists[0].name}
						<br />
						<br />
						{song.name}
						<hr />
					</div>
				</div>
			))}
		</div>
	);
};

export default SongSearch;
