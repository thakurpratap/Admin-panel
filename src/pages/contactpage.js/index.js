import { Box,} from "@mui/material";
import { DataGrid ,} from "@mui/x-data-grid";   //GridToolbar
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
const colors = {
    primary: "#1976d2",
    secondary: "#dc004e",
    success: "#2e7d32",
    error: "#d32f2f",
    warning: "#ed6c02",
    info: "#0288d1",
    light: "#f5f5f5",
    dark: "#212121",
    greenAccent: {
      300: "#66bb6a",
      600: "#43a047",
      700: "#388e3c",
    },
    blueAccent: {
      700: "#1976d2",
    },
    grey: {
      100: "#f5f5f5",
    },
  };
  const columns = [
    { field: "id", headerName: "ID" , flex : 0.5},
    { field: "registrarId", headerName: "Registrar ID" , flex : 0.5},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
      },

  ];

  return (
    <div className="card shadow border-0 p-3 mt-5 m-4">
    {/* m="20px" */}
    <Box m="20px">
      {/* <Header title="TEAM" subtitle="List of Contacts for Future Reference" /> */}
      <Box
        // m="40px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer ,MuiButton-text":{
              color: `${colors.grey[200]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
      {/* components={{Toolbar:GridToolbar}} */}
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
     </Box>
     </div>
  );
};

export default Contacts;