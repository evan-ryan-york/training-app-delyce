import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff5f5d"
        }
    }
})

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minWidth: 250, width: "80%", margin: "30px auto", padding: 2, textAlign: "center" }}>
        <Avatar
          sx={{ width: 100, height: 100, margin: "0px auto" }}
          alt=""
          src="https://i.pravatar.cc/100?img=3"
        />
        <Typography variant="h4" component="div">
          Ryan York
        </Typography>
        <Typography variant="p" component="div">
          Age: 37
        </Typography>
        <Button sx={{ mt: 2 }} color="primary" variant="outlined">
          Edit
        </Button>
      </Paper>
    </ThemeProvider>
  );
}
