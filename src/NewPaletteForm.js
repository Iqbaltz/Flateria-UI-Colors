import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		alignSelf: 'flex-end',
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 64px)',
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '50%'
	}
}));

function NewPalleteForm({ palettes, history, savePalette }) {
	const classes = useStyles();
	const [ state, setState ] = useState({
		open: true,
		colors: palettes[0].colors
	});

	const { open, colors } = state;
	const paletteIsFull = colors.length >= 20;

	const handleDrawerOpen = () => {
		setState((prevState) => ({
			...prevState,
			open: true
		}));
	};

	const handleDrawerClose = () => {
		setState((prevState) => ({
			...prevState,
			open: false
		}));
	};

	const clearPalette = () => {
		setState((prevState) => ({
			...prevState,
			colors: []
		}));
	};

	const addRandomColor = () => {
		const allColors = palettes.map(({ colors }) => colors).flat();
		const rand = Math.floor(Math.random() * allColors.length);
		setState((prevState) => ({
			...prevState,
			colors: [ ...colors, allColors[rand] ]
		}));
	};

	const addNewColor = (newColor) => {
		setState((prevState) => ({
			...prevState,
			colors: [ ...colors, newColor ]
		}));
	};

	const handleSubmit = (newPalette) => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(' ', '-');
		newPalette.colors = colors;
		savePalette(newPalette);
		history.push('/');
	};

	const removeColor = (colorName) => {
		setState((prevState) => ({
			...prevState,
			colors: colors.filter(({ name }) => name !== colorName)
		}));
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setState((prevState) => ({
			...prevState,
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};

	return (
		<div className={classes.root}>
			<PaletteFormNav
				handleSubmit={handleSubmit}
				handleDrawerOpen={handleDrawerOpen}
				open={open}
				palettes={palettes}
			/>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<div className={classes.container}>
					<Typography variant="h4" gutterBottom>
						Design Your Palette
					</Typography>
					<div className={classes.buttons}>
						<Button className={classes.button} onClick={clearPalette} variant="contained" color="secondary">
							Clear Palette
						</Button>
						<Button
							className={classes.button}
							onClick={addRandomColor}
							variant="contained"
							color="primary"
							disabled={paletteIsFull}
						>
							Random Color
						</Button>
					</div>
					<ColorPickerForm paletteIsFull={paletteIsFull} colors={colors} addNewColor={addNewColor} />
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<DraggableColorList colors={colors} removeColor={removeColor} axis="xy" onSortEnd={onSortEnd} />
			</main>
		</div>
	);
}

export default NewPalleteForm;
