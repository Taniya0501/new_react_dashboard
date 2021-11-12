import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	toolBar: {
		margin: '15px 50px'
	},
	brand: {
		marginLeft: '500px'
	},
	logo: {
		height: '50px',
		width: '50px',
		marginRight: '10px'
	},
	container: {
		padding: '40px 0',
		marginTop: '140px'
	},
	contain: {
		width: '100%'
	},
	oneB: {
		margin: '50px'
	},
	icons: {
		marginRight: '20px'
	},
	buttons: {
		marginTop: '10px'
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardGrid: {
		padding: '30px 0px'		
	},
	cardMedia: {
		paddingTop: '56.25%'
	},
	cardContent: {
		flexGrow: 1
	},
	img: {
		height: '500px',
		width: '50%'
	},
	footer: {
		paddingTop: '70px'
	}
}));

export default useStyles;