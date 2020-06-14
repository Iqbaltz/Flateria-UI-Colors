import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '100%'
	},
	picker: {
		width: '100% !important',
		marginTop: '1rem'
	},
	colorNameInput: {
		width: '100%',
		height: '70px'
	},
	addColorBtn: {
		width: '100%',
		fontSize: '2rem',
		padding: '0.8rem',
		marginTop: '0.4rem'
	}
};

function ColorPickerForm({ paletteIsFull, colors, addNewColor, classes }) {
	const [ currentColor, setCurrentColor ] = useState('royalblue');
	const [ newColorName, setnewColorName ] = useState('');

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
				colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
			ValidatorForm.addValidationRule('isColorUnique', (value) =>
				colors.every(({ color }) => color !== currentColor)
			);
		},
		[ colors, currentColor ]
	);

	const updateCurrentColor = (color) => {
		setCurrentColor(color.hex);
	};

	const handleChange = (evt) => {
		setnewColorName(evt.target.value);
	};

	const handleSubmit = () => {
		const newColor = {
			name: newColorName,
			color: currentColor
		};
		addNewColor(newColor);
	};

	return (
		<div className={classes.root}>
			<ChromePicker className={classes.picker} color={currentColor} onChange={updateCurrentColor} />
			<ValidatorForm onSubmit={handleSubmit}>
				<TextValidator
					onChange={handleChange}
					className={classes.colorNameInput}
					variant="filled"
					label="Color Name"
					margin="normal"
					value={newColorName}
					name="newColorName"
					validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
					errorMessages={[ 'Please enter color name', 'Color name must be unique', 'Color already used!' ]}
				/>
				<Button
					className={classes.addColorBtn}
					variant="contained"
					disabled={paletteIsFull}
					type="submit"
					color="primary"
					style={{ backgroundColor: paletteIsFull ? 'lightgrey' : currentColor }}
				>
					Add Color
				</Button>
			</ValidatorForm>
		</div>
	);
}

export default withStyles(styles)(ColorPickerForm);
