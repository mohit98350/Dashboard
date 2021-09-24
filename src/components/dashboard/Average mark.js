import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const Averagemarks = (props) => (
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
						<TrendingUpIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>8.4</b>
					</Typography>
					<Typography
						color="textPrimary"
						variant="h6"
					>
						Average mark
					</Typography>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default Averagemarks;
