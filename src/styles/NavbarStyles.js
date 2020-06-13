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
		fontFamily: "'Roboto Mono', monospace",
		'& a': {
			textDecoration: 'none',
			color: 'black'
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
			backgroundColor: 'blueviolet',
			border: '2px solid blueviolet',
			marginTop: '-3px',
			outline: 'none',
			boxShadow: 'none'
		}
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1em'
	}
};
