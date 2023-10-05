import React from "react";
import MultiSelectCheckbox from "./MultiSelectCheckbox";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const App = () => {
  return (
    <div>
      <h1>Multi-Select Checkbox Example</h1>
      <MultiSelectCheckbox options={options} />
    </div>
  );
};

export default App;



import React, { useState } from "react";
import { FormControl, FormGroup, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";

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
      <FormControl component="fieldset">
        <FormGroup>
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
        </FormGroup>
      </FormControl>
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

