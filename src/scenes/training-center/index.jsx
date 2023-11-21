import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Groups2Icon from "@mui/icons-material/Groups2";
import SchoolIcon from '@mui/icons-material/School';
import { mockDataUser, mockDataTraining } from "../../data/mockData";

const Training = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [totalUsers, setTotalUsers] = useState(mockDataUser.length);
    const [totalTraining, setTotalTraining] = useState(mockDataTraining.length);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Training Center"
          subtitle="This is training center dashboard"
        />
      </Box>
      {/*  Chart */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(10,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.indigo[300]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="4px"
        >
          <StatBox
            title="Total User"
            subtitle= {totalUsers}
            increase="user"
            icon={
              <Groups2Icon sx={{ color: colors.grey[100], fontSize: "26px" }} />
            }
          />
        </Box>
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
            increase="Center"
            icon={
              <SchoolIcon
                sx={{ color: colors.grey[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Training;
