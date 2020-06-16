import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotos from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import useStyles from './styles/PaletteFormNavStyles';

function PaletteFormNav({ handleSubmit, handleDrawerOpen, open, palettes }) {
	const classes = useStyles();
	const [ showingForm, setShowingForm ] = useState(false);

	const showForm = () => {
		setShowingForm(true);
	};

	const hideForm = () => {
		setShowingForm(false);
	};

	return (
		<div>
			<CssBaseline />
			<AppBar
				position="fixed"
				color="default"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar className={classes.navTitle}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<AddToPhotos />
					</IconButton>
					<Typography variant="h6" noWrap>
						Create a New Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<Link to="/">
						<Button className={classes.button} variant="contained" color="secondary">
							Go Back
						</Button>
					</Link>
					<Button className={classes.button} variant="contained" color="primary" onClick={showForm}>
						Save
					</Button>
				</div>
			</AppBar>
			{showingForm && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={hideForm} />}
		</div>
	);
}

export default PaletteFormNav;
