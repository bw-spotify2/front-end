import React from "react";

import Button from "@material-ui/core/Button";
import {AppBar} from '@material-ui/core'
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%", 
    marginTop: theme.spacing(20),
    
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

 const Login = () => {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="User Name"
						name="username"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}>
						Sign In
					</Button>
				</form>
			
		</Container>
	);
}


export default Login;