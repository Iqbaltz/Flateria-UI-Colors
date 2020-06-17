import sizes from './sizes';
import bg from './bg.svg';

export default {
	'@global': {
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 300ms ease-out'
		}
	},
	root: {
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		position: 'relative',
		backgroundColor: '#1d6fd3',
		backgroundImage: `url(${bg})`
		/* background by SVGBackgrounds.com */
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '60%'
		},
		[sizes.down('lg')]: {
			width: '80%'
		},
		[sizes.down('md')]: {
			width: '75%'
		}
	},
	nav: {
		margin: '.5em 0',
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& h1': {
			fontFamily: "'Pacifico', cursive",
			[sizes.down('xs')]: {
				fontSize: '1.3rem'
			}
		},
		'& a': {
			color: 'white',
			[sizes.down('xs')]: {
				fontSize: '0.9rem'
			}
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2,50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1,100%)',
			gridGap: '1.5rem'
		}
	}
};
