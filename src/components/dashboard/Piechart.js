import { Doughnut } from 'react-chartjs-2';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	colors,
	useTheme
} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Piechart = (props) => {
	const theme = useTheme();

	const data = {
		datasets: [
			{
				data: [20, 20, 15, 7],
				backgroundColor: [
					colors.indigo[500],
					colors.red[600],
					colors.orange[600],
					colors.green[600]
				],
				borderWidth: 9,
				borderColor: colors.common.white,
				hoverBorderColor: colors.common.white
			}
		],
	};

	const options = {
		animation: false,
		cutoutPercentage: 10,
		layout: { padding: 0 },
		legend: {
			display: false
		},
		maintainAspectRatio: false,
		responsive: true,
		tooltips: {
			backgroundColor: theme.palette.background.paper,
			bodyFontColor: theme.palette.text.secondary,
			borderColor: theme.palette.divider,
			borderWidth: 1,
			enabled: true,
			footerFontColor: theme.palette.text.secondary,
			intersect: false,
			mode: 'index',
			titleFontColor: theme.palette.text.primary
		}
	};

	const devices = [
		{
			title: 'Group of 20 students',
			value: 32,
			icon: FiberManualRecordIcon,
			color: colors.indigo[500]
		},
		{
			title: 'Group of 10 students',
			value: 32,
			icon: FiberManualRecordIcon,
			color: colors.red[600]
		},
		{
			title: 'Group of 7 students',
			value: 24,
			icon: FiberManualRecordIcon,
			color: colors.orange[600]
		},
		{
			title: 'Individuals Sessions',
			value: 12,
			icon: FiberManualRecordIcon,
			color: colors.green[600]
		}
	];

	return (
		<Card {...props}>
			<CardHeader title="Students by type of studying" />
			<Divider />
			<CardContent>
				<Box
					sx={{
						height: 200,
						position: 'relative'
					}}
				>
					<Doughnut
						data={data}
						options={options}
					/>
				</Box>
				<Box
					sx={{
						justifyContent: 'center',
						pt: 1
					}}
				>
					{devices.map(({
						color,
						icon: Icon,
						title,
						value
					}) => (
						<Box
							key={title}
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								p: 2,
								textAlign: 'center'
							}}
						>
							<Icon
								color="action"
								style={{ color }}

							/>
							<Typography
								color="textPrimary"
								variant="body1"
							>
								{title}
							</Typography>
							<Typography
								style={{ color }}
								variant="h5"
							>
								{value}
								%
							</Typography>
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	);
};

export default Piechart;
