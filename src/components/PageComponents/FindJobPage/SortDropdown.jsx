// SortDropdown.jsx

import React from "react";

const SortDropdown = ({ sortOrder, onSortChange }) => {
  const sortOptions = [
    { value: "mostRecent", label: "Most Recent" },
    { value: "oldest", label: "Oldest" },
    { value: "titleAsc", label: "Title A-Z" },
    { value: "titleDesc", label: "Title Z-A" },
  ];

  return (
    <div className="text-sm text-primary-300 flex items-center gap-2">
      Sorted by:
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="text-secondary-500 bg-transparent outline-none focus:ring-0 border-none"
      >
        {sortOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
