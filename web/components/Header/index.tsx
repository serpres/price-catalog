import React from "react";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useTranslation } from "react-i18next";

import useToggle from "../../hooks/useToggle";

import AppDrawer from "../Drawer";
import LanguageMenu from "../LanguageMenu";
import SearchInput from "../Search";

interface Props {
  drawerWidth: number;
}

const Header = ({ drawerWidth }: Props) => {
  const [drawerMobileOpen, handleDrawerMobileToggle] = useToggle(false);
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
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

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
          >
            <Grid item>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t(`products_catalog`)}
              </Typography>
            </Grid>

            {/* TODO: Add the ability to search  products */}
            <Grid item xs={4}>
              <SearchInput />
            </Grid>
            <Grid item>
              <LanguageMenu />
            </Grid>
          </Grid>
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
