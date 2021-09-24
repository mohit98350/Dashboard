import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

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
							backgroundColor: 'voilet',
							height: 56,
							width: 56
						}}
					>
						<PeopleIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="h3"
					>
						<b>62</b>
					</Typography>
					<Typography
						color="textPrimary"
						variant="h6"
					>
						Student
					</Typography>
				</Grid>

			</Grid>
		</CardContent>
	</Card>
);

export default Student;
