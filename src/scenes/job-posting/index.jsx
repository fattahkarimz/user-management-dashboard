import React, { useState } from 'react';
import { Box, useTheme, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, styled, Tab, Tabs, AppBar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PostAddIcon from '@mui/icons-material/PostAdd';
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { mockDataCompany, mockPostData } from "../../data/mockData";


const Job = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalCompany, setTotalCompany] = useState(mockDataCompany.length);
  
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(0); // 0: All, 1: Approved, 2: Deleted

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedRowData(null);
  };

  const handleApproval = () => {
    // Handle approval action here
    console.log("Approved:", selectedRowData);
  };

  const handleDelete = () => {
    // Handle delete action here
    console.log("Deleted:", selectedRowData);
  };
  
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const columns = [
    { field: "id", headerName: "No.", flex: 1, },
    {
      field: "company",
      headerName: "Company",
      flex: 2,
      },
    {
      field: "position",
      headerName: "Position",
      flex: 2,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 10,
      whiteSpace: "pre-wrap",
      overflowWrap: "break-word",
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 2,
    },
    {
      field: "vessel",
      headerName: "Type of Vessel",
      flex: 2,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 2,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: (params) => {
        const { row } = params;

        return (
          <Button
            variant="contained"
            
            sx={{color:colors.indigo[200], backgroundColor:colors.primary[100], '&:hover': {
             color:colors.indigo[300], backgroundColor:colors.primary[300] // Change to the desired hover color
            },
          }}
            onClick={() => handleRowClick(row)}
          >
            View Details
          </Button>
        );
      },
    },
  ];

  // Filter data based on the selected tab
  const filteredData = currentTab === 1
    ? mockPostData.filter(row => row.access === 'approved')
    : currentTab === 2
      ? mockPostData.filter(row => row.access === 'deleted')
      : mockPostData;

  

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Job Posting"
          subtitle="Job posting overview. Please check job posting request below"
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
            title="Total Shipowner"
            subtitle={totalCompany}
            increase="company"
            icon={
              <DirectionsBoatFilledIcon
                sx={{ color: colors.grey[100], fontSize: "26px" }}
              />
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
            title="Vacancy Posted This Month"
            subtitle="19"
            increase="vacancy"
            icon={
              <PostAddIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />
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
            title="Total Vacancy Applied"
            subtitle="43"
            increase="vacancies"
            icon={
              <PostAddIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />
            }
          />
        </Box>
      </Box>

      {/* Row 2 */}
      <Box padding="30px 0 20px 0 ">
        <Typography
          variant="h4"
          color={colors.grey[100]}
          fontWeight="semi-bold"
          sx={{ mb: "5px 0 0 0" }}
        >
          Post that need to review & approval
        </Typography>
        <Box
          m="10px 0 0 0"
          height="35vh"
          sx={{
            borderRadius: "0",
            "& .MuiDataGrid-root": {
              border: colors.indigo[100],              
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
           
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.indigo[200],
              borderBottom: "none",
              borderRadius: "0",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.indigo[300],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.indigo[200],
              borderRadius: "0 0 4px 4px",
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <AppBar position="static" sx={{ borderRadius:"4px 4px 0 0"}}>
            <Tabs
              sx={{    
                borderRadius: "4px 4px 0",            
                backgroundColor: colors.indigo[200],
                
                "& .MuiTabs-indicator": {
                  color: colors.primary[100],
                  backgroundColor: colors.primary[100], // Active tab color
                },
                "& .Mui-selected": { color: "#ffffff" },
              }}
              value={currentTab}
              onChange={handleTabChange}
            >
              <Tab
                sx={{
                  color: colors.primary[100],
                  activeColor: colors.primary[100],
                  "&:hover": { color: colors.primary[300] },
                  "& .Mui-selected": { color: "#ffffff" },
                }}
                label="All"
              />
              <Tab
                sx={{
                  color: colors.primary[100],
                  activeColor: colors.primary[100],
                  "&:hover": { color: colors.primary[300] },
                  "& .Mui-selected": { color: "#ffffff" },
                }}
                label="Approved"
              />
              <Tab
                sx={{
                  color: colors.primary[100],
                  activeColor: colors.primary[100],
                  "&:hover": { color: colors.primary[300] },
                  "& .Mui-selected": { color: "#ffffff" },
                }}
                label="Deleted"
              />
            </Tabs>
          </AppBar>
          <DataGrid rows={mockPostData} columns={columns} />
          <Dialog
            open={openModal}
            onClose={handleModalClose}
            sx={{
              "& .MuiDialogContent-root": {
                backgroundColor: colors.indigo[300],
              },
              "& .MuiDialogTitle-root": {
                backgroundColor: colors.indigo[300],
                fontWeight: "bold",
              },
              "& .MuiDialogActions-root": {
                backgroundColor: colors.indigo[300],
              },
            }}
          >
            {selectedRowData && (
              <>
                <DialogTitle variant="h4" sx={{ fontWeights: "bold" }}>
                  Details
                </DialogTitle>
                <DialogContent>
                  {/* Render the details from the selectedRowData */}
                  <Typography variant="h3">
                    Company: {selectedRowData.company}
                  </Typography>
                  <Typography variant="body1">
                    Position: {selectedRowData.position}
                  </Typography>
                  <Typography variant="body1">
                    Duration: {selectedRowData.duration}
                  </Typography>
                  <Typography variant="body1">
                    Vessel: {selectedRowData.vessel}
                  </Typography>
                  <Typography variant="body1">
                    Description: {selectedRowData.description}
                  </Typography>
                  {/* Add more fields as needed */}
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleApproval}                    
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#08B127",
                      "&:hover": { backgroundColor: "#48CC60" },
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={handleDelete}                    
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#B10808",
                      "&:hover": { backgroundColor: "#D44242" },
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={handleModalClose}
                    sx={{
                      color: colors.primary[800],
                      backgroundColor: colors.primary[200],
                      "&:hover": {
                        color: colors.primary[800],
                        backgroundColor: colors.primary[300],
                      },
                    }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default Job;
