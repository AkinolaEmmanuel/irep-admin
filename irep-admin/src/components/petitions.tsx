import React, {useState} from 'react'
import { Box, Typography, Button, IconButton, Card, CardContent, Grid, Avatar, InputBase, Menu, MenuItem, Paper } from "@mui/material";
import {People, VerifiedUserOutlined, Search, ArrowDropDown, Close, FilterList} from '@mui/icons-material';

const Petitions: React.FC = () => {
    const Metrics = [
        {
        title: 'Reported Petitions',
        count: '80',
        icon: (<svg width="25" height="25" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.83203 4.83317C2.83203 2.53198 4.69751 0.666504 6.9987 0.666504C9.29989 0.666504 11.1654 2.53198 11.1654 4.83317C11.1654 7.13436 9.29989 8.99984 6.9987 8.99984C4.69751 8.99984 2.83203 7.13436 2.83203 4.83317ZM6.9987 2.33317C5.61799 2.33317 4.4987 3.45246 4.4987 4.83317C4.4987 6.21388 5.61799 7.33317 6.9987 7.33317C8.37941 7.33317 9.4987 6.21388 9.4987 4.83317C9.4987 3.45246 8.37941 2.33317 6.9987 2.33317Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.46156 17.2643C3.85688 17.875 5.71494 18.1665 6.9987 18.1665C8.28245 18.1665 10.1405 17.875 11.5358 17.2643C12.2208 16.9645 12.9175 16.5354 13.3222 15.9143C13.5351 15.5877 13.6697 15.2029 13.6653 14.7733C13.6609 14.3477 13.5208 13.9399 13.2854 13.5605C12.1443 11.7212 9.8097 9.83317 6.9987 9.83317C4.18769 9.83317 1.85313 11.7212 0.71196 13.5605C0.476564 13.9399 0.336507 14.3477 0.332136 14.7733C0.327726 15.2029 0.462295 15.5877 0.675159 15.9143C1.07991 16.5354 1.77656 16.9645 2.46156 17.2643ZM1.99872 14.7905C1.99934 14.7296 2.01846 14.616 2.12819 14.4392C3.06332 12.932 4.92842 11.4998 6.9987 11.4998C9.06898 11.4998 10.9341 12.932 11.8692 14.4392C11.9789 14.616 11.9981 14.7296 11.9987 14.7905C11.9993 14.8474 11.9846 14.9142 11.9259 15.0044C11.7874 15.2169 11.4511 15.4821 10.8676 15.7375C9.72583 16.2372 8.10433 16.4998 6.9987 16.4998C5.89306 16.4998 4.27157 16.2372 3.1298 15.7375C2.54626 15.4821 2.20998 15.2169 2.0715 15.0044C2.01275 14.9142 1.99813 14.8474 1.99872 14.7905Z" fill="black"/>
            <path d="M15.9121 2.50575C16.2376 2.18031 16.2376 1.65267 15.9121 1.32724C15.5867 1.0018 15.059 1.0018 14.7336 1.32723L13.118 2.94285L12.8831 2.70794C12.5576 2.3825 12.03 2.38251 11.7046 2.70794C11.3791 3.03338 11.3791 3.56102 11.7046 3.88645L12.5287 4.71061C12.8542 5.03605 13.3818 5.03605 13.7072 4.71061L15.9121 2.50575Z" fill="black"/>
            </svg>
            )},
            {
                title: 'Ignored Petitions',
                count: '32',
                icon: (
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.11807 7.45393C9.35328 7.27752 9.40971 6.94809 9.24662 6.70346C9.0527 6.41258 8.64115 6.37183 8.39396 6.61903L7.92389 7.08909C7.59845 7.41453 7.07082 7.41453 6.74538 7.08909C6.41994 6.76366 6.41994 6.23602 6.74538 5.91058L7.21545 5.44052C8.20634 4.44963 9.85605 4.61298 10.6334 5.77896C11.2871 6.75959 11.0609 8.08012 10.1181 8.78726L10.0776 8.81761C9.92465 8.93232 9.83463 9.11236 9.83463 9.30356L9.83463 9.4165C9.83463 9.87674 9.46154 10.2498 9.0013 10.2498C8.54106 10.2498 8.16797 9.87674 8.16797 9.4165L8.16797 9.30355C8.16797 8.58776 8.50498 7.91375 9.07761 7.48427L9.11807 7.45393Z" fill="black"/>
                    <path d="M8.16797 11.9165C8.16797 12.3767 8.54106 12.7498 9.0013 12.7498C9.46154 12.7498 9.83464 12.3767 9.83464 11.9165C9.83464 11.4563 9.46154 11.0832 9.0013 11.0832C8.54107 11.0832 8.16797 11.4563 8.16797 11.9165Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.667969 8.99984C0.667969 4.39746 4.39893 0.666504 9.0013 0.666504C13.6037 0.666504 17.3346 4.39746 17.3346 8.99984C17.3346 13.6022 13.6037 17.3332 9.0013 17.3332C4.39893 17.3332 0.667969 13.6022 0.667969 8.99984ZM9.0013 2.33317C5.3194 2.33317 2.33464 5.31794 2.33464 8.99984C2.33464 12.6817 5.3194 15.6665 9.0013 15.6665C12.6832 15.6665 15.668 12.6817 15.668 8.99984C15.668 5.31794 12.6832 2.33317 9.0013 2.33317Z" fill="black"/>
                    </svg>
             )}]

             const [active, setActive] = useState('All Petitions');

             const handleClick = (buttonId: string) => {
                   setActive(buttonId);
             }

             const states = [
                'Abia',
                'Adamawa',
                'Akwa-Ibom',
                'Anambra',
                'Bauchi',
                'Bayelsa',
                'Benue',
              ];
             
                const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
                const [searchTerm, setSearchTerm] = useState('');
                const [selectedStates, setSelectedStates] = useState<string[]>([]);
              
                const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
                  setAnchorEl(event.currentTarget);
                };
              
                const handleClose = () => {
                  setAnchorEl(null);
                };
              
                const handleSelect = (state: string) => {
                    if (!selectedStates.includes(state)) {
                        setSelectedStates([...selectedStates, state]);
                      }
                  handleClose();
                };

                const handleRemove = (state: string) => {
                    setSelectedStates(selectedStates.filter((s) => s !== state));
                  };
              
                const filteredStates = states.filter((state) =>
                  state.toLowerCase().includes(searchTerm.toLowerCase())
                );
  return (
    <>

        <Box sx={{ display: 'flex', gap: 2, marginTop: 3, width: '50%'}}>
          {Metrics.map((metric) => (
                 <Box key={metric.title} 
                     sx={{
                    flex: 1, backgroundColor: '#fff',
                    padding: 3,
                    borderRadius: 1.5,
                    border: '1px solid #e0e0e0'
                     }}>
              <Typography>{metric.icon}</Typography>
              <Typography variant="h6" sx={{color: '#459173'}}>{metric.count}</Typography>
              <Typography variant="body2">{metric.title}</Typography>
                </Box>
            ))
  
          }

        </Box>


        <Box sx={{
          marginTop: '16px',
          padding: '1px',
          borderRadius: '7px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px', 
          backgroundColor: '#fff'
        }}>
            <Box sx={{display: 'flex', justifyContent: 'space-around', width: '50%'}}>
            {['All Petitions', 'Reported Petitions'].map((buttonId) => (
        <Button
          key={buttonId}
          onClick={() => handleClick(buttonId)}
          sx={{
            color: active === buttonId ? '#459173' : '#6C757D', 
            borderBottom: active === buttonId ? '2px solid #459173' : 'none', 
            textTransform: 'none', 
            fontWeight: active === buttonId ? 'bold' : 'normal',
            paddingBottom: '8px', 
            borderRadius: 0,
          }}
        >
          {buttonId.replace('button', 'Button ')}
        </Button>
      ))}
            </Box>
    </Box>


<Box display={'flex'} gap={1}>
      {/* Dropdown button */}
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          minWidth: '50px',
          marginTop: 2,
          backgroundColor : '#fff',
          color: '#667185',
          border: '#D0D5DD solid 1px'
        }}
      >
        <FilterList/>
        Filter
        <ArrowDropDown />
      </Button>

      {/* Display selected states as buttons */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
        {selectedStates.map((state) => (
          <Button
            key={state}
            endIcon={
              <IconButton
                size="small"
                onClick={() => handleRemove(state)}
                sx={{ color: '#475367' }}
              >
                <Close fontSize="small" />
              </IconButton>
            }
            sx={{
              textTransform: 'none',
              padding: '6px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#475367',
              backgroundColor: '#E7F6EC',
              border: '#B5E3C4 solid 1px'
            }}
          >
            {state}
          </Button>
        ))}
      </Box>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: 250,
          },
        }}
      >
        {/* Search bar */}
        <Paper sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          <Search sx={{ marginRight: '10px' }} />
          <InputBase
            placeholder="Search states"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Paper>

        {/* State options */}
        {filteredStates.length ? (
          filteredStates.map((state) => (
            <MenuItem
              key={state}
              onClick={() => handleSelect(state)}
              sx={{
                border: selectedStates.includes(state)
                  ? '1px solid #459173'
                  : 'none',
                borderRadius: '5px',
                margin: '5px',
              }}
            >
              <Typography
                sx={{
                  color: selectedStates.includes(state) ? '#459173' : 'inherit',
                  fontWeight: selectedStates.includes(state) ? 'bold' : 'normal',
                }}
              >
                {state}
              </Typography>
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>
            <Typography>No states found</Typography>
          </MenuItem>
        )}
      </Menu>
      </Box>





    <Card
        sx={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px'
        }}
      >
        <CardContent>
            <Button sx={{color:'#F56630', backgroundColor:'#FFECE5', border:'#FCD2C2 solid 1px', borderRadius:7, padding:'0 24px', marginBottom:1}}>Fake News</Button>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                src="/images/home/img-1.png"
                alt="John Adeyemi"
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
            </Grid>
            <Grid item xs>
              <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 1}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#344054' }}>
                John Adeyemi
              </Typography>
              
              <Typography variant="body2" sx={{ color: '#6C757D' }}>
                14th September 2024, 10:10 AM
              </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{ marginTop: 2, fontWeight: 'bold', color: '#000' }}
          >
            Poor Waste Management in Ojiram Dam Area
          </Typography>
          <Typography sx={{display:'flex', justifyContent:'end', color: '#459173'}}>70%</Typography>
          <Box
            sx={{
              marginTop: 3,
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%', 
              maxHeight: 5, 
              display: 'flex',
              gap: 1
            }}
          >
            
            <img
              src="/icons/70.svg"
              alt="Waste Management"
              style={{ width: '100%', height:'100%' }}
            />
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', marginTop: 2}}>
            <Box display={'flex'} gap={1} sx={{color: '#459173'}}>
            <People/>
            <Typography> 3026 Supporters </Typography>
            </Box>
            <Box display={'flex'} gap={1}>
            <VerifiedUserOutlined/>
            <Typography>7500 goal</Typography>
            </Box>
          </Box>
                <Box sx={{marginTop: 4}}>
                <Button sx={{backgroundColor:'#E7F6EC', border:'#B5E3C4 solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', gap: 1}}>
                     <svg width="15" height="15" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
                     </svg>
                     Delete Petition
                </Button>
                <Button sx={{backgroundColor:'#F9FAFB', border:'#E4E7EC solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', mx:1}}>Ignore Petition</Button>
                </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px'
        }}
      >
        <CardContent>
        <Button sx={{color:'#F56630', backgroundColor:'#FFECE5', border:'#FCD2C2 solid 1px', borderRadius:7, padding:'0 24px', marginBottom:2}}>Fake News</Button>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                src="/images/account/display-card.png"
                alt="Mike Nzeaugu"
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#344054' }}>
                Mike Nzeaugu
              </Typography>
              <Typography variant="body2" sx={{ color: '#6C757D' }}>
                14th September 2024, 10:10 AM
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{ my: 4, fontWeight: 'bold', color: '#000' }}
          >
            Poor Waste Management in Ojiram Dam Area
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%', 
              maxHeight: 250
            }}
          >
            <img
              src="/images/refuse.png"
              alt="Waste Management"
              style={{ width: '100%', height:'100%' }}
            />
          </Box>
       
            
        </CardContent>
        <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: 1}}>
      <Button sx={{border: '#D0D5DD solid 1px', color: '#344054'}}>Read More</Button>
      </Box>
      </Card>
      
      



    </>
  )
}


export default Petitions;