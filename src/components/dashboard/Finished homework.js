import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';

const Homework = (props) => (
	<Card {...props}>
		<CardContent>
			<Grid
				container
				spacing={3}
				sx={{ justifyContent: 'align-left' }}
			>
				<Grid item>
					<Avatar
						sx={{
							backgroundColor: 'lightgreen',
							height: 56,
							width: 56
						}}
					>
						<AssessmentIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>83%</b>
					</Typography>
					<Typography
						color="textPrimary"
						variant="h6"
					>
						Finished homework
					</Typography>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default Homework;
