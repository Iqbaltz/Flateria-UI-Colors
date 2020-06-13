import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
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
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
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
	}
}));

function NewPalleteForm(props) {
	const classes = useStyles();
	const [ state, setState ] = useState({
		open: true,
		currentColor: 'royalblue',
		colors: props.palettes[0].colors,
		newColorName: '',
		newPaletteName: ''
	});

	const { open, currentColor, colors, newColorName, newPaletteName } = state;

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
				colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
			ValidatorForm.addValidationRule('isColorUnique', (value) =>
				colors.every(({ color }) => color !== currentColor)
			);
			ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
				props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
			);
		},
		[ colors, currentColor, props.palettes ]
	);

	// const [ currentColor, setCurrentColor ] = useState('magenta');
	// const [ colors, setColors ] = useState([]);
	// const [ newColorName, setnewColorName ] = useState([]);

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

	const handleChangeComplete = (color) => {
		setState((prevState) => ({
			...prevState,
			currentColor: color.hex
		}));
	};

	const addNewColor = () => {
		const newColor = { color: currentColor, name: newColorName };
		setState((prevState) => ({
			...prevState,
			colors: [ ...colors, newColor ]
		}));
	};

	const handleChange = (evt) => {
		setState((prevState) => ({
			...prevState,
			[evt.target.name]: evt.target.value
		}));
	};

	const handleSubmit = () => {
		const newPalette = {
			paletteName: newPaletteName,
			id: newColorName.toLowerCase().replace(' ', '-'),
			colors: colors
		};
		props.savePalette(newPalette);
		props.history.push('/');
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
					<ValidatorForm onSubmit={handleSubmit}>
						<TextValidator
							value={newPaletteName}
							name="newPaletteName"
							validators={[ 'required', 'isPaletteNameUnique' ]}
							errorMessages={[ 'Enter Pallete Name', 'Palette Name Already Taken' ]}
							onChange={handleChange}
						/>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</ValidatorForm>
				</Toolbar>
			</AppBar>
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
				<Typography variant="h4">Design Your Palette</Typography>
				<div>
					<Button variant="contained" color="secondary">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Color
					</Button>
				</div>
				<ChromePicker color={currentColor} onChange={handleChangeComplete} />
				<ValidatorForm onSubmit={addNewColor}>
					<TextValidator
						onChange={handleChange}
						value={newColorName}
						name="newColorName"
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'Please enter color name',
							'Color name must be unique',
							'Color already used!'
						]}
					/>
					<Button variant="contained" type="submit" color="primary" style={{ backgroundColor: currentColor }}>
						Add Color
					</Button>
				</ValidatorForm>
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
