import React, {useState} from 'react'
import { Box, Typography, Button, InputBase, Menu, MenuItem, Paper, TextField, Modal } from "@mui/material";
import { Search, ArrowDropDown, Close} from '@mui/icons-material';


const AddConstituents: React.FC = () => {

    const states = [
        'Abia',
        'Adamawa',
        'Akwa-Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
      ];

      const lgas = [
        "Aba North",
        "Aba South",
        "Arochukwu",
        "Bende",
        "Ikwuano",
        "Isiala Ngwa North",
        "Isiala Ngwa South",
        "Isuikwuato",
        "Obi Ngwa",
        "Ohafia",
        "Osisioma Ngwa",
        "Ugwunagbo",
        "Ukwa East",
        "Ukwa West",
        "Umuahia North",
        "Umuahia South",
        "Umunneochi"
      ];
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

      const [openModal, setOpenModal] = useState(false);
      const handleOpenModal = () => setOpenModal(true);
      const handleCloseModal = () => setOpenModal(false);
 
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedState, setSelectedState] = useState('');
        const [selectedLga, setSelectedLga] = useState('');
      
        const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        const handleSelectState = (state: string) => {
          setSelectedState(state);
          handleClose();
        };
        const handleSelectLga = (lga: string) => {
            setSelectedLga(lga);
            handleClose();
          };

          const handleRemove = (state: string) => {
            setSelectedStates(selectedStates.filter((s) => s !== state));
          };

        
      
        const filteredStates = states.filter((state) =>
          state.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const filteredLgas = lgas.filter((lga) =>
            lga.toLowerCase().includes(searchTerm.toLowerCase())
          );
  return (
    <Box sx={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

     <Box sx={{padding: 5, backgroundColor: '#fff'}}>
      <Typography variant='h5' sx={{marginTop: 2}}> Add Constituents </Typography>
        <Typography variant='body1' color='#344054' sx={{marginTop: 4}}>Select the state where you want to add the constituent</Typography>

      <Box>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ textTransform: 'none', color: '#344054', marginTop: 2, border: '#E4E7EC solid 1px', padding: 3.5 }}
      >
        {selectedState || 'Select a state'} 
        <ArrowDropDown/>
      </Button>
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
        <Paper sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          <Search sx={{ marginRight: '10px' }} />
          <InputBase
            placeholder="Search states"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Paper>
        {filteredStates.length ? (
          filteredStates.map((state) => (
            <MenuItem
              key={state}
              onClick={() => handleSelectState(state)}
              sx={{
                border: selectedState === state ? '1px solid #459173' : 'none',
                borderRadius: '5px',
                margin: '5px',
              }}
            >
              <Typography
                sx={{
                  color: selectedState === state ? '#459173' : 'inherit',
                  fontWeight: selectedState === state ? 'bold' : 'normal',
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







<Typography variant='body1' color='#344054' sx={{marginTop: 4}}>Select/Add the Local Government</Typography>
<Box>
<Box display={'flex'} gap={3}>
<Button
  variant="outlined"
  onClick={handleOpen}
  sx={{ textTransform: 'none', color: '#344054', marginTop: 2, border: '#E4E7EC solid 1px', padding: 3.75 }}
>
  {selectedLga || 'Select a LGA'} 
  {selectedLga ? <Close /> : <ArrowDropDown />}

</Button>
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
   <Paper sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
    <Search sx={{ marginRight: '10px' }} />
    <InputBase
      placeholder="Search Local Government Areas"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </Paper>
  {filteredLgas.length ? (
    filteredLgas.map((lga) => (
      <MenuItem
        key={lga}
        onClick={() => handleSelectLga(lga)}
        sx={{
          border: selectedLga === lga ? '1px solid #459173' : 'none',
          borderRadius: '5px',
          margin: '5px',
        }}
      >
        <Typography
          sx={{
            color: selectedLga === lga ? '#459173' : 'inherit',
            fontWeight: selectedLga === lga ? 'bold' : 'normal',
          }}
        >
          {lga}
        </Typography>
      </MenuItem>
    ))
  ) : (
    <MenuItem disabled>
      <Typography>No Local Government Areas found</Typography>
    </MenuItem>
  )}
</Menu> 
<Box sx={{marginTop: 2}}>
    <TextField fullWidth label='Input the new LGA'></TextField>
</Box>
</Box>
</Box>
  



<Box sx={{marginTop: 4}}>
<Typography variant='body1' color='#344054' >Add the constituent</Typography>
<TextField fullWidth label='Input the new constituent' sx={{marginTop: 1}}></TextField>
</Box>

<Button variant='contained' sx={{marginTop: 4}} onClick={handleOpenModal}>Add Constituent</Button>

<Modal
                 open={openModal}
                 onClose={handleCloseModal}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28.5" r="28" fill="#E7F6EC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28 41.625C35.2487 41.625 41.125 35.7487 41.125 28.5C41.125 21.2513 35.2487 15.375 28 15.375C20.7513 15.375 14.875 21.2513 14.875 28.5C14.875 35.7487 20.7513 41.625 28 41.625ZM33.36 26.6588C33.9539 26.1148 33.9944 25.1923 33.4505 24.5984C32.9065 24.0044 31.984 23.9639 31.39 24.5079L26.0058 29.4391L24.61 28.1608C24.016 27.6168 23.0935 27.6573 22.5496 28.2513C22.0056 28.8452 22.0461 29.7677 22.64 30.3117L25.0208 32.4921C25.5782 33.0026 26.4333 33.0026 26.9907 32.4921L33.36 26.6588Z" fill="#0F973D"/>
                </svg>
                 <Typography id="modal-modal-title" variant="h3" component="h1" sx={{fontWeight:'bold'}}>
                 Constituents added
                 </Typography>
                 <Typography id="modal-modal-description" sx={{ mt: 2, color: '#667185'}}>
                 Constituent had been added succesfully.
                </Typography>
                <Button onClick={handleCloseModal} sx={{color: '#000', marginTop: 2, border: '#E4E7EC solid 1px', padding: '15px 45px'}}>Okay</Button>
                </Box>
                </Modal>
               

</Box>
</Box>
  )
}

export default AddConstituents;
