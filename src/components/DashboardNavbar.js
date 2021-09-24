import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	AppBar,
	Badge,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	Avatar,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
	const [notifications] = useState([]);

	return (
		<AppBar
			elevation={0}
			{...rest}
		>
			<Toolbar>
				<RouterLink to="/">
					<Logo />
				</RouterLink>
				<Box sx={{ flexGrow: 1 }} />
				<Hidden xlDown>
					<Typography>
						<span style={{
							color: 'black', textAlign: 'center'
						}}
						>

							Cody Simmons
						</span>
					</Typography>
					<IconButton color="inherit" size="large">
						<Avatar alt="Remy Sharp" src="/static/images/avatars/avatar.png" />
					</IconButton>
					<IconButton color="inherit" size="large">
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit" size="large">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onMobileNavOpen} size="large">
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

DashboardNavbar.propTypes = {
	onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
