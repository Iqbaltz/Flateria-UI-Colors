import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = ({ classes, paletteName, emoji, colors, handleClick, handleDelete, id }) => {
	const miniColorBoxes = colors.map((color) => (
		<div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
	));

	const deletePalette = (e) => {
		e.stopPropagation();
		handleDelete(id);
	};

	return (
		<div className={classes.root} onClick={handleClick}>
			<DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
