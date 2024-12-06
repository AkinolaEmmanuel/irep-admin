import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// //import Typography from '@mui/material/Typography';
// import SvgIcon from '@mui/material/SvgIcon';
// import IconButton from '@mui/material/IconButton';
// //import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, SvgIcon, IconButton, Toolbar, AppBar} from '@mui/material'
import { Notifications } from '@mui/icons-material';




const Nav: React.FC = () => {


  return (
    <AppBar position="static" sx={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none', 
        borderBottom: '1px solid #e0e0e0',
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon
            sx={{
              marginRight: '8px',
              height: 100,
              width: 100,
            }}>
                <svg width="120" height="40" viewBox="0 0 101 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 18C0.5 9.71573 7.21573 3 15.5 3C23.7843 3 30.5 9.71573 30.5 18C30.5 26.2843 23.7843 33 15.5 33C7.21573 33 0.5 26.2843 0.5 18ZM12 14.0801H15.7917C16.5165 14.0801 17.1042 14.6677 17.1042 15.3926V29.3926H13.3125C12.5876 29.3926 12 28.805 12 28.0801V14.0801ZM15.4444 7.82694C15.2058 7.58833 14.8822 7.45427 14.5447 7.45427C14.2073 7.45427 13.8836 7.58833 13.645 7.82694C13.4064 8.06556 13.2724 8.38919 13.2724 8.72664C13.2724 9.06409 13.4064 9.38772 13.645 9.62634C13.8836 9.86495 14.2073 9.999 14.5447 9.999C14.8822 9.999 15.2058 9.86495 15.4444 9.62634C15.683 9.38772 15.8171 9.06409 15.8171 8.72664C15.8171 8.38919 15.683 8.06556 15.4444 7.82694ZM17.0895 11.9076C17.0895 11.0614 15.394 10.6352 14.5447 10.6352C13.6954 10.6352 12 11.0614 12 11.9076V12.5437H17.0895V11.9076ZM17.0131 9.88131C17.6557 9.23877 17.6557 8.26859 17.0131 7.56879L16.4787 8.10636C16.7459 8.48171 16.7459 8.96839 16.4787 9.34374L17.0131 9.88131ZM18.066 10.9533C19.3066 9.7159 19.3161 7.78827 18.066 6.5L17.5475 7.01849C18.4286 7.97912 18.4286 9.42326 17.5475 10.4348L18.066 10.9533Z" fill="#459173"/>
                <path d="M43.2 29V8H52.56C55.2 8 57.27 8.78 58.62 10.1C59.73 11.27 60.36 12.8 60.36 14.63V14.69C60.36 18.14 58.29 20.21 55.38 21.05L61.05 29H56.67L51.51 21.68H46.89V29H43.2ZM46.89 18.41H52.29C54.93 18.41 56.61 17.06 56.61 14.9V14.84C56.61 12.56 55.02 11.36 52.26 11.36H46.89V18.41ZM71.4267 29.36C66.8667 29.36 63.2967 26.03 63.2967 21.14V21.08C63.2967 16.52 66.5067 12.83 71.0367 12.83C76.0767 12.83 78.6267 16.79 78.6267 21.35C78.6267 21.68 78.5967 22.01 78.5667 22.37H66.9267C67.3167 24.98 69.1167 26.39 71.4867 26.39C73.2867 26.39 74.4867 25.73 75.7767 24.5L77.9067 26.39C76.3767 28.19 74.3367 29.36 71.4267 29.36ZM66.8967 19.97H75.0267C74.7867 17.66 73.4067 15.8 71.0067 15.8C68.7567 15.8 67.2267 17.48 66.8967 19.97ZM82.2422 33.8V13.16H85.9022V15.8C87.0722 14.15 88.6922 12.83 91.3022 12.83C95.0222 12.83 98.6522 15.77 98.6522 21.05V21.11C98.6522 26.39 95.0522 29.33 91.3022 29.33C88.6622 29.33 87.0122 28.01 85.9022 26.54V33.8H82.2422ZM90.4322 26.18C92.9222 26.18 94.9622 24.23 94.9622 21.11V21.05C94.9622 17.99 92.8622 15.98 90.4322 15.98C87.9422 15.98 85.8122 18.02 85.8122 21.05V21.11C85.8122 24.14 87.9422 26.18 90.4322 26.18Z" fill="#459173"/>
                </svg>
         
            {/* Replace this with your SVG */}
            {/* <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> */}
          </SvgIcon>
          
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="end"
            sx={{ marginLeft: 2, color: '#000' }}
          
           
          >
            <Notifications fontSize='large'/>
          </IconButton>
          <IconButton
            edge="end"
            sx={{ marginLeft: 2, color: '#000' }}
           
           
          >
            <Avatar alt="Remy Sharp" src="/images/account/profile-img.png"/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;


