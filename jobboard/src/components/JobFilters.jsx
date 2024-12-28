import React from "react";

const JobFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="Location"
        className="p-2 border rounded w-full md:w-auto"
      />
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
      </select>
      <input
        type="number"
        name="salary"
        value={filters.salary}
        onChange={handleChange}
        placeholder="Minimum Salary"
        className="p-2 border rounded w-full md:w-auto"
      />
    </div>
  );
};

export default JobFilters;
