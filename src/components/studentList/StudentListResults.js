import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
	Avatar,
	Box,
	Card,
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';

const StudentListResults = ({ Totalstud, ...rest }) => {
	const [selectedstudIds, setSelectedstudIds] = useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);

	const handleSelectAll = (event) => {
		let newSelectedstudIds;

		if (event.target.checked) {
			newSelectedstudIds = Totalstud.map((stud) => stud.id);
		} else {
			newSelectedstudIds = [];
		}

		setSelectedstudIds(newSelectedstudIds);
	};

	const handleSelectOne = (event, id) => {
		const selectedIndex = selectedstudIds.indexOf(id);
		let newSelectedCustomerIds = [];

		if (selectedIndex === -1) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedstudIds, id);
		} else if (selectedIndex === 0) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedstudIds.slice(1));
		} else if (selectedIndex === selectedstudIds.length - 1) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedstudIds.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(
				selectedstudIds.slice(0, selectedIndex),
				selectedstudIds.slice(selectedIndex + 1)
			);
		}

		setSelectedstudIds(newSelectedCustomerIds);
	};

	const handleLimitChange = (event) => {
		setLimit(event.target.value);
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<Card {...rest}>
			<PerfectScrollbar>
				<Box sx={{ minWidth: 1050 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
									<Checkbox
										checked={selectedstudIds.length === Totalstud.length}
										color="primary"
										indeterminate={
											selectedstudIds.length > 0
											&& selectedstudIds.length < Totalstud.length
										}
										onChange={handleSelectAll}
									/>
								</TableCell>
								<TableCell>
									Name
								</TableCell>
								<TableCell>
									Email
								</TableCell>
								<TableCell>
									Location
								</TableCell>
								<TableCell>
									Phone
								</TableCell>
								<TableCell>
									Registration date
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Totalstud.slice(0, limit).map((customer) => (
								<TableRow
									hover
									key={customer.id}
									selected={selectedstudIds.indexOf(customer.id) !== -1}
								>
									<TableCell padding="checkbox">
										<Checkbox
											checked={selectedstudIds.indexOf(customer.id) !== -1}
											onChange={(event) => handleSelectOne(event, customer.id)}
											value="true"
										/>
									</TableCell>
									<TableCell>
										<Box
											sx={{
												alignItems: 'center',
												display: 'flex'
											}}
										>
											<Avatar
												src={customer.avatarUrl}
												sx={{ mr: 2 }}
											>
												{getInitials(customer.name)}
											</Avatar>
											<Typography
												color="textPrimary"
												variant="body1"
											>
												{customer.name}
											</Typography>
										</Box>
									</TableCell>
									<TableCell>
										{customer.email}
									</TableCell>
									<TableCell>
										{`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
									</TableCell>
									<TableCell>
										{customer.phone}
									</TableCell>
									<TableCell>
										{moment(customer.createdAt).format('DD/MM/YYYY')}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<TablePagination
				component="div"
				count={Totalstud.length}
				onPageChange={handlePageChange}
				onRowsPerPageChange={handleLimitChange}
				page={page}
				rowsPerPage={limit}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Card>
	);
};

StudentListResults.propTypes = {
	Totalstud: PropTypes.array.isRequired
};

export default StudentListResults;
