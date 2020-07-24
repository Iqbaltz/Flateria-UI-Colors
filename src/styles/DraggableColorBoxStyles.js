import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
	root: {
		height: '25%',
		width: '20%',
		position: 'relative',
		display: 'inline-block',
		margin: '0 auto',
		cursor: 'pointer',
		marginBottom: '-6.3px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.4)'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '20%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '10%'
		},
		[sizes.down('sm')]: {
			width: '100%',
			height: '5%'
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
		color: (props) => (chroma(props.color).luminance() <= 0.09 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	deleteIcon: {
		transition: 'all .3s ease-in-out'
	}
};

export default styles;
