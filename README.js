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
