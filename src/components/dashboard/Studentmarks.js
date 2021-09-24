import {
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	Typography,
	Box,
	Button,
	Card,
	CardHeader,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText
} from '@material-ui/core';

import { useState, useEffect } from 'react';
import Data from './Data.json';

const Studentmarks = () => {
	const [open, setOpen] = useState(false);
	const [Mark, setMark] = useState([]);
	const [sNAME, setsNAME] = useState('');
	const [school, setSchool] = useState('');
	const [avg, setAvg] = useState(0);

	const Avgbyid = () => {
		let sum = 0;
		for (let i = 0; i < Mark.length; i++) {
			sum += Mark[i].mark;
		}
		setAvg(sum / Mark.length);
	};

	useEffect(() => {
		Avgbyid();
	}, [Mark]);

	const Detailbyid = (id) => {
		for (let i = 0; i < Data.length; i++) {
			if (Data[i].id === id) {
				setMark(Data[i].Marks);
				Avgbyid();
				setsNAME(Data[i].name);
				setSchool(Data[i].school);
				break;
			}
		}
	};
	const handleClose = () => {
		setOpen(false);
	};
	const showDetail = (id) => {
		console.log(id);
		console.log(Data);
		setOpen(true);
		Detailbyid(id);
	};

	const TopStudents = (props) => (
		<Card {...props}>
			<CardHeader
				title="Students by average mark"
			/>

			<Divider />

			<List>
				{
					Data.map((
						{
							id,
							name,
							imageUrl,

						}

					) => (

						<ListItem
							key={id}
						>
							<ListItemAvatar>
								<img
									alt={name}
									src={imageUrl}
									style={{
										height: 48,
										width: 48
									}}
								/>
							</ListItemAvatar>
							<ListItemText
								primary={name}
								style={{
									cursor: 'pointer'
								}}
							/>
							<Button variant="outlined" color="primary" onClick={() => showDetail(id, Data)}>
								Marks
							</Button>
							<Dialog
								style={{ opacity: 0.4 }}
								onClose={handleClose}
								open={open}
								aria-labelledby="simple-dialog-title"
							>
								<DialogTitle style={{ background: 'lightblue', padding: '5' }} id="simple-dialog-title">
									<Box
										sx={{
											justifyContent: 'space-between',
											pt: 1
										}}
									>
										<Typography>
											<span style={{
												fontStyle: 'italic', color: 'blue', fontWeight: 'bold', textAlign: 'center'
											}}
											>
												{school}
											</span>
										</Typography>
										<Typography>
											<span style={{
												fontStyle: 'italic', color: 'blue', fontWeight: 'bold', textAlign: 'center'
											}}
											>
												Student Name  -
												{sNAME}
											</span>
										</Typography>
										<Typography>
											<span style={{
												fontStyle: 'italic', color: 'blue', fontWeight: 'bold', textAlign: 'center'
											}}
											>
												Average Marks  -
												{avg}
											</span>
										</Typography>
									</Box>
								</DialogTitle>
								<DialogContent style={{ background: 'white' }}>
									<Box
										sx={{
											justifyContent: 'space-between',
											pt: 1
										}}
									>
										{Mark.map((Mks) => (
											<Box
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													p: 2,
													textAlign: 'center'
												}}
											>
												<Typography
													variant="h5"
												>
													<span style={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center' }}>
														{Mks.sub}
													</span>
												</Typography>
												<Typography
													variant="h5"
												>
													{Mks.mark}

												</Typography>

											</Box>
										))}

									</Box>

								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose} color="primary" variant="contained">
										Close
									</Button>
								</DialogActions>
							</Dialog>

						</ListItem>
					))
				}
			</List>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					p: 2
				}}
			/>
		</Card>
	);
	return (
		<>
			{TopStudents()}

		</>
	);
};
export default Studentmarks;
