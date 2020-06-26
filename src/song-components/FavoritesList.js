import React, { useState, useEffect, useContext } from "react";
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
	const { users, saved_songs } = state;
	console.log("fav list state", users);

	useEffect(() => {
		axiosWithAuth()
			.get(`/savedsongs/${users}`)
			.then((res) => {
				console.log("users data", res);
				const favTracks = res.data;
			})
			.catch((err) => console.log(err.message, err.response));
	}, [users]);
	return (
		<div id="Faves">
			<CardWrapper>
				<Close onClick={closeFaves}>Close</Close>

				<p>list will go here</p>
			</CardWrapper>
		</div>
	);
}

export default FavoritesList;
