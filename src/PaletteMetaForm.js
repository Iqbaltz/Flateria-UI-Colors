import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

function PaletteMetaForm({ palettes, handleSubmit, hideForm }) {
	const [ stage, setStage ] = useState('form');
	const [ newPaletteName, setNewPaletteName ] = useState('');

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
				palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
			);
		},
		[ palettes ]
	);

	const handleChange = (evt) => {
		setNewPaletteName(evt.target.value);
	};

	const showEmojiPicker = () => {
		setStage('emoji');
	};

	const savePalette = (emoji) => {
		const newPalette = {
			paletteName: newPaletteName,
			emoji: emoji.native
		};
		handleSubmit(newPalette);
	};

	return (
		<div>
			<Dialog open={stage === 'emoji'} onClose={hideForm}>
				<DialogTitle id="form-dialog-title">Choose an Emoji Palette</DialogTitle>
				<Picker title="Pick an emoji" emoji="point_up" onSelect={savePalette} />
			</Dialog>
			<Dialog open={stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
				<ValidatorForm onSubmit={showEmojiPicker}>
					<DialogTitle id="form-dialog-title">Enter a Palette Name</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your beutiful palette, and make sure it's unique :)
						</DialogContentText>
						<TextValidator
							label="Palette Name"
							value={newPaletteName}
							name="newPaletteName"
							fullWidth
							margin="normal"
							onChange={handleChange}
							validators={[ 'required', 'isPaletteNameUnique' ]}
							errorMessages={[ 'Enter Palette Name', 'Name already used' ]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={hideForm} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
}

export default PaletteMetaForm;
