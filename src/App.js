import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Link as RouterLink,
  Routes,
  Route,
} from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Link as MaterialLink,
  Toolbar,
  Typography,
} from "@mui/material";
import WrappedDetails from "./components/Details";
import Results from "./components/Results";

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
            <MaterialLink component={RouterLink} to="/" underline="none">
              <Typography variant="h6" color="text.primary" noWrap>
                Pokedex
              </Typography>
            </MaterialLink>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/details/:name" element={<WrappedDetails />} />
          <Route path="/" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

render(<App />, document.getElementById("root"));
