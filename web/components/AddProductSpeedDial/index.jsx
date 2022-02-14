import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddIcon from "@mui/icons-material/Add";

import { useTranslation } from "react-i18next";

import useToggle from "../../hooks/useToggle";
import AddProductDialog from "../AddProductDialog";

export default function AddProductSpeedDial() {
  const { t } = useTranslation();
  const [isDialogOpen, toggleDialogOpen] = useToggle(false);

  const actions = [
    {
      icon: <AddIcon />,
      name: t(`products.add_product`),
      action: () => toggleDialogOpen(),
    },
  ];

  return (
    <Box
      sx={{
        height: 80,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        right: "0",
      }}
    >
      <SpeedDial
        ariaLabel={t(`products.add_product`)}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.action}
          />
        ))}
      </SpeedDial>
      <AddProductDialog isOpen={isDialogOpen} onClose={toggleDialogOpen} />
    </Box>
  );
}
