import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { PhotoCamera } from '@material-ui/icons';
import ButtonGroup from '@mui/material/ButtonGroup';
import { palette } from '@mui/system';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			{/* <Box sx={{ flexGrow: 1 }}>
				<AppBar position="relative" >
					<Box sx={{ bgcolor: 'text.disabled', color: 'background.paper' }}>
						<Toolbar className={classes.toolBar}>
							<Typography variant="h5" sx={{ p: 1 }}>
								English
							</Typography>
							<Typography variant="h5" sx={{ p: 1 }}>
								Hindi
							</Typography>
						</Toolbar>
					</Box>
				</AppBar>
			</Box> */}
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" >
					<Box sx={{ bgcolor: 'text.primary', color: 'background.paper' }}>
						<Toolbar className={classes.toolBar}>
							<img src="logo.svg" alt="logo" className={classes.logo} />
							<Typography variant="h3" className={classes.brand} component="div" sx={{ flexGrow: 1 }}>
								AatmaNiti
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Home
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Buy and Sell
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Job Portal
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Business
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Contact
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Login
							</Typography>
							<Typography variant="h5" sx={{ p: 2 }}>
								Register
							</Typography>
						</Toolbar>
					</Box>
				</AppBar>
			</Box>
			<main>
				<div className={classes.container}>
					<Container className={classes.contain}>
						<Typography variant="h5" align="center" color="textPrimary" gutterBottom sx={{ p: 1 }}>
							Still stuck for being financially independent?
						</Typography>
						<Typography variant="h3" align="center" color="textPrimary" paragraph sx={{ p: 4 }}>

							AatmaNiti is the right place to start for it!

						</Typography>
						<Typography variant="h6" align="center" color="textSecondary" paragraph sx={{ p: 1 }}>
							This is a place where you can find a job, sell your products and even display your business or GruhaUdyog Card!

							One can find a employee to do any find of job, sell their handmade crafts, cloths,eatables and what not!
						</Typography>
						<div className={classes.buttons}>
							<Grid container spacing={2} justify="center">
								<Grid item justify="center">
									<Stack spacing={12} direction="row" p={5}>
										<Button variant="contained" color="secondary" sx={{ p: 2 }}>
											Find a Job
										</Button>
										 
										<Button variant="contained" color="primary" sx={{ p: 2 }}>
											Sell Products
										</Button>
										<Button variant="outlined" color="secondary" sx={{ p: 2 }}>
											See AatmaNiti Users...
										</Button>
									</Stack>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title='Image Title'
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5">
											Heading
										</Typography>
										<Typography>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nemo nihil quisquam earum obcaecati quam molestias in distinctio nisi accusamus reiciendis? Cupiditate sint deleniti officia necessitatibus ea odio explicabo laborum.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">View</Button>
										<Button size="small" color="primary">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				<Box sx={{ bgcolor: 'secondary.main', color: 'text.primary', p: 12, m: 8 }}>
					<Typography gutterBottom variant="h2" align="center">Our Vision</Typography>
					<Typography gutterBottom variant="h5" align="center">
						A world where every woman is able to use her voice, make her own decisions, and engage in economic opportunities.
					</Typography>
				</Box>
				<Box  sx={{ p: 12 }}>
					<img src="1.jpg" alt="" className={classes.img} />
					<img src="2.jpg" alt="" className={classes.img} />
				</Box>
				<Typography gutterBottom variant="h5" align="center">
					"Feminism isn’t about making women strong. Women are already strong. It’s about changing the way the world perceives that strength."
				</Typography>
			</main>
			<footer color="primary" className={classes.footer}>
				<Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 12 }}>
					<Typography gutterBottom variant="h2" align="center">AatmaNiti</Typography>
					<Typography gutterBottom variant="h6" align="center">© 2021 AatmaNiti Non-Profit Organisation, India</Typography>
				</Box>
			</footer>
		</>
	);
}

export default App;