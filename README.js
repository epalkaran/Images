import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MultiSelectCheckbox = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    // Do something with selectedOptions, for example, store them in a state or send them to an API.
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <div>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          }
          label={option}
        />
      ))}
      <div style={{ marginTop: 20 }}>
        <Typography variant="h6">Selected Options:</Typography>
        {selectedOptions.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: 20 }}>
        Submit
      </Button>
    </div>
  );
};

export default MultiSelectCheckbox;
