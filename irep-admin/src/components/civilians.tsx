
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Avatar,
//   Tab,
//   Tabs,   
//   Typography,
//   TextField,  Pagination, InputAdornment
// } from '@mui/material';
//  import { Search } from '@mui/icons-material';

// interface UserManagementProps {
//   activeMenu: string; // Determines if "User Management" is active
// }

// const Civilians: React.FC<UserManagementProps> = ({ activeMenu }) => {
//   // States
//   // const [activeTab, setActiveTab] = useState('Civilians');
//   const [rows, setRows] = useState<any[]>([]);
//   const [filter, setFilter] = useState<string>('All');
//   const [activeTab, setActiveTab] = useState<'Civilians' | 'Representatives'>('Civilians');
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   const columnConfigs = {
//     All: ['Name', 'Email', 'Actions'],
//     Pending: ['Name', 'Email', 'Actions'],
//     Approved: ['Name', 'State', 'LGA', 'Polling unit'],
//     Suspended_Accounts: ['Name', 'LGA', 'Email', 'Action'],
//     Deleted_Accounts: ['Name', 'State', 'LGA', 'Email'],
//   };
  
  

//   // Data
//   const civilians = Array.from({ length: 50 }, (_, index) => ({
//     id: index + 1,
//     name: `Civilian ${index + 1}`,
//     email: `civilian${index + 1}@example.com`,
//     avatar: `https://i.pravatar.cc/40?img=${index + 1}`,
//     status: 'Pending',
//   }));

//   const representatives = Array.from({ length: 5 }, (_, index) => ({
//     id: index + 1,
//     name: `Representative ${index + 1}`,
//     email: `representative${index + 1}@example.com`,
//     avatar: `https://i.pravatar.cc/40?img=${index + 11}`,
//     status: 'Pending',
//   }));
 
  

//   // Handle Approve/Decline Action
//   const handleAction = (id: number, action: 'approve' | 'decline') => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === id
//           ? { ...row, status: action === 'approve' ? 'Approved' : 'Declined' }
//           : row
//       )
//     );
//   };

//   // Handle Tab Change
//   const handleTabChange = (newTab: string) => {
//     setActiveTab(newTab);
//     setRows(newTab === 'Civilians' ? civilians : representatives);
//     setPage(1); 
//   };
  

//   const handleChangePage = (event: any, newPage: number) => {
//     setPage(newPage);
//   };

//   useEffect(() => {
//     const filteredRows =
//       activeTab === 'Civilians'
//         ? civilians.filter((row) => row.status === filter || filter === 'All')
//         : representatives.filter((row) => row.status === filter || filter === 'All');
//     setRows(filteredRows);
//   }, [filter, activeTab]);

//   const columnsToShow = columnConfigs[filter] || columnConfigs.All;

//   const handleFilterChange = (newFilter: string) => {
//     setFilter(newFilter);
//     setPage(1);
//   };
//   const rowsToShow = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);


//   // Render only when activeMenu is "User Management"
//   if (activeMenu !== 'User Management') {
//     return null;
//   }

//   return (
//     <Box sx={{ padding: 3 }}>

       
//       {/* Tabs */}
//       <Tabs
//         value={activeTab === 'Civilians' ? 0 : 1}
//         onChange={(event, newValue) =>
//           handleTabChange(newValue === 0 ? 'Civilians' : 'Representatives')
//         }
//       >
//         <Tab label="Civilians" sx={{color:'#459173'}}/>
//         <Tab label="Representatives" color='#459173' />
//       </Tabs>

//       <Box sx={{ display: 'flex', gap: 2, marginTop: 3, width:'85%' }}>
//         {activeTab === 'Civilians' &&
//           [
//             { title: 'Verified Civilians', count: '120,500',   icon: (
//               <svg width="40" height="25" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83203 4.83317C2.83203 2.53198 4.69751 0.666504 6.9987 0.666504C9.29989 0.666504 11.1654 2.53198 11.1654 4.83317C11.1654 7.13436 9.29989 8.99984 6.9987 8.99984C4.69751 8.99984 2.83203 7.13436 2.83203 4.83317ZM6.9987 2.33317C5.61799 2.33317 4.4987 3.45246 4.4987 4.83317C4.4987 6.21388 5.61799 7.33317 6.9987 7.33317C8.37941 7.33317 9.4987 6.21388 9.4987 4.83317C9.4987 3.45246 8.37941 2.33317 6.9987 2.33317Z" fill="black"/>
//               <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46156 17.2643C3.85688 17.875 5.71494 18.1665 6.9987 18.1665C8.28245 18.1665 10.1405 17.875 11.5358 17.2643C12.2208 16.9645 12.9175 16.5354 13.3222 15.9143C13.5351 15.5877 13.6697 15.2029 13.6653 14.7733C13.6609 14.3477 13.5208 13.9399 13.2854 13.5605C12.1443 11.7212 9.8097 9.83317 6.9987 9.83317C4.18769 9.83317 1.85313 11.7212 0.71196 13.5605C0.476564 13.9399 0.336507 14.3477 0.332136 14.7733C0.327726 15.2029 0.462295 15.5877 0.675159 15.9143C1.07991 16.5354 1.77656 16.9645 2.46156 17.2643ZM1.99872 14.7905C1.99934 14.7296 2.01846 14.616 2.12819 14.4392C3.06332 12.932 4.92842 11.4998 6.9987 11.4998C9.06898 11.4998 10.9341 12.932 11.8692 14.4392C11.9789 14.616 11.9981 14.7296 11.9987 14.7905C11.9993 14.8474 11.9846 14.9142 11.9259 15.0044C11.7874 15.2169 11.4511 15.4821 10.8676 15.7375C9.72583 16.2372 8.10433 16.4998 6.9987 16.4998C5.89306 16.4998 4.27157 16.2372 3.1298 15.7375C2.54626 15.4821 2.20998 15.2169 2.0715 15.0044C2.01275 14.9142 1.99813 14.8474 1.99872 14.7905Z" fill="black"/>
//               <path d="M15.9121 2.50575C16.2376 2.18031 16.2376 1.65267 15.9121 1.32724C15.5867 1.0018 15.059 1.0018 14.7336 1.32723L13.118 2.94285L12.8831 2.70794C12.5576 2.3825 12.03 2.38251 11.7046 2.70794C11.3791 3.03338 11.3791 3.56102 11.7046 3.88645L12.5287 4.71061C12.8542 5.03605 13.3818 5.03605 13.7072 4.71061L15.9121 2.50575Z" fill="black"/>
//               </svg>
//             ) },
//             { title: 'Pending Verification', count: '120', icon: (
//               <svg width="40" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M9.11807 7.45393C9.35328 7.27752 9.40971 6.94809 9.24662 6.70346C9.0527 6.41258 8.64115 6.37183 8.39396 6.61903L7.92389 7.08909C7.59845 7.41453 7.07082 7.41453 6.74538 7.08909C6.41994 6.76366 6.41994 6.23602 6.74538 5.91058L7.21545 5.44052C8.20634 4.44963 9.85605 4.61298 10.6334 5.77896C11.2871 6.75959 11.0609 8.08012 10.1181 8.78726L10.0776 8.81761C9.92465 8.93232 9.83463 9.11236 9.83463 9.30356L9.83463 9.4165C9.83463 9.87674 9.46154 10.2498 9.0013 10.2498C8.54106 10.2498 8.16797 9.87674 8.16797 9.4165L8.16797 9.30355C8.16797 8.58776 8.50498 7.91375 9.07761 7.48427L9.11807 7.45393Z" fill="black"/>
//               <path d="M8.16797 11.9165C8.16797 12.3767 8.54106 12.7498 9.0013 12.7498C9.46154 12.7498 9.83464 12.3767 9.83464 11.9165C9.83464 11.4563 9.46154 11.0832 9.0013 11.0832C8.54107 11.0832 8.16797 11.4563 8.16797 11.9165Z" fill="black"/>
//               <path fill-rule="evenodd" clip-rule="evenodd" d="M0.667969 8.99984C0.667969 4.39746 4.39893 0.666504 9.0013 0.666504C13.6037 0.666504 17.3346 4.39746 17.3346 8.99984C17.3346 13.6022 13.6037 17.3332 9.0013 17.3332C4.39893 17.3332 0.667969 13.6022 0.667969 8.99984ZM9.0013 2.33317C5.3194 2.33317 2.33464 5.31794 2.33464 8.99984C2.33464 12.6817 5.3194 15.6665 9.0013 15.6665C12.6832 15.6665 15.668 12.6817 15.668 8.99984C15.668 5.31794 12.6832 2.33317 9.0013 2.33317Z" fill="black"/>
//               </svg>
//             ) },
//             { title: 'Suspended Accounts', count: '52', icon: (
//               <svg width="40" height="25" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89819 3.14293C8.35772 2.28569 9.64373 2.28569 10.1033 3.14292L15.3626 12.9538C15.7612 13.6974 15.2307 14.6667 14.26 14.6667H3.74143C2.77079 14.6667 2.2403 13.6974 2.63888 12.9538L7.89819 3.14293ZM11.866 2.198C10.6523 -0.0660032 7.34914 -0.0659976 6.13548 2.198L0.876182 12.0089C-0.279774 14.1653 1.35137 16.6667 3.74143 16.6667H14.26C16.6501 16.6667 18.2812 14.1653 17.1253 12.0089L11.866 2.198ZM9.00073 3.83333C9.55301 3.83333 10.0007 4.28105 10.0007 4.83333V10.6667C10.0007 11.219 9.55301 11.6667 9.00073 11.6667C8.44844 11.6667 8.00073 11.219 8.00073 10.6667L8.00073 4.83333C8.00073 4.28105 8.44844 3.83333 9.00073 3.83333ZM9.00073 14C8.42543 14 7.95906 13.5336 7.95906 12.9583C7.95906 12.383 8.42543 11.9167 9.00073 11.9167C9.57602 11.9167 10.0424 12.383 10.0424 12.9583C10.0424 13.5336 9.57602 14 9.00073 14Z" fill="black"/>
//               </svg>
//             ) },
//             { title: 'Deleted Accounts', count: '5',  icon: (
//               <svg width="40" height="25" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
//               </svg>
//             ) },
//           ].map((metric) => (
//             <Box
//               key={metric.title}
//               sx={{
//                 flex: 1,
//                 backgroundColor: '#fff',
//                 padding: 3,
//                 borderRadius: 1.5,
//                 border: '1px solid #e0e0e0',
              
//               }}
//             > 
//               <Typography>{metric.icon}</Typography>
//               <Typography variant="h6" sx={{color: '#459173'}}>{metric.count}</Typography>
//               <Typography variant="body2">{metric.title}</Typography>
//             </Box>
//           ))}

//         {activeTab === 'Representatives' &&
//           [
//             { title: 'Verified Representatives', count: '30,200' },
//             { title: 'Pending Verification', count: '80' },
//             { title: 'Suspended Accounts', count: '10' },
//             { title: 'Deleted Accounts', count: '2' },
//           ].map((metric) => (
//             <Box
//               key={metric.title}
//               sx={{
//                 flex: 1,
//                 backgroundColor: '#fff',
//                 padding: 1,
//                 borderRadius: 1,
//                 border: '1px solid #e0e0e0',
//                 textAlign: 'center'
                
//               }}
//             > 
//               <Typography variant="h6">{metric.count}</Typography>
//               <Typography variant="body2">{metric.title}</Typography>
//             </Box>
//           ))}
//       </Box>

//        {/* Filter Selection */}
       

//       {/* Table */}
//       <Box
//         sx={{
//           backgroundColor: '#fff',
//           border: '1px solid #e0e0e0',
//           borderRadius: 2,
//           overflow: 'hidden',
//           marginTop: 3,
          
//         }}
//       >
//         <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 2}}>
//         <TextField
//           placeholder="Search"
//           variant="outlined"
//           slotProps={{
//             input: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search />
//                 </InputAdornment>
//               ),
//             },
//           }}
//           // fullWidth
//           sx={{ marginBottom: 2, width: '50%', backgroundColor: '#F9FAFB' }}
//         /></Box>
//         <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: 2,  }}>
//         <Button onClick={() => handleFilterChange('All')} sx={{padding: 1, border: '#D0D5DD 2px solid', borderRadius: 2, backgroundColor: '#F9FAFB', color:'#344054'}}>All</Button>
//         <Button onClick={() => handleFilterChange('Pending')} sx={{padding: 1, border: '#D0D5DD 2px solid', borderRadius: 2, backgroundColor: '#F9FAFB', color:'#344054'}}>Verified Civilians</Button>
//         <Button onClick={() => handleFilterChange('Approved')} sx={{padding: 1, border: '#D0D5DD 2px solid', borderRadius: 2, backgroundColor: '#F9FAFB', color:'#344054'}}>Pending Verification</Button>
//         <Button onClick={() => handleFilterChange('Declined')} sx={{padding: 1, border: '#D0D5DD 2px solid', borderRadius: 2, backgroundColor: '#F9FAFB', color:'#344054'}}>Suspended Accounts</Button>
//         <Button onClick={() => handleFilterChange('Declined')} sx={{padding: 1, border: '#D0D5DD 2px solid', borderRadius: 2, backgroundColor: '#F9FAFB', color:'#344054'}}>Deleted Accounts</Button>
//       </Box>
//         <Table>
//           <TableHead>

//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               {/* <TableCell>Status</TableCell> */}
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rowsToShow.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }} >
//                     <Avatar src={row.avatar} sx={{ marginRight: 2 }} />
//                     {row.name}
//                   </Box>
//                 </TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 {/* <TableCell>{row.status}</TableCell> */}
//                 <TableCell align="right">
//                   <Button
//                     variant="contained"
//                     color="success"
//                     size="small"
//                     sx={{ marginRight: 1 }}
//                     onClick={() => handleAction(row.id, 'approve')}
//                     disabled={row.status !== 'Pending'}
//                   >
//                     Approve
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     size="small"
//                     onClick={() => handleAction(row.id, 'decline')}
//                     disabled={row.status !== 'Pending'}
//                   >
//                     Decline
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//            {/* Pagination */}
//       <Pagination
//         count={Math.ceil(rows.length / rowsPerPage)}
//         page={page}
//         onChange={handleChangePage}
//         sx={{ marginTop: 2 }}
//       />
//       </Box>
//     </Box>
//   );
// };

