import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
	root: {
		height: '25%',
		width: '20%',
		position: 'relative',
		display: 'inline-block',
		margin: '0 auto',
		cursor: 'pointer',
		marginBottom: '-5px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.4)'
		}
	},
	boxContent: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		letterSpacing: '1px',
		padding: '10px',
		width: '100%',
		fontSize: '12px',
		textTransform: 'uppercase',
		color: 'rgba(0,0,0,0.5)',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	deleteIcon: {
		transition: 'all .3s ease-in-out'
	}
};

const DraggableColorBox = SortableElement(({ color, name, handleClick, classes }) => {
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
