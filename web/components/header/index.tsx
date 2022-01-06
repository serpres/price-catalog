import React from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useToggle from "../../hooks/useToggle";

import AppDrawer from "../drawer";

interface Props {
  drawerWidth: number;
}

const Header = ({ drawerWidth }: Props) => {
  const [drawerMobileOpen, handleDrawerMobileToggle] = useToggle(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerMobileToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products catalog
          </Typography>
        </Toolbar>
      </AppBar>
      <AppDrawer
        drawerWidth={drawerWidth}
        drawerMobileOpen={drawerMobileOpen}
        handleDrawerMobileToggle={handleDrawerMobileToggle}
      />
    </Box>
  );
};

export default Header;
