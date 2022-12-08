import { i18n } from "@lingui/core";
import "./LanguageSelector.sass";
import Select from "react-select";
import { useState } from "react";
import makeAnimated from "react-select/animated";

interface SelectorI {
  language: string;
}

function LanguageSelector({ language }: SelectorI) {
  const [curLanguage, setLanguage] = useState(language);

  function handleChange(event: any) {
    i18n.activate(event.value);
    setLanguage(event.value);
    localStorage.setItem("language", event.value);
  }

  const data = [
    { value: "en", label: "EN" },
    { value: "zh", label: "中国" },
  ];

  const getValue = () => {
    return curLanguage ? data.find((l) => l.value === curLanguage) : "";
  };

  const animatedComponents = makeAnimated();

  return (
    <div className="language-selector">
      {/* <select onChange={handleChange} value={language}>
        <option value="en">EN</option>
        <option value="zh">中国</option>
      </select> */}

      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={data}
        onChange={handleChange}
        value={getValue()}
        isSearchable={false}
        components={animatedComponents}
      />
    </div>
  );
}

export default LanguageSelector;
