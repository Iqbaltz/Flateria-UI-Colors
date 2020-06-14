import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	navBtns: {
		marginRight: '1rem',
		'& a': {
			textDecoration: 'none'
		}
	},
	button: {
		margin: '0 .5rem'
	}
}));

function PaletteFormNav({ handleSubmit, handleDrawerOpen, open, palettes }) {
	const [ showingForm, setShowingForm ] = useState(false);

	const showForm = () => {
		setShowingForm(true);
	};

	const hideForm = () => {
		setShowingForm(false);
	};

	const classes = useStyles();
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
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
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
