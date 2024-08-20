import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import {tokens } from "../../theme";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'; // Importing the CSS file
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';



// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
// import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar = ()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  return (
    <Box
    sx={{
    "& .pro-sidebar-inner": {
      background:`${colors.primary[400]} !important`
    },
    "& .pro-icon-wrapper":{
      backgroundColor:"transparent !important"
    },
    "& .pro-inner-item":{
      padding:'5px 35px 5px 20px !important'
    },
    "& .pro-inner-item:hover":{
      color:'#868dfb !important'
    },
    "& .pro-menu-item.active":{
      color:'#6870fa !important'
    },

    }}
    >
      <ProSidebar>
        <Menu iconShape='square'>

        <MenuItem onClick={()=> setCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuIcon /> : undefined}
        style={{
          margin:"10px 0 20px 0",
          color: colors.grey[100],
        }}
        >
        {!isCollapsed && (
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    ml="15px"
    >
      <Typography variant="h3" color={colors.grey[100]}>
        ADMINIS
      </Typography>
      <IconButton onClick={()=> setCollapsed(!isCollapsed)}>
        <MenuIcon/>
      </IconButton>

    </Box>
      )}
        </MenuItem>
        {/* USER */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display='flex' justifyContent='center' alignItems='center'>
              <img
              alt="profile-user"
              width='100px'
              height='100px'
              src={'/images.jpeg'}
              style={{cursor:'pointer', objectFit:'cover', objectPosition:'center', borderRadius:'50%'}}
              />
            </Box>
            <Box textAlign='center'>
              <Typography variant="h2"
               color={colors.grey[100]}
                fontWeight='bold' 
              sx={{m:'10px 0 0 0'}}
              >
                Ed Roh
              </Typography>

              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
              >
                Vp Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        </Menu>

      </ProSidebar>
 

    </Box>
  )
}

export default Sidebar;