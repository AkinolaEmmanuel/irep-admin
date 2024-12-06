// import React from 'react';
// import { Box, Tabs, Tab, Typography, TextField } from '@mui/material';
// import CiviliansTable from './civiliantable';

// const Dashboard: React.FC = () => {
//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Tabs */}
//       <Tabs value={0}>
//         <Tab label="Civilians" />
//         <Tab label="Representatives" />
//       </Tabs>

//       {/* Metrics */}
//       <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
//         {[
//           { title: 'Verified Civilians', count: '120,500' },
//           { title: 'Pending Verification', count: '120' },
//           { title: 'Suspended Accounts', count: '52' },
//           { title: 'Deleted Accounts', count: '5' },
//         ].map((metric) => (
//           <Box
//             key={metric.title}
//             sx={{
//               flex: 1,
//               backgroundColor: '#fff',
//               padding: 2,
//               borderRadius: 1,
//               border: '1px solid #e0e0e0',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h6">{metric.count}</Typography>
//             <Typography variant="body2">{metric.title}</Typography>
//           </Box>
//         ))}
//       </Box>

//       {/* Civilians Table */}
      // <Box sx={{ marginTop: 3 }}>
      //   <TextField
      //     placeholder="Search"
      //     variant="outlined"
      //     fullWidth
      //     sx={{ marginBottom: 2 }}
      //   />
//         <CiviliansTable />
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Box, Typography,  } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Civilians from './civilians';

interface DashboardProps {
  activeView: string;


 }

const Dashboard: React.FC<DashboardProps> = ({activeView}) => {
  return (
    <Box sx={{ padding: 3 }}>
   
      {activeView === 'userManagement' && (
        <>
          {/* <Typography variant="h5" sx={{ marginBottom: 3 }}>
            User Management
          </Typography> */}
          <Civilians activeMenu= 'User Management'
          />
        </>
      )}

      {/* Petitions View */}
      {activeView === 'petitions' && (
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Petitions Section
        </Typography>
      )}

      {/* Content Moderation View */}
      {activeView === 'contentModeration' && (
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Content Moderation Section
        </Typography>
      )}
    </Box>
  );
}; 

export default Dashboard;

