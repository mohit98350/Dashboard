import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const Student = (props) => (
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
							backgroundColor: 'orange',
							height: 56,
							width: 56
						}}
					>
						<EmojiEventsIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>25</b>
					</Typography>
					<Typography
						color="textPrimary"
						variant="h6"
					>
						Lecture left
					</Typography>
				</Grid>

			</Grid>
		</CardContent>
	</Card>
);

export default Student;
