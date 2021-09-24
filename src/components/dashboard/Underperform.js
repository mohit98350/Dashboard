import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const Underperform = (props) => (
	<Card
		sx={{ height: '100%' }}
		{...props}
	>
		<CardContent>
			<Grid
				container
				spacing={3}
				sx={{ justifyContent: 'align-left' }}
			>
				<Grid item>
					<Avatar
						sx={{
							backgroundColor: 'lightpink',
							height: 56,
							width: 56
						}}
					>
						<TrendingDownIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>9</b>
						(14%)
					</Typography>
					<Typography
						color="textPrimary"
						variant="h5"
					>
						Underperforming student
					</Typography>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default Underperform;
