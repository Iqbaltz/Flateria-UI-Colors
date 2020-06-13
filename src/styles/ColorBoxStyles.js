import chroma from 'chroma-js';

export default {
	colorBox: {
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		width: '20%',
		position: 'relative',
		display: 'inline-block',
		margin: '0 auto',
		marginBottom: '-4.7px',
		cursor: 'pointer',
		'&:hover button': {
			opacity: 1
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
		color: 'black'
	},
	copiedText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.1 ? 'white' : 'black')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
		position: 'absolute',
		bottom: '0',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		right: '0',
		width: '60px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		border: 'none'
	},
	copyButton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0, 0.6)' : 'white'),
		position: 'absolute',
		width: '100px',
		height: '30px',
		display: 'inline-block',
		lineHeight: '30px',
		textAlign: 'center',
		top: '50%',
		left: '50%',
		marginTop: '-15px',
		marginLeft: '-50px',
		fontSize: '1rem',
		textTransform: 'uppercase',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		outline: 'none',
		border: 'none',
		transition: '.5s',
		textDecoration: 'none',
		opacity: 0
	},
	copyOverlay: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: '-10',
		opacity: '0',
		transition: 'transform .6s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		position: 'absolute',
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10'
	},
	copyMessage: {
		position: 'fixed',
		left: '0',
		top: '0',
		right: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		transform: 'scale(0.1)',
		opacity: '0',
		zIndex: '-1',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, .2)',
			width: '100%',
			textAlign: 'center',
			padding: '1rem',
			marginBottom: '0',
			textTransform: 'uppercase',
			fontSize: '3rem'
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showMessage: {
		opacity: '1',
		transform: 'scale(1)',
		zIndex: '25',
		transition: 'all .4s .3s ease-in-out'
	}
};
