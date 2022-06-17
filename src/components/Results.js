import pokedex from "../api/pokedex";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  Box,
  Link as MaterialLink,
  CircularProgress,
} from "@mui/material/";
import { toFirstCharUppercase } from "../utils/utils";

const Results = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    requestListOfPokemons();
  }, []);

  async function requestListOfPokemons() {
    const res = await pokedex.get("/?limit=1126");

    setList(res.data.results);
  }

  return list ? (
    <Box sx={{ p: 8 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {list.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.name}>
            <Card sx={{ maxWidth: 300 }} variant="outlined">
              <MaterialLink
                component={RouterLink}
                to={`/details/${item.name}`}
                underline={"none"}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography color="text.primary">
                      {toFirstCharUppercase(item.name)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </MaterialLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Results;
