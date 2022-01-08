import type { NextPage } from "next";

import { Container, Grid } from "@mui/material";

import Header from "../components/Header";

const MainLayout: NextPage = ({ children }) => {
  const drawerWidth = 240;

  return (
    <>
      <Header drawerWidth={drawerWidth} />
      <Grid
        container
        justifyContent="center"
        sx={{ pl: { sm: `${drawerWidth}px` } }}
      >
        <Container sx={{ mt: "80px" }}>{children}</Container>
      </Grid>
    </>
  );
};

export default MainLayout;
