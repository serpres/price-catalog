import type { NextPage } from "next";

import { Container, Grid } from "@mui/material";

import Header from "../components/header";

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
        <Container sx={{ mt: "80px", width: `calc(100% - ${drawerWidth}px)` }}>
          {children}
        </Container>
      </Grid>
    </>
  );
};

export default MainLayout;