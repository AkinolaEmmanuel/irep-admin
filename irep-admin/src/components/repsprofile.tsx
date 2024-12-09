import { useState, Fragment } from 'react';
import { Box, Typography, Breadcrumbs, Link, Avatar, Button, Card, CardContent, Grid, Modal } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

 const Repsprofile = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        borderRadius: 5
      };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openApprove, setOpenApprove] = useState(false);
    const handleApproveOpen = () => setOpenApprove(true);
    const handleApproveClose = () => setOpenApprove(false);

    
function ChildModalDecline() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Fragment>
            <Button onClick={handleOpen} sx={{padding:'12px 36px', textTransform: 'none', color: '#101928', backgroundColor :'#B5E3C4', border: 'transparent 1px solid', borderRadius:1,  }}>Approve</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 300 }}>
          <svg id="child-modal-title" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="#FBEAE9"/>
            <path d="M20.7825 18.7201C20.213 18.1506 19.2896 18.1506 18.7201 18.7201C18.1506 19.2896 18.1506 20.213 18.7201 20.7825L25.9385 28.0009L18.7201 35.2193C18.1506 35.7888 18.1506 36.7121 18.7201 37.2817C19.2896 37.8512 20.213 37.8512 20.7825 37.2817L28.0009 30.0633L35.2193 37.2817C35.7888 37.8512 36.7121 37.8512 37.2817 37.2817C37.8512 36.7121 37.8512 35.7888 37.2817 35.2193L30.0633 28.0009L37.2817 20.7825C37.8512 20.213 37.8512 19.2896 37.2817 18.7201C36.7121 18.1506 35.7888 18.1506 35.2193 18.7201L28.0009 25.9385L20.7825 18.7201Z" fill="#D42620"/>
          </svg>
          <h1 id="child-modal-title">Application Declined</h1>
            <Typography id="child-modal-description" sx={{color: '#667185'}}>
              The application has been declined
            </Typography>
            <Button onClick={handleClose} sx={{color:'black', border: '#E4E7EC solid 1px', marginTop: 2}}>Okay</Button>
          </Box>
        </Modal>
      </Fragment>
    );
  }


  return (
    <>
 

    <Box sx={{ padding: 2 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="#459173" href="/" sx={{textDecoration:'none'}}>
          Civilians
        </Link>
        <Typography color="textPrimary">Reps profile</Typography>
      </Breadcrumbs>


    <Box sx={{marginTop:5}}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          backgroundImage: 'url(/images/account/home.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px 8px 0 0',
        }}
      />
      {/* Profile Section */}
      <Card
        sx={{
          marginTop: '-80px',
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          border: '#D0D5DD solid 1px'
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            {/* Avatar */}
            <Grid item>
              <Avatar
                src="/images/account/display-card.png"
                alt="Mike Nzeaugu"
                sx={{
                  width: 100,
                  height: 100,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>

             {/* Name and Progress */}
            <Box display="flex" justifyContent="space-between">
            <Box sx={{display:'flex', gap: 1}}>
              <Typography variant="h4" sx={{marginTop: 2}}>
                Mike Nzeaugu
              </Typography>
              <Box sx={{margin: 2}}>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.5C-3.11864e-07 20.0673 1.19215 23.5323 3.38703 26.3444C5.58192 29.1566 8.65363 31.1546 12.1141 32.021C15.5746 32.8873 19.2254 32.5724 22.4864 31.1262C25.7474 29.68 28.4316 27.1855 30.1125 24.039C31.7934 20.8926 32.3745 17.2746 31.7636 13.76C31.1527 10.2454 29.3848 7.03574 26.7408 4.64101C24.0967 2.24628 20.7282 0.803843 17.1705 0.542872C13.6128 0.281901 10.0698 1.21737 7.10465 3.20065L16 16.5L0 16.5Z" fill="#459173"/>
                <circle cx="16.5" cy="17" r="14" fill="white"/>
                <path d="M6.424 18.124C6.504 18.524 6.676 18.828 6.94 19.036C7.204 19.244 7.56 19.348 8.008 19.348C8.576 19.348 8.992 19.124 9.256 18.676C9.52 18.228 9.652 17.464 9.652 16.384C9.46 16.656 9.188 16.868 8.836 17.02C8.492 17.164 8.116 17.236 7.708 17.236C7.188 17.236 6.716 17.132 6.292 16.924C5.868 16.708 5.532 16.392 5.284 15.976C5.044 15.552 4.924 15.04 4.924 14.44C4.924 13.56 5.18 12.86 5.692 12.34C6.212 11.812 6.924 11.548 7.828 11.548C8.916 11.548 9.688 11.912 10.144 12.64C10.608 13.36 10.84 14.468 10.84 15.964C10.84 16.996 10.752 17.84 10.576 18.496C10.408 19.152 10.112 19.648 9.688 19.984C9.264 20.32 8.676 20.488 7.924 20.488C7.068 20.488 6.408 20.264 5.944 19.816C5.48 19.368 5.22 18.804 5.164 18.124H6.424ZM7.948 16.084C8.428 16.084 8.804 15.936 9.076 15.64C9.356 15.336 9.496 14.936 9.496 14.44C9.496 13.888 9.348 13.46 9.052 13.156C8.764 12.844 8.368 12.688 7.864 12.688C7.36 12.688 6.96 12.848 6.664 13.168C6.376 13.48 6.232 13.892 6.232 14.404C6.232 14.892 6.372 15.296 6.652 15.616C6.94 15.928 7.372 16.084 7.948 16.084ZM17.9772 12.928H13.9572V15.316C14.1252 15.092 14.3732 14.904 14.7012 14.752C15.0372 14.6 15.3932 14.524 15.7692 14.524C16.4412 14.524 16.9852 14.668 17.4012 14.956C17.8252 15.244 18.1252 15.608 18.3012 16.048C18.4852 16.488 18.5772 16.952 18.5772 17.44C18.5772 18.032 18.4612 18.56 18.2292 19.024C18.0052 19.48 17.6652 19.84 17.2092 20.104C16.7612 20.368 16.2092 20.5 15.5532 20.5C14.6812 20.5 13.9812 20.284 13.4532 19.852C12.9252 19.42 12.6092 18.848 12.5052 18.136H13.8372C13.9252 18.512 14.1212 18.812 14.4252 19.036C14.7292 19.252 15.1092 19.36 15.5652 19.36C16.1332 19.36 16.5572 19.188 16.8372 18.844C17.1252 18.5 17.2692 18.044 17.2692 17.476C17.2692 16.9 17.1252 16.46 16.8372 16.156C16.5492 15.844 16.1252 15.688 15.5652 15.688C15.1732 15.688 14.8412 15.788 14.5692 15.988C14.3052 16.18 14.1132 16.444 13.9932 16.78H12.6972V11.728H17.9772V12.928ZM19.7853 13.864C19.7853 13.28 19.9533 12.824 20.2893 12.496C20.6333 12.16 21.0733 11.992 21.6093 11.992C22.1453 11.992 22.5813 12.16 22.9173 12.496C23.2613 12.824 23.4333 13.28 23.4333 13.864C23.4333 14.448 23.2613 14.908 22.9173 15.244C22.5813 15.58 22.1453 15.748 21.6093 15.748C21.0733 15.748 20.6333 15.58 20.2893 15.244C19.9533 14.908 19.7853 14.448 19.7853 13.864ZM27.1053 12.148L22.3173 20.5H20.9733L25.7613 12.148H27.1053ZM21.6093 12.82C21.1053 12.82 20.8533 13.168 20.8533 13.864C20.8533 14.568 21.1053 14.92 21.6093 14.92C21.8493 14.92 22.0333 14.836 22.1613 14.668C22.2973 14.492 22.3652 14.224 22.3652 13.864C22.3652 13.168 22.1133 12.82 21.6093 12.82ZM24.6693 18.772C24.6693 18.188 24.8373 17.732 25.1733 17.404C25.5173 17.068 25.9573 16.9 26.4933 16.9C27.0213 16.9 27.4533 17.068 27.7893 17.404C28.1333 17.732 28.3053 18.188 28.3053 18.772C28.3053 19.356 28.1333 19.816 27.7893 20.152C27.4533 20.488 27.0213 20.656 26.4933 20.656C25.9573 20.656 25.5173 20.488 25.1733 20.152C24.8373 19.816 24.6693 19.356 24.6693 18.772ZM26.4813 17.728C25.9773 17.728 25.7253 18.076 25.7253 18.772C25.7253 19.468 25.9773 19.816 26.4813 19.816C26.9853 19.816 27.2373 19.468 27.2373 18.772C27.2373 18.076 26.9853 17.728 26.4813 17.728Z" fill="#459173"/>
              </svg>
           
              </Box>
            </Box>

            {/* Suspend Button */}
            <Box>
              <Button
                sx={{ textTransform: 'none', color: '#9E0A05', backgroundColor :'#FBEAE9', border: 'transparent 1px solid', borderRadius:1 }}
              >
                Suspend
              </Button>
            </Box>
            </Box>

          {/* Bio Section */}
          <Typography variant="body1" sx={{ marginTop: 2, color: '#323F49' }}>
            Humble farmer hoping for a better Nigeria despite increasing proof of the possible
            impossibility of his hope and wishes
          </Typography>

          {/* Location Section */}
          <Box display="flex" alignItems="center" gap={1} sx={{ marginTop: 2 }}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99844 11.6917C11.4344 11.6917 12.5984 10.5276 12.5984 9.0917C12.5984 7.65576 11.4344 6.4917 9.99844 6.4917C8.5625 6.4917 7.39844 7.65576 7.39844 9.0917C7.39844 10.5276 8.5625 11.6917 9.99844 11.6917Z" stroke="#459173" stroke-width="1.2"/>
            <path d="M3.0148 7.57533C4.65646 0.358661 15.3481 0.366994 16.9815 7.58366C17.9398 11.817 15.3065 15.4003 12.9981 17.617C11.3231 19.2337 8.67313 19.2337 6.9898 17.617C4.6898 15.4003 2.05646 11.8087 3.0148 7.57533Z" stroke="#459173" stroke-width="1.2"/>
          </svg>

            <Typography variant="body1" sx={{ color: '#344054' }}>
              Constituency Office, Igarra, Akoko-Edo LGA, Edo State
            </Typography>
          </Box>

          {/* Details Section */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#344054' }}>
              Details
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ color: '#000', marginTop: 1 }}>
                <strong>Email: </strong> Mike_Nzeaugu@mail.com
              </Typography>
              <Typography variant="body2" sx={{ color: '#000', marginTop: 1 }}>
                <strong>DOB: </strong> 22-07-1996
              </Typography>
              <Typography variant="body2" sx={{ color: '#000', marginTop: 1 }}>
                <strong>State: </strong> Ogun State
              </Typography>
              <Typography variant="body2" sx={{ color: '#000', marginTop: 1 }}>
                <strong>LGA: </strong> Abeokuta South
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>

    <Box sx={{ border: '#5FC381 dashed 1px',backgroundColor: '#F9FAFB', borderRadius: 3, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5}}>
    <Box sx={{textAlign: 'center'}}>

                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28.5" r="28" fill="#E7F6EC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M28 41.625C35.2487 41.625 41.125 35.7487 41.125 28.5C41.125 21.2513 35.2487 15.375 28 15.375C20.7513 15.375 14.875 21.2513 14.875 28.5C14.875 35.7487 20.7513 41.625 28 41.625ZM33.36 26.6588C33.9539 26.1148 33.9944 25.1923 33.4505 24.5984C32.9065 24.0044 31.984 23.9639 31.39 24.5079L26.0058 29.4391L24.61 28.1608C24.016 27.6168 23.0935 27.6573 22.5496 28.2513C22.0056 28.8452 22.0461 29.7677 22.64 30.3117L25.0208 32.4921C25.5782 33.0026 26.4333 33.0026 26.9907 32.4921L33.36 26.6588Z" fill="#0F973D"/>
                </svg>
                 <Typography  variant="h5" component="h1" sx={{fontWeight:'bold'}}>
                 Uploaded Document
                 </Typography>
                 <Typography variant='body2' sx={{ color: '#98A2B3'}}>
                 State Goverment Document.pdf
                </Typography>
                <Typography variant='body2' sx={{mt: 4, color: '#98A2B3' }}>
                    View Doc <ArrowForward/>
                </Typography>
   
                </Box>
    </Box>
    <Box display={'flex'} gap={2} sx={{marginTop: 2}}>
    <Button color='error' onClick={handleOpen} sx={{textTransform: 'none', color: '#9E0A05', backgroundColor :'#FBEAE9', border: 'transparent 1px solid', borderRadius:1, padding:'15px 35px'}}>Decline Rep</Button>
    <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                 <Typography id="modal-modal-title" variant="h3" component="h1" sx={{fontWeight:'bold'}}>
                 Are you sure?
                 </Typography>
                 <Typography id="modal-modal-description" sx={{ mt: 2, color: '#667185'}}>
                 The application once declined is irreversible
                </Typography>
                <Box display={'flex'} justifyContent={'space-around'} sx={{marginTop: 2}}>
                <Button color='error' onClick={handleClose} sx={{textTransform: 'none', color: '#9E0A05', backgroundColor :'#FBEAE9', border: 'transparent 1px solid', borderRadius:1, padding:'12px 36px', }}>Decline</Button>
                <ChildModalDecline/>

                </Box>
                </Box>
    </Modal>
    <Button onClick={handleApproveOpen} sx={{padding:'15px 50px', textTransform: 'none', color: '#101928', backgroundColor :'#B5E3C4', border: 'transparent 1px solid', borderRadius:1,  }}>Approve Rep</Button>
    <Modal
                 open={openApprove}
                 onClose={handleApproveClose}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28.5" r="28" fill="#E7F6EC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28 41.625C35.2487 41.625 41.125 35.7487 41.125 28.5C41.125 21.2513 35.2487 15.375 28 15.375C20.7513 15.375 14.875 21.2513 14.875 28.5C14.875 35.7487 20.7513 41.625 28 41.625ZM33.36 26.6588C33.9539 26.1148 33.9944 25.1923 33.4505 24.5984C32.9065 24.0044 31.984 23.9639 31.39 24.5079L26.0058 29.4391L24.61 28.1608C24.016 27.6168 23.0935 27.6573 22.5496 28.2513C22.0056 28.8452 22.0461 29.7677 22.64 30.3117L25.0208 32.4921C25.5782 33.0026 26.4333 33.0026 26.9907 32.4921L33.36 26.6588Z" fill="#0F973D"/>
                </svg>
                 <Typography id="modal-modal-title" variant="h3" component="h1" sx={{fontWeight:'bold'}}>
                 Application Approved
                 </Typography>
                 <Typography id="modal-modal-description" sx={{ mt: 2, color: '#667185'}}>
                 The application has been approved
                </Typography>
                <Box sx={{marginTop: 2}}>
                <Button onClick={handleApproveClose} sx={{color:'black', border: '#E4E7EC solid 1px', marginTop: 2}}>Okay</Button>
                </Box>
                </Box>
    </Modal>
    </Box>

    <Box sx={{padding: 5, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: 5, backgroundColor: '#fff', marginTop: 3}}>
        <Typography variant='h4'>Representative Profile</Typography>

        <Box sx={{marginTop: 5}}>
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{ color: 'GrayText'}}> Official Office Title </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}>  Mike_Nzeaugu@mail.com </Typography>
        </Box>
       
        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>  
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}> Constituency </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}> 22-07-1996 </Typography>
        </Box>
              
        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}> State of pry residence </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}> Ogun State </Typography>
        </Box>
             
        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}>LGA of pry residence </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}>  Abeokuta South </Typography>
        </Box>
        
        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}>Political Party </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}>  APC </Typography>
        </Box>
 
        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}> Social media </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}>  Twitter_link </Typography>
        </Box>

        <hr />
        <Box display={'flex'} gap={5} alignItems={'center'}>
        <Typography variant='subtitle1' sx={{color: 'GrayText'}}> Date of swearing in  </Typography>
        <Typography variant="body1" sx={{ color: '#000' }}>  28th Oct 2022 </Typography>
        </Box>
        <hr />
           
    </Box>
    </Box>

    
    
  

    
    </Box>

    
    </>
  )
}


export default Repsprofile;
