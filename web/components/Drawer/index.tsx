import * as React from "react";

import Link from "next/link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import ListItemIcon from "@mui/material/ListItemIcon";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { useTranslation } from "react-i18next";

interface Props {
  drawerWidth: number;
  drawerMobileOpen: boolean;
  handleDrawerMobileToggle: () => void;
}

export default function AppDrawer({
  drawerWidth,
  drawerMobileOpen,
  handleDrawerMobileToggle,
}: Props) {
  const { t } = useTranslation();

  const menuItems = [
    { path: "/", title: t(`main_page`), icon: <HomeIcon /> },
    {
      path: "/currencyconverter",
      title: t(`currency_convertor`),
      icon: <CompareArrowsIcon />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <a>
                <ListItemText primary={item.title} />
              </a>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="Menu"
      >
        <Drawer
          variant="temporary"
          open={drawerMobileOpen}
          onClose={handleDrawerMobileToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
