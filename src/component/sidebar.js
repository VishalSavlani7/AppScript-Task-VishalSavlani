import React, { useState } from "react";
import styles from "./sidebar.module.css";

const Sidebar = ({ filters, onFilterChange }) => {
  const [expanded, setExpanded] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleAccordionToggle = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      let newFilters = { ...prev };

      if (
        Object.keys(newFilters).length > 0 &&
        !Object.keys(newFilters).includes(category)
      ) {
        const filteredFilters = { [category]: newFilters[category] || [] };
        newFilters = filteredFilters;
      }

      if (newFilters[category]?.includes(value)) {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value
        );
      } else {
        newFilters[category] = [...(newFilters[category] || []), value];
      }

      onFilterChange(newFilters);

      return newFilters;
    });
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="customizable"
          value="customizable"
          checked={selectedFilters["Customizable"]?.includes("customizable")}
          onChange={() => handleCheckboxChange("Customizable", "customizable")}
        />
        <label htmlFor="customizable">Customizable</label>
      </div>

      {filters.map((filter, index) => (
        <div key={index} className={styles.filterCategory}>
          <h3
            className={styles.filterTitle}
            onClick={() => handleAccordionToggle(filter.title)}
          >
            {filter.title}
          </h3>
          {expanded[filter.title] && (
            <div className={styles.filterOptions}>
              {filter.options.map((option, idx) => (
                <div key={idx} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    className={styles.checkboxStyle}
                    id={`${filter.title}-${option.value}`}
                    value={option.value}
                    checked={(selectedFilters[filter.title] || []).includes(
                      option.value
                    )}
                    onChange={() =>
                      handleCheckboxChange(filter.title, option.value)
                    }
                  />
                  <label
                    className={styles.labelStyle}
                    htmlFor={`${filter.title}-${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
