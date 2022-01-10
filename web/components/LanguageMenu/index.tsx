import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Flags from "country-flag-icons/react/3x2";

import { useTranslation } from "react-i18next";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    paddingLeft: 5,
    width: 100,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export default function CustomizedSelects() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState("");

  useEffect(() => {
    i18n.language && setLanguage(i18n.language);
  }, [i18n.language]);

  const handleChange = (event: { target: { value: string } }) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  const languages = [
    {
      value: "ru",
      icon: (
        <Flags.RU
          style={{ width: 20, marginRight: 10, border: "1px solid #ccc" }}
        />
      ),
      title: t(`languages.russian`),
    },
    {
      value: "en",
      icon: (
        <Flags.GB
          style={{ width: 20, marginRight: 10, border: "1px solid #ccc" }}
        />
      ),
      title: t(`languages.english`),
    },
  ];

  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          labelId="language-customized-select-label"
          id="language-customized-select"
          value={language}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {languages.map((language) => (
            <MenuItem key={language.value} value={language.value} sx={{ p: 1 }}>
              {language.icon}
              {language.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
