import { useState } from 'react';
import './App.css';
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./components/theme";
import Nav from './components/nav';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';


function App() {
  // const [activeTab, setActiveTab] = useState<number>(0);
  const [activeView, setActiveView] = useState<string>('userManagement');

  return (
    <>
    <ThemeProvider theme={lightTheme}>
   <Nav/>
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#F5F7FA' }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView}/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Dashboard activeView={activeView}/>
      </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
