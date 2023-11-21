import React, { useState } from 'react';
import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Groups2Icon from '@mui/icons-material/Groups2';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import StatBox from "../../components/StatBox";
import SchoolIcon from '@mui/icons-material/School';
import { mockDataUser, mockDataCompany, mockDataTraining } from "../../data/mockData";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalUsers, setTotalUsers] = useState(mockDataUser.length);
  const [totalCompany, setTotalCompany] = useState(mockDataCompany.length);
  const [totalTraining, setTotalTraining] = useState(mockDataTraining.length);
  const boxStyle = {
    gridColumn: 'span 3',
    backgroundColor: colors.indigo[300],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the left
    borderRadius: '4px',
    textDecoration: 'none', // Remove default Link underline
    padding: '10px', // Add padding for spacing
  };
  const statBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
  };

  const iconStyle = {
    color: colors.grey[100],
    fontSize: '26px',
    marginLeft: '80px', // Add space between icon and title
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Overview" subtitle="Dashboard overview" />
      </Box>

      {/*  Chart */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(10,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <Link to="/user" style={boxStyle}>
        <Box style={boxStyle}
         
        >
          <StatBox
            title="Total User"
            subtitle={totalUsers}
            increase="user"
            style={statBoxStyle}
            icon={
              <Groups2Icon sx={iconStyle} />
            }
          />
        </Box>
        </Link>
        <Link to="/job-posting" style={boxStyle}>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.indigo[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="4px"
        >
          <StatBox
            title="Total Shipowner"
            subtitle={totalCompany}
            increase="company"
            style={statBoxStyle}
            icon={
              <DirectionsBoatFilledIcon
              sx={iconStyle}
              />
            }
          />
        </Box>
        </Link>
        <Link to="/job-posting" style={boxStyle}>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.indigo[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="4px"
        >
          <StatBox
            title="Total Training Center"
            subtitle={totalTraining}
            increase="center"
            style={statBoxStyle}
            icon={
              <SchoolIcon
              sx={iconStyle}
              />
            }
          />
        </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Dashboard;
