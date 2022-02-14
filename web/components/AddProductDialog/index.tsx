import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Autocomplete, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";

// TODO: Replace with data from server when there is an endpoint

const MOCK_DATA = [
  { label: "Магнит" },
  { label: "Пятёрочка" },
  { label: "Перекрёсток" },
];

export default function AddProductDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{t(`products.add_product`)}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t(`complete_all`)}</DialogContentText>
          <Grid container gap={1}>
            <Grid item flexGrow={1}>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label={t(`products.product_name`)}
                type="text"
                fullWidth
              />
            </Grid>
            <Grid flexGrow={1}>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label={t(`price`)}
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item flexGrow={1}>
              <Autocomplete
                id="combo-box-shop"
                options={MOCK_DATA}
                sx={{ minWidth: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label={t(`store`)} />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            {t(`cancel`)}
          </Button>
          {/* TODO: Add a post request when there is an endpoint */}
          <Button variant="contained" onClick={onClose}>
            {t(`add`)}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
