import { Component } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  CircularProgress,
  Box,
  Typography,
  Link as MaterialLink,
} from "@mui/material";

import pokedex from "../api/pokedex";
import { toFirstCharUppercase } from "../utils/utils";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await pokedex.get(`/${this.props.params.name}`);

    this.setState(Object.assign({ loading: false }, res.data));
  }

  render() {
    if (this.state.loading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    const { types, name, abilities, stats } = this.state;
    return (
      <Box sx={{ p: 8, height: "100vh" }}>
        <Box sx={{ display: "flex" }}>
          <img
            src={this.state.sprites.front_default}
            style={{ width: "300px", height: "300px" }}
          />
          <Box>
            <Typography variant="h3">
              Name: {toFirstCharUppercase(name)}
            </Typography>
            <Typography variant="h4">
              Type(s):{" "}
              {types
                .map(({ type }) => toFirstCharUppercase(type.name))
                .join(", ")}
            </Typography>
            <Typography variant="h4">
              Abilities:{" "}
              {abilities
                .map(({ ability }) => toFirstCharUppercase(ability.name))
                .join(", ")}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3">Stats</Typography>
          {stats.map(({ base_stat, stat }) => (
            <Typography key={stat.name}>
              {toFirstCharUppercase(stat.name)}: {base_stat}
            </Typography>
          ))}
        </Box>
        <MaterialLink component={RouterLink} to="/">
          Back to List
        </MaterialLink>
      </Box>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
