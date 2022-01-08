import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Currency, Currencies } from "../../types/currency";

interface Props {
  value: Currency;
  selectIndex: 0 | 1;
  handleChangeSelect: (event: SelectChangeEvent, index: 0 | 1) => void;
}

const CurrencySelect = ({ value, selectIndex, handleChangeSelect }: Props) => {
  return (
    <FormControl sx={{ width: "90px" }}>
      <Select
        labelId={`currency-select-${selectIndex}-label`}
        id={`currency-select-${selectIndex}`}
        value={value}
        onChange={(event) => handleChangeSelect(event, selectIndex)}
      >
        {Object.values(Currencies).map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
