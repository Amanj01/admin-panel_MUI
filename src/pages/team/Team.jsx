import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            p: "5px",
            width: "auto",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
          }}>
            {access === "Admin" &&  (
              <AdminPanelSettingsOutlined sx={{ color: "#fff" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff", ml: 1 }}>
              {access}
            </Typography>
          </Box>
        );
      }
    }
  ];

  return (

    <Box style={{ height: 600, width: '98%', mx: "auto" }}>
       <Header title={'TEAM'} subTitle={'Managing the Team Members'} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default Team;
