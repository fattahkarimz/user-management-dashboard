import React, { useState } from 'react';
import { Box, Typography, useTheme, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataUser } from "../../data/mockData";
import Header from "../../components/Header";

const User = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const handleRowClick = (rowData) => {
      setSelectedRowData(rowData);
      setOpenModal(true);
    }; 
    const handleModalClose = () => {
      setOpenModal(false);
      setSelectedRowData(null);
    }; 
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        },
      {
        field: "email",
        headerName: "Email",
        flex: 1,       
      },
      {
        field: "nid",
        headerName: "National ID",
        flex: 1,        
      },
      {
        field: "sid",
        headerName: "SID",
        flex: 1,     
      },
      {
        field: "rank",
        headerName: "Rank",
        flex: 1,     
      },      
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",        
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,       
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

    return (
      <Box m="20px" padding="0 0 20px 0 ">
        <Header
          title="User Table"
          subtitle="User list are both seafarers & non-seafarer but work related on maritime industries"
        />
        <Box
          m="40px 0 0 0"
          height="50vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: colors.indigo[100],
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.indigo[200],
              borderBottom: "none",
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
          <DataGrid rows={mockDataUser} columns={columns} />
          <Dialog
            open={openModal}
            onClose={handleModalClose}
            sx={{
              padding: "80px",
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
                <DialogTitle variant="h4">
                  Details
                </DialogTitle>
                <DialogContent sx={{ padding: "0 300px 0 25px"}}>
                  {/* Render the details from the selectedRowData */}
                  <Typography variant="h5">
                    <b>Name:</b> {selectedRowData.name}
                  </Typography>
                  <Typography variant="h5">
                    <b>Email:</b> {selectedRowData.email}
                  </Typography>
                  <Typography variant="h5">
                    <b>NiD:</b> {selectedRowData.nid}
                  </Typography>
                  <Typography variant="h5">
                  <b>SID:</b> {selectedRowData.sid}
                  </Typography>
                  <Typography variant="h5">
                  <b>Rank:</b> {selectedRowData.rank}
                  </Typography>
                  <Typography variant="h5">
                  <b>Age:</b> {selectedRowData.age}
                  </Typography>
                  <Typography variant="h5">
                  <b>Phone:</b> {selectedRowData.phone}
                  </Typography>
                  {/* Add more fields as needed */}
                </DialogContent>
                <DialogActions>
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
    );
}

export default User;