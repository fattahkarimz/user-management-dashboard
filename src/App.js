import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Job from "./scenes/job-posting";
import Training from "./scenes/training-center";
import User from "./scenes/user";


function App() {
  const [theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
    <div className="app"> 
    <Sidebar />
    <main className="content">
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/job-posting" element={<Job />} />
        <Route path="/training-center" element={<Training />} />   
        <Route path="/user" element={<User />} />     
      </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
