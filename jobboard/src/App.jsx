import React, { useState } from "react";
import JobCard from "./components/JobCard";
import JobFilters from "./components/JobFilters";
import { jobs as jobData } from "./data";

const App = () => {
  const [filters, setFilters] = useState({ location: "", type: "", salary: "" });
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobData.filter((job) => {
    const matchLocation =
      filters.location === "" || job.location.includes(filters.location);
    const matchType = filters.type === "" || job.type === filters.type;
    const matchSalary =
      filters.salary === "" || job.salary >= Number(filters.salary);
    return matchLocation && matchType && matchSalary;
  });

  const handleSave = (job) => {
    if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
      alert(`Saved ${job.title}`);
    } else {
      alert(`${job.title} is already saved.`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Job Board
      </h1>
      <JobFilters filters={filters} setFilters={setFilters} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onSave={handleSave} />
          ))
        ) : (
          <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Saved Jobs</h2>
        {savedJobs.length > 0 ? (
          <ul className="list-disc pl-5">
            {savedJobs.map((job) => (
              <li key={job.id} className="text-gray-700">
                {job.title} at {job.company}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No saved jobs.</p>
        )}
      </div>
    </div>
  );
};

export default App;
