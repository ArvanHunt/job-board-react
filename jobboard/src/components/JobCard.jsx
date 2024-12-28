import React from "react";

const JobCard = ({ job, onSave }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-500">{job.company}</p>
      <p className="text-gray-600">Location: {job.location}</p>
      <p className="text-gray-600">Type: {job.type}</p>
      <p className="text-gray-600">Salary: ${job.salary.toLocaleString()}</p>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
          onClick={() => alert("Applied to " + job.title)}
        >
          Apply
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => onSave(job)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default JobCard;
