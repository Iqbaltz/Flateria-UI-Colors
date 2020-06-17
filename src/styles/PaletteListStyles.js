import sizes from './sizes';

export default {
	root: {
		backgroundColor: 'royalblue',
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		position: 'relative'
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
