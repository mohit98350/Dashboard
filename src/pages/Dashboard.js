import { Helmet } from 'react-helmet';
import {
	Box,
	Container,
	Grid,
	Button
} from '@material-ui/core';
import Lecture from 'src/components/dashboard/Lecture';
import Hoursonlecture from 'src/components/dashboard/Hoursonlecture';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import Student from '../components/dashboard/Student';
import Studentmarks from '../components/dashboard/Studentmarks';
import Graph from '../components/dashboard/Graph';
import Underperform from '../components/dashboard/Underperform';
import Averagemarks from '../components/dashboard/Average mark';
import Homework from '../components/dashboard/Finished homework';
import Piechart from '../components/dashboard/Piechart';

const Dashboard = () => (
	<>
		<Helmet>
			<title>Dashboard</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor: 'background.default',
				minHeight: '100%',
				py: 3
			}}
		>
			<Container maxWidth={false}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						p: 2,
						textAlign: 'center'
					}}
				>
					<Box>
						<h1>Dashboard</h1>
						<p>Mobile UI/UX Design course</p>
					</Box>
					<Box
						sx={{
							justifyContent: 'space-between',
							display: 'flex',
							p: 1
						}}
					>
						<Button
							size="small"
							variant="outlined"
						>
							<CreateIcon />
							Manage dashboard
						</Button>
						<Button
							size="small"
							variant="contained"
						>
							<AddIcon />
							Create new dashboard
						</Button>
					</Box>
				</Box>
				<Grid
					container
					spacing={3}
				>
					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						<Student />
					</Grid>
					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						<Averagemarks />
					</Grid>
					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						<Underperform />
					</Grid>
					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						<Homework sx={{ height: '100%' }} />
					</Grid>

					<Grid
						item
						lg={8}
						md={12}
						xl={6}
						xs={12}
					>
						<Graph sx={{ height: '80%' }} />
						<Grid
							paddingTop={3}
							container
							spacing={3}
						>
							<Grid
								item
								lg={3}
								sm={6}
								xl={6}
								xs={12}
							>
								<Lecture />
							</Grid>
							<Grid
								item
								lg={3}
								sm={6}
								xl={6}
								xs={12}
							>
								<Hoursonlecture />
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						lg={8}
						md={12}
						xl={3}
						xs={12}
					>
						<Studentmarks sx={{ height: '100%' }} />
					</Grid>

					<Grid
						item
						lg={4}
						md={6}
						xl={3}
						xs={12}
					>
						<Piechart sx={{ height: '100%' }} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	</>
);

export default Dashboard;
