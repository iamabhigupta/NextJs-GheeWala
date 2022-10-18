import React from "react";
import Select from "react-select";

const SelectComponent = () => {
  const options = [
    { value: "2", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  return <Select options={options} className="text-black" />;
};

export default SelectComponent;
