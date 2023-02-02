import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import './assets/styles/index.scss'
/* The following line can be included in a src/App.scss */

// import "bootstrap/dist/css/bootstrap.min.css";
/* The following line can be included in your src/index.js or App.js file */

// import './App.scss';
import { Dropdown } from "./components/dropdown";
import { OptionTypes } from "./components/dropdown";
// import Button from "./components/Button/Button";

import Button from "./components/Button/Button";

function App() {
  const [options, setOptions] = useState<OptionTypes[]>();

  const updateValue = (e: any) => {
    console.log("e", e);
  };

  useEffect(() => {
    setOptions([
      {
        id: 1,
        name: "Profile",
        value: "Profile",
        avatar: "person",
      },
      {
        id: 1,
        name: "Settings",
        value: "Settings",
        avatar: "settings",
      },
      {
        id: 1,
        name: "Account",
        value: "Account",
        avatar: "lock",
      },
    ]);
  }, []);
  return (
    <div className="App">
      {options && (
        <Dropdown
          size="medium"
          openParentColor="grey"
          option={options}
          handleChange={updateValue}
          backgroundColor="red"
        />
      )}
      {/* <Button icon="person" label="person" /> */}
    </div>
  );
}

export default App;