// export default Civilians;


import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Avatar,
  Tab,
  Tabs,
  Typography,
  TextField,
  Pagination,
  InputAdornment,
} from '@mui/material';
import { Search } from '@mui/icons-material';

interface UserManagementProps {
  activeMenu: string; // Determines if "User Management" is active
}

const Civilians: React.FC<UserManagementProps> = ({ activeMenu }) => {
  // States
  const [rows, setRows] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'Civilians' | 'Representatives'>('Civilians');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const columnConfigs = {
    All: ['Name', 'Email', 'Status'],
    Verified_Civilians: ['Name', 'State', 'LGA', 'Polling unit'],
    Pending_Verification: ['Name', 'Email', 'Actions'],
    Suspended_Accounts: ['Name', 'LGA', 'Email', 'Action'],
    Deleted_Accounts: ['Name', 'State', 'LGA', 'Email'],
  };

  const civilians = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Civilian ${index + 1}`,
    email: `civilian${index + 1}@example.com`,
    avatar: `https://i.pravatar.cc/40?img=${index + 1}`,
    status: 'Pending',
  }));

  const representatives = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: `Representative ${index + 1}`,
    email: `representative${index + 1}@example.com`,
    avatar: `https://i.pravatar.cc/40?img=${index + 11}`,
    status: 'Pending',
  }));

  const handleAction = (id: number, action: 'approve' | 'decline') => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, status: action === 'approve' ? 'Approved' : 'Declined' }
          : row
      )
    );
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    setRows(newTab === 'Civilians' ? civilians : representatives);
    setPage(1);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const filteredRows =
      activeTab === 'Civilians'
        ? civilians.filter((row) => row.status === filter || filter === 'All')
        : representatives.filter((row) => row.status === filter || filter === 'All');
    setRows(filteredRows);
  }, [filter, activeTab]);

  const columnsToShow = columnConfigs[filter] || columnConfigs.All;

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setPage(1);
  };

  const rowsToShow = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  if (activeMenu !== 'User Management') {
    return null;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Tabs
        value={activeTab === 'Civilians' ? 0 : 1}
        onChange={(event, newValue) =>
          handleTabChange(newValue === 0 ? 'Civilians' : 'Representatives')
        }
      >
        <Tab label="Civilians" sx={{ color: '#459173' }} />
        <Tab label="Representatives" sx={{ color: '#459173' }} />
      </Tabs>

      
       <Box sx={{ display: 'flex', gap: 2, marginTop: 3, width:'85%' }}>
         {activeTab === 'Civilians' &&
          [
            { title: 'Verified Civilians', count: '120,500',   icon: (
              <svg width="40" height="25" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83203 4.83317C2.83203 2.53198 4.69751 0.666504 6.9987 0.666504C9.29989 0.666504 11.1654 2.53198 11.1654 4.83317C11.1654 7.13436 9.29989 8.99984 6.9987 8.99984C4.69751 8.99984 2.83203 7.13436 2.83203 4.83317ZM6.9987 2.33317C5.61799 2.33317 4.4987 3.45246 4.4987 4.83317C4.4987 6.21388 5.61799 7.33317 6.9987 7.33317C8.37941 7.33317 9.4987 6.21388 9.4987 4.83317C9.4987 3.45246 8.37941 2.33317 6.9987 2.33317Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46156 17.2643C3.85688 17.875 5.71494 18.1665 6.9987 18.1665C8.28245 18.1665 10.1405 17.875 11.5358 17.2643C12.2208 16.9645 12.9175 16.5354 13.3222 15.9143C13.5351 15.5877 13.6697 15.2029 13.6653 14.7733C13.6609 14.3477 13.5208 13.9399 13.2854 13.5605C12.1443 11.7212 9.8097 9.83317 6.9987 9.83317C4.18769 9.83317 1.85313 11.7212 0.71196 13.5605C0.476564 13.9399 0.336507 14.3477 0.332136 14.7733C0.327726 15.2029 0.462295 15.5877 0.675159 15.9143C1.07991 16.5354 1.77656 16.9645 2.46156 17.2643ZM1.99872 14.7905C1.99934 14.7296 2.01846 14.616 2.12819 14.4392C3.06332 12.932 4.92842 11.4998 6.9987 11.4998C9.06898 11.4998 10.9341 12.932 11.8692 14.4392C11.9789 14.616 11.9981 14.7296 11.9987 14.7905C11.9993 14.8474 11.9846 14.9142 11.9259 15.0044C11.7874 15.2169 11.4511 15.4821 10.8676 15.7375C9.72583 16.2372 8.10433 16.4998 6.9987 16.4998C5.89306 16.4998 4.27157 16.2372 3.1298 15.7375C2.54626 15.4821 2.20998 15.2169 2.0715 15.0044C2.01275 14.9142 1.99813 14.8474 1.99872 14.7905Z" fill="black"/>
              <path d="M15.9121 2.50575C16.2376 2.18031 16.2376 1.65267 15.9121 1.32724C15.5867 1.0018 15.059 1.0018 14.7336 1.32723L13.118 2.94285L12.8831 2.70794C12.5576 2.3825 12.03 2.38251 11.7046 2.70794C11.3791 3.03338 11.3791 3.56102 11.7046 3.88645L12.5287 4.71061C12.8542 5.03605 13.3818 5.03605 13.7072 4.71061L15.9121 2.50575Z" fill="black"/>
              </svg>
            ) },
            { title: 'Pending Verification', count: '120', icon: (
              <svg width="40" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.11807 7.45393C9.35328 7.27752 9.40971 6.94809 9.24662 6.70346C9.0527 6.41258 8.64115 6.37183 8.39396 6.61903L7.92389 7.08909C7.59845 7.41453 7.07082 7.41453 6.74538 7.08909C6.41994 6.76366 6.41994 6.23602 6.74538 5.91058L7.21545 5.44052C8.20634 4.44963 9.85605 4.61298 10.6334 5.77896C11.2871 6.75959 11.0609 8.08012 10.1181 8.78726L10.0776 8.81761C9.92465 8.93232 9.83463 9.11236 9.83463 9.30356L9.83463 9.4165C9.83463 9.87674 9.46154 10.2498 9.0013 10.2498C8.54106 10.2498 8.16797 9.87674 8.16797 9.4165L8.16797 9.30355C8.16797 8.58776 8.50498 7.91375 9.07761 7.48427L9.11807 7.45393Z" fill="black"/>
              <path d="M8.16797 11.9165C8.16797 12.3767 8.54106 12.7498 9.0013 12.7498C9.46154 12.7498 9.83464 12.3767 9.83464 11.9165C9.83464 11.4563 9.46154 11.0832 9.0013 11.0832C8.54107 11.0832 8.16797 11.4563 8.16797 11.9165Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.667969 8.99984C0.667969 4.39746 4.39893 0.666504 9.0013 0.666504C13.6037 0.666504 17.3346 4.39746 17.3346 8.99984C17.3346 13.6022 13.6037 17.3332 9.0013 17.3332C4.39893 17.3332 0.667969 13.6022 0.667969 8.99984ZM9.0013 2.33317C5.3194 2.33317 2.33464 5.31794 2.33464 8.99984C2.33464 12.6817 5.3194 15.6665 9.0013 15.6665C12.6832 15.6665 15.668 12.6817 15.668 8.99984C15.668 5.31794 12.6832 2.33317 9.0013 2.33317Z" fill="black"/>
              </svg>
            ) },
            { title: 'Suspended Accounts', count: '52', icon: (
              <svg width="40" height="25" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89819 3.14293C8.35772 2.28569 9.64373 2.28569 10.1033 3.14292L15.3626 12.9538C15.7612 13.6974 15.2307 14.6667 14.26 14.6667H3.74143C2.77079 14.6667 2.2403 13.6974 2.63888 12.9538L7.89819 3.14293ZM11.866 2.198C10.6523 -0.0660032 7.34914 -0.0659976 6.13548 2.198L0.876182 12.0089C-0.279774 14.1653 1.35137 16.6667 3.74143 16.6667H14.26C16.6501 16.6667 18.2812 14.1653 17.1253 12.0089L11.866 2.198ZM9.00073 3.83333C9.55301 3.83333 10.0007 4.28105 10.0007 4.83333V10.6667C10.0007 11.219 9.55301 11.6667 9.00073 11.6667C8.44844 11.6667 8.00073 11.219 8.00073 10.6667L8.00073 4.83333C8.00073 4.28105 8.44844 3.83333 9.00073 3.83333ZM9.00073 14C8.42543 14 7.95906 13.5336 7.95906 12.9583C7.95906 12.383 8.42543 11.9167 9.00073 11.9167C9.57602 11.9167 10.0424 12.383 10.0424 12.9583C10.0424 13.5336 9.57602 14 9.00073 14Z" fill="black"/>
              </svg>
            ) },
            { title: 'Deleted Accounts', count: '5',  icon: (
              <svg width="40" height="25" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.83203 15.5C2.3737 15.5 1.98134 15.3368 1.65495 15.0104C1.32856 14.684 1.16536 14.2917 1.16536 13.8333V3H0.332031V1.33333H4.4987V0.5H9.4987V1.33333H13.6654V3H12.832V13.8333C12.832 14.2917 12.6688 14.684 12.3424 15.0104C12.0161 15.3368 11.6237 15.5 11.1654 15.5H2.83203ZM11.1654 3H2.83203V13.8333H11.1654V3ZM4.4987 12.1667H6.16536V4.66667H4.4987V12.1667ZM7.83203 12.1667H9.4987V4.66667H7.83203V12.1667Z" fill="#1D1B20"/>
              </svg>
            ) },
          ].map((metric) => (
            <Box
              key={metric.title}
              sx={{
                flex: 1,
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 1.5,
                border: '1px solid #e0e0e0',
              
              }}
            > 
              <Typography>{metric.icon}</Typography>
              <Typography variant="h6" sx={{color: '#459173'}}>{metric.count}</Typography>
              <Typography variant="body2">{metric.title}</Typography>
            </Box>
          ))}

        {activeTab === 'Representatives' &&
          [
            { title: 'Verified Representatives', count: '30,200' },
            { title: 'Pending Verification', count: '80' },
            { title: 'Suspended Accounts', count: '10' },
            { title: 'Deleted Accounts', count: '2' },
          ].map((metric) => (
            <Box
              key={metric.title}
              sx={{
                flex: 1,
                backgroundColor: '#fff',
                padding: 1,
                borderRadius: 1,
                border: '1px solid #e0e0e0',
                textAlign: 'center'
                
              }}
            > 
              <Typography variant="h6">{metric.count}</Typography>
              <Typography variant="body2">{metric.title}</Typography>
            </Box>
          ))}
      </Box>
      <Box sx={{backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: 3, marginTop: 3, padding: 2}}>
      {/* Search and Filters */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: '50%', backgroundColor: '#F9FAFB', borderRadius:2}}
        />
      </Box>
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        {Object.keys(columnConfigs).map((key) => (
          <Button
            key={key}
            onClick={() => handleFilterChange(key)}
            sx={{
              padding: 1,
              border: '2px solid #D0D5DD',
              borderRadius: 2,
              backgroundColor: filter === key ? '#459173' : '#F9FAFB',
              color: filter === key ? '#fff' : '#344054',
            }}
          >
            {key}
          </Button>
        ))}
      </Box>

      {/* Table */}
      <Box
        sx={{
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          overflow: 'hidden',
          marginTop: 3,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columnsToShow.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsToShow.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={row.avatar} />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                {columnsToShow.includes('Status') && (
                  <TableCell>
                    <Button onClick={() => handleAction(row.id, 'approve')} sx={{ marginRight: 1, color: '#459173', backgroundColor :'#E7F6EC', border: 'transparent 1px solid', borderRadius:1 }}>
                      Approve
                    </Button>
                    <Button onClick={() => handleAction(row.id, 'decline')} color="error" sx={{marginRight: 1, color: '#9E0A05', backgroundColor :'#FBEAE9', border: 'transparent 1px solid', borderRadius:1}}>
                      Decline
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
    </Box>
  );
};

export default Civilians;
