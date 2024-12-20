import React from 'react';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
//import Dashboard from './dashboard';

import GroupIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddIcon from '@mui/icons-material/Add';
interface SidebarProps {
    activeView: string;
    setActiveView: React.Dispatch<React.SetStateAction<string>>;

  }
const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: '#fff',
        borderRight: '1px solid #e0e0e0',
        padding: 2,
        height: '100vh',
      }}
     >
    
      <List>
        <ListItem button onClick={() => setActiveView('userManagement')}
         sx={{
            backgroundColor: activeView === 'userManagement' ? '#459173' : 'transparent',
            color: activeView === 'userManagement' ? '#fff' : 'inherit',
            '&:hover': {
              backgroundColor: activeView === 'userManagement' ? '#459173' : '#f0f0f0',
            }, borderRadius: "3px"
          }} >
          <ListItemIcon>
            <GroupIcon color='action'/>
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>






        <ListItem button onClick={() => setActiveView('petitions')} 
             sx={{
                backgroundColor: activeView === 'petitions' ? '#459173' : 'transparent',
                color: activeView === 'petitions' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activeView === 'petitions' ? '#459173' : '#f0f0f0',
                }, borderRadius: "3px"
              }}>
          <ListItemIcon>
            <DescriptionIcon color='action'/>
          </ListItemIcon>
          <ListItemText primary="Petitions" />
          <Typography sx={{backgroundColor: '#E7F6EC', color: '#000', padding: '0 8px', borderRadius: 5}}>10</Typography>
        </ListItem>



        <ListItem button onClick={() => setActiveView('contentModeration')} 
             sx={{
                backgroundColor: activeView === 'contentModeration' ? '#459173' : 'transparent',
                color: activeView === 'contentModeration' ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activeView === 'contentModeration' ? '#459173' : '#f0f0f0',
                }, borderRadius: "3px"
              }}>
          <ListItemIcon>
            <ContentPasteIcon color='action'/>
          </ListItemIcon>
          <ListItemText primary="Content Moderation" />
          <Typography sx={{backgroundColor: '#E7F6EC', color: '#000', padding: '0 8px', borderRadius: 5}}>10</Typography>
        </ListItem>
      </List>
       
      <Box sx={{ marginTop: 4 }}>
        <Typography variant='h6' color='#667185' sx={{ marginTop: 2 }}>Action</Typography>
        <Button variant="contained" fullWidth onClick={() => setActiveView('addConstituents')} 
        sx={{
                backgroundColor: activeView === 'addConstituents' ? '#459173' : '#F9FAFB',
                color: activeView === 'addConstituents' ? '#fff' : '#459173',
                '&:hover': {
                  backgroundColor: activeView === 'addConstituents' ? '#459173' : '#f0f0f0',
                }, border:'#B5E3C4 solid 1px'
            }}>
              <AddIcon/>
          Add Constituents
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
