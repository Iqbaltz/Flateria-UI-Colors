import sizes from './sizes';

export default {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		position: 'relative'
	},
	colors: {
		height: '90%',
		marginBottom: '-1.1px'
	},
	goBack: {
		height: '50%',
		width: '20%',
		position: 'relative',
		backgroundColor: 'black',
		display: 'inline-block',
		margin: '0 auto',
		marginBottom: '-4.4px',
		'& a': {
			color: 'white',
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
			textDecoration: 'none'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '33.333%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '10%'
		}
	}
};
