export default {
	root: {
		backgroundColor: 'white',
		borderRadius: '5px',
		padding: '.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'&:hover svg': {
			opacity: 1
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '140px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		fontSize: '1.5rem',
		marginLeft: '0.5rem'
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4.8px'
	},
	deleteIcon: {
		position: 'absolute',
		right: 0,
		top: 0,
		backgroundColor: '#e22b05',
		color: 'white',
		width: '24px',
		height: '24px',
		padding: '8px',
		zIndex: 10,
		opacity: 0,
		transition: '0.3s ease-in-out'
	}
};
