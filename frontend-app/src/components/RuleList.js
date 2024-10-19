import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

const RuleList = ({ rules, onDeleteRule, onSelectRule }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center mt-4 items-center">
      <h2 className="text-3xl font-bold mb-4">Rules List</h2>
      <div className="w-4/5 h-60 overflow-y-auto border border-gray-300 rounded"> {/* Set height and overflow */}
        {rules.map((ruleChild, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded shadow-xl p-4 mb-2"> {/* Add margin for spacing */}
              <div className="flex items-center justify-between">
                <input
                  type="checkbox"
                  id={`rule-${ruleChild._id}`}
                  onChange={() => onSelectRule(ruleChild._id)}
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor={`rule-${ruleChild._id}`} className="text-lg text-gray-700">{ruleChild.rule}</label>
                <button
                  type="button"
                  onClick={() => onDeleteRule(ruleChild._id)}
                  className="flex items-center justify-center text-red-500 hover:text-red-700 transition duration-200 ease-in-out"
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuleList;
