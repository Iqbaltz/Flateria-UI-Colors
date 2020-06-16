import sizes from './sizes';

export default {
	Navbar: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '6vh'
	},

	logo: {
		marginRight: '15px',
		height: '100%',
		background: '#eeeeee',
		padding: '0 13px',
		display: 'flex',
		fontSize: '20px',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: "'Pacifico', cursive",
		'& a': {
			textDecoration: 'none',
			color: 'black'
		},
		[sizes.down('xs')]: {
			display: 'none'
		}
	},
	slider: {
		width: '340px',
		margin: '0 1em',
		display: 'inline-block',
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		'& .rc-slider-rail': {
			height: '8px'
		},
		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
			width: '13px',
			height: '13px',
			backgroundColor: 'royalblue',
			border: '2px solid royalblue',
			marginTop: '-3px',
			outline: 'none',
			boxShadow: 'none'
		},
		[sizes.down('xs')]: {
			width: '150px',
			margin: '0 0.5em'
		}
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1em'
	}
};
