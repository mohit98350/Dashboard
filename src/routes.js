import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import StudentList from './pages/StudentList';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const routes = [
	{
		path: 'app',
		element: <DashboardLayout />,
		children: [
			{ path: 'account', element: <Account /> },
			{ path: 'customers', element: <StudentList /> },
			{ path: 'dashboard', element: <Dashboard /> },
			{ path: 'settings', element: <Settings /> },
		]
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '/', element: <Navigate to="/app/dashboard" /> },
			{ path: '*', element: <Navigate to="/404" /> }
		]
	}
];

export default routes;
