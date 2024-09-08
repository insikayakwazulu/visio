import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants.js";
import { SearchBar } from "./";

const Navbar = () => (
  < Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#e5e5e5', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", fontSize: "2rem", fontFamily: "Roboto", fontWeight: "bolder", color: "#8F00FF" }}>
    <img src={logo} alt="logo" height={45} />Visio
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;