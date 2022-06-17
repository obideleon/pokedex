import {
  AppBar,
  CssBaseline,
  Link as MaterialLink,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Link as RouterLink,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./components/Details";
import Reults from "./components/Results";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <MaterialLink component={RouterLink} to="/">
                Pokedex
              </MaterialLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Reults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

render(<App />, document.getElementById("root"));
