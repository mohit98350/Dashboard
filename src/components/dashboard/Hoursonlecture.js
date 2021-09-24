import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Hoursonlecture = (props) => (
	<Card
		sx={{ height: '100%' }}
		{...props}
	>
		<CardContent>
			<Grid
				container
				spacing={2}
				sx={{ justifyContent: 'align-left' }}
			>
				<Grid item>
					<Avatar
						sx={{
							backgroundColor: 'palegreen',
							height: 58,
							width: 58
						}}
					>
						<ScheduleIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>139</b>
					</Typography>
					<Typography
						color="textPrimary"
						variant="h6"
					>
						Hours spent on lectures
					</Typography>
				</Grid>

			</Grid>
		</CardContent>
	</Card>
);

export default Hoursonlecture;
