import React from "react";
import {
  Autocomplete,
  FormHelperText,
  Typography,
  TextField,
} from "components/muiComponents";

export default function Select({
  value,
  onChange,
  options = [],
  multiple = false,
  optionKey = "title",
  label = "",
  placeholder = "",
  required,
  error,
  helperText,
}) {
  return (
    <Autocomplete
      required={required}
      filterSelectedOptions
      multiple={multiple}
      disableCloseOnSelect={multiple}
      options={options}
      getOptionLabel={(option) => option[optionKey]}
      value={value}
      onChange={(e, value) => onChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          // {...basicTextProps}
          placeholder={placeholder}
          label={label}
          sx={{
            "& fieldset": {
              border: `0.2rem solid #fff`,
              borderRadius: "1.5rem",
              boxShadow: `0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
            },
            "& input": { color: ` #fff` },
            "& .MuiSvgIcon-root": { color: ` #fff` },
            "& span": { color: ` #fff` },
            "& .MuiInputBase-root.MuiOutlinedInput-root:hover": {
              "& fieldset": {
                border: `0.2rem solid #fff`,
                borderRadius: "1.5rem",
                boxShadow: `0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
              },
            },
          }}
        />
      )}
    />
  );
}
