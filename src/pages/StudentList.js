import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../components/studentList/StudentListResults';
import StudentListToolbar from '../components/studentList/StudentListToolbar';
import Totalstud from '../__mocks__/Totalstud';

const StudentList = () => (
	<>
		<Helmet>
			<title>Student List</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor: 'background.default',
				minHeight: '100%',
				py: 3
			}}
		>
			<Container maxWidth={false}>
				<StudentListToolbar />
				<Box sx={{ pt: 3 }}>
					<StudentListResults Totalstud={Totalstud} />
				</Box>
			</Container>
		</Box>
	</>
);

export default StudentList;
