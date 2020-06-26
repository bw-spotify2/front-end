import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import TrackContext from "../context/TrackContext";
import styled from "styled-components";
import "./SongSearch.css";
import axiosWithAuth from "../utils/axiosWithAuth";

const CardWrapper = styled.div`
	background-color: #404946;
	border-radius: 5px;
	margin: 0 auto;
	margin-top: 5%;
	padding: 5px;
	height: 500px;
	width: 500px;

	@media screen and (max-width: 525px) {
		width: 350px;
	}
`;

const Close = styled.div`
	text-align: right;
	margin: 5px 0px 5px 450px;

	&:hover {
		background-color: white;
		border-radius: 10px;
		padding: 5px;
		color: black;
		font-weight: 900;
	}

	@media screen and (max-width: 525px) {
		margin: 5px 0px 5px 300px;
	}
`;

function openFaves() {
	console.log("hello from openFaves");
	document.getElementById("Faves").style.display = "block";
	document.getElementById("SongUI").style.display = "none";
}

function closeFaves() {
	document.getElementById("Faves").style.display = "none";
	document.getElementById("SongUI").style.display = "flex";
}

function FavoritesList() {
	const [state, setState] = useContext(TrackContext);
	const [currentUser, setCurrentUser] = useContext(UserContext);
	const [fave, setFave] = useState([]);

	console.log("fav list state", currentUser);

	useEffect(() => {
		axiosWithAuth()
			.get("/savedsongs")
			.then((res) => {
				console.log("fav data", res.data);
				setFave(res.data);
			})
			.catch((err) => console.log(err.message, err.response));
	}, []);

	const deleteFav = (id) => {
		axiosWithAuth()
			.delete("/savedsongs", id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div id="Faves">
			<CardWrapper>
				{/* <h1>{currentUser} 's Faves</h1> */}
				<Close onClick={closeFaves}>Close</Close>
				{fave.map((song) => (
					<div className="faves-container" key={song.id}>
						<div className="faves-info">
							<h4>
								{song.song_name}
								<br />
								from: {song.album_name}
								<br />
								<i
									className="fas fa-trash-alt"
									style={{ color: "red", cursor: "pointer" }}
									onClick={deleteFav}></i>
							</h4>
						</div>
					</div>
				))}
			</CardWrapper>
		</div>
	);
}

export default FavoritesList;
