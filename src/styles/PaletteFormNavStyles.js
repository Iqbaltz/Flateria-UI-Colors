import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constant';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[sizes.down('xs')]: {
			marginRight: 0
		}
	},
	hide: {
		display: 'none'
	},
	navTitle: {
		[sizes.down('sm')]: {
			padding: '0 0.5em'
		},
		[sizes.down('xs')]: {
			padding: '0 0.2em'
		},
		'& h6': {
			[sizes.down('xs')]: {
				fontSize: '1.1rem'
			}
		}
	},
	navBtns: {
		marginRight: '1rem',
		'& a': {
			textDecoration: 'none'
		},
		[sizes.down('md')]: {
			marginRight: '0.3rem'
		},
		[sizes.down('sm')]: {
			marginRight: 0
		}
	},
	button: {
		margin: '0 .5rem',
		[sizes.down('md')]: {
			margin: '0.3rem',
			padding: '0.4rem'
		},
		[sizes.down('sm')]: {
			margin: '0.2rem',
			padding: '0.3rem'
		}
	}
}));

export default useStyles;
