import  { useContext } from 'react'
import { Box, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Topbar = ()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2} >
      {/* {SEARCH BAR} */}
      <Box
       display="flex"
        backgroundColor={colors.primary[400]} 
        borderRadius='3px'
       >
        <InputBase sx={{ml:2 ,flex:1}} placeholder='Search'/>
        <IconButton type='button' sx={{p:1}}>
          <SearchOutlinedIcon />
        </IconButton>

      </Box>

      {/* ICONS */}
     <Box display='flex'>
     <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? (<DarkModeIcon />) :(<LightModeIcon />)}
     </IconButton>

     <IconButton>
     <NotificationsNoneOutlinedIcon />
     </IconButton>

     <IconButton>
     <SettingsIcon />
     </IconButton>
     <IconButton>
     <PersonIcon />
     </IconButton>
     </Box>
    </Box>
  )
}

export default Topbar;