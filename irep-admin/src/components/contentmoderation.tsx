import {useState} from 'react'
import { Box, Card, CardContent, Grid, Avatar, Typography, Button, Modal, List, ListItem} from "@mui/material";

const ContentModeration: React.FC = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box>
        {/* Instead of posting the cards twice, map them! */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onClick={handleOpen}>
        {/* <Card
        sx={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px'
        }} 
      >
        <CardContent> */}
            <Button sx={{color:'#F56630', backgroundColor:'#FFECE5', border:'#FCD2C2 solid 1px', borderRadius:7, padding:'0 12px', marginBottom:1}}>Fake News</Button>
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
              <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 3}}>
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
          <Box
            sx={{
              marginTop: 2,
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%', 
              maxHeight: 200, 
              display: 'flex',
              gap: 1
            }}
          >
            <img
              src="/images/Road-1.png"
              alt="Waste Management"
              style={{ width: '100%', height:'100%' }}
            />
            <img 
              src="/images/Road-2.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-3.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-4.png" 
              alt="" 
              style={{ width: '100%', height:'100%' }}
            />
          </Box>
<Typography sx={{color: '#4A5E6D', marginTop:1}}>
<Typography variant='body1'> Dear Citizens,</Typography>
<Typography variant='body2'>I am thrilled to announce the commissioning of the long-awaited [Name of the Road/Project] project! This new road marks a significant milestone in our ongoing efforts to improve infrastructure, enhance safety, and reduce traffic congestion in our community.</Typography>


 <Typography variant='body1' sx={{marginTop:2, fontWeight: 'bold'}}>Key Highlights of the Project:</Typography>
 <Typography variant='body2'>
        <List>
            <ListItem>
            Improved Connectivity: This new road will significantly reduce travel time between [Area A] and [Area B], making daily commutes faster and more convenient for everyone.
            </ListItem>
            <ListItem>
            Enhanced Safety Features: The road is equipped with modern safety features, including well-marked pedestrian crossings, better lighting, and state-of-the-art traffic management systems to ensure the safety of all road users.
            </ListItem>
            <ListItem>
            Economic Boost: This project is not just about roads; it’s about opportunities. The improved infrastructure will attract new businesses and investments, creating more jobs and boosting our local economy.
            </ListItem>
            <ListItem>
            Eco-Friendly Design: We are committed to sustainability. The road has been designed with environmentally friendly materials and includes green spaces and noise-reducing barriers to minimize the impact on surrounding neighborhoods.
            </ListItem>
        </List>
</Typography>
<Typography variant='body1' sx={{marginTop:2, fontWeight: 'bold'}}>
Commissioning Ceremony:
</Typography>
<Typography variant='body2'>
We will officially open the new road on [Date] at [Time]. I warmly invite all of you to join us for this special occasion. Your support has been instrumental in making this project a reality, and it’s time to celebrate this achievement together!
Looking Ahead:
This is just the beginning. We have more infrastructure projects lined up to continue improving our city’s landscape and quality of life. I am committed to ensuring that our roads, bridges, and public spaces meet the highest standards and serve the needs of all citizens.
Thank you for your patience, support, and input throughout this process. Together, we are driving our community forward—one road at a time.
See you at the commissioning!
</Typography>
                </Typography>
                <Box sx={{marginTop: 1}}>
                <Button sx={{backgroundColor:'#E7F6EC', border:'#B5E3C4 solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', gap: 1}}>
                     <svg width="15" height="15" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
                     </svg>
                     Delete Post
                </Button>
                <Button sx={{backgroundColor:'#F9FAFB', border:'#E4E7EC solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', mx:1}}>Ignore Post</Button>
                </Box>
        {/* </CardContent>
      </Card> */}
        </Box>
      </Modal>

      
        <Card
        sx={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px'
        }} onClick={handleOpen}
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
              <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 3}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#344054' }}>
                John Adeyemi
              </Typography>
              
              <Typography variant="body2" sx={{ color: '#6C757D' }}>
                14th September 2024, 10:10 AM
              </Typography>
              <Typography variant="body2" sx={{ color: '#459173', fontStyle: 'italic' }}>
                Report
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
          <Box
            sx={{
              marginTop: 2,
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%', 
              maxHeight: 250, 
              display: 'flex',
              gap: 1
            }}
          >
            <img
              src="/images/Road-1.png"
              alt="Waste Management"
              style={{ width: '100%', height:'100%' }}
            />
            <img 
              src="/images/Road-2.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-3.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-4.png" 
              alt="" 
              style={{ width: '100%', height:'100%' }}
            />
          </Box>
                <Box sx={{marginTop: 4}}>
                <Button sx={{backgroundColor:'#E7F6EC', border:'#B5E3C4 solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', gap: 1}}>
                     <svg width="15" height="15" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
                     </svg>
                     Delete Post
                </Button>
                <Button sx={{backgroundColor:'#F9FAFB', border:'#E4E7EC solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', mx:1}}>Ignore Post</Button>
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
            <Button sx={{color:'#F56630', backgroundColor:'#FFECE5', border:'#FCD2C2 solid 1px', borderRadius:7, padding:'0 24px', marginBottom:1}}>Inciting Violence</Button>
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
              <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 3}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#344054' }}>
                John Adeyemi
              </Typography>
              
              <Typography variant="body2" sx={{ color: '#6C757D' }}>
                14th September 2024, 10:10 AM
              </Typography>
              <Typography variant="body2" sx={{ color: '#459173', fontStyle: 'italic' }}>
                Report
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
          <Box
            sx={{
              marginTop: 2,
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%', 
              maxHeight: 250, 
              display: 'flex',
              gap: 1
            }}
          >
            <img
              src="/images/Road-1.png"
              alt="Waste Management"
              style={{ width: '100%', height:'100%' }}
            />
            <img 
              src="/images/Road-2.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-3.png" 
              alt=""
              style={{ width: '100%', height:'100%' }}
             />
            <img 
              src="/images/Road-4.png" 
              alt="" 
              style={{ width: '100%', height:'100%' }}
            />
          </Box>
                <Box sx={{marginTop: 4}}>
                <Button sx={{backgroundColor:'#E7F6EC', border:'#B5E3C4 solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', gap: 1}}>
                     <svg width="15" height="15" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
                     </svg>
                     Delete Post
                </Button>
                <Button sx={{backgroundColor:'#F9FAFB', border:'#E4E7EC solid 1px', borderRadius: 2, color: '#344054', padding: '0 12px', mx:1}}>Ignore Post</Button>
                </Box>
        </CardContent>
      </Card>
        <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: 10}}>
      <Button sx={{border: '#D0D5DD solid 1px', color: '#344054'}}>Read More</Button>
      </Box>
    </Box>
  )
}

export default ContentModeration;
