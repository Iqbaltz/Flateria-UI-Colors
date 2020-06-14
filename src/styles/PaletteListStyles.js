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
		flexWrap: 'wrap'
	},
	nav: {
		margin: '.5em 0',
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& a': {
			color: 'white'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,30%)',
		gridGap: '5%'
	}
};
