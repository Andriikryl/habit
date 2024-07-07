import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Difficulty = "easy" | "medium" | "hard";

interface selectComponentProps {
  label: string;
  value: string;
  options: { value: Difficulty; label: string }[];
  onChange: (event: SelectChangeEvent) => void;
}

const SelectComponent: React.FC<selectComponentProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectComponent };
