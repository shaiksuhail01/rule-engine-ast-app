import { useState } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CombineRule = ({ onCombineRule, error }) => {
  const [ruleStrings, setRuleStrings] = useState([{ value: "" }]);
  const [combinedRule, setCombinedRule] = useState([]);

  const handleAddRule = () => {
    setRuleStrings([...ruleStrings, { value: "" }]);
  };

  const handleRuleChange = (index, value) => {
    setRuleStrings(
      ruleStrings.map((rule, i) => {
        if (i === index) {
          return { value };
        }
        return rule;
      })
    );
  };

  const handleCombineRules = () => {
    const combinedRuleArray = ruleStrings.map((rule) => rule.value);
    setCombinedRule(combinedRuleArray);
    onCombineRule(combinedRuleArray);
  };

  return (
    <div className="w-full mt-4">
      <form className="w-2/3 mx-auto p-4 bg-white shadow-xl rounded">
        <h2 className="text-lg font-bold mb-4">Combine Rules</h2>
        
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        
        {ruleStrings.map((rule, index) => (
          <div key={index} className="flex mb-2 items-center">
            <TextField
              variant="outlined"
              value={rule.value}
              onChange={(e) => handleRuleChange(index, e.target.value)}
              placeholder="Enter a rule"
              fullWidth
              margin="normal"
            />
            {index > 0 && (
              <IconButton
                color="error"
                onClick={() => setRuleStrings(ruleStrings.filter((_, i) => i !== index))}
                aria-label="delete"
                sx={{ ml: 1 }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}

        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleAddRule}
          sx={{ mr: 1 }}
        >
          Add Rule
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleCombineRules}
        >
          Combine Rules
        </Button>

        {/* Display combined rule only if there's no error and more than one rule */}
        {combinedRule.length > 0 && !error && ruleStrings.length > 1 && (
          <p className="text-lg font-bold mt-4">Combined Rule: {combinedRule.join(", ")}</p>
        )}
      </form>
    </div>
  );
};

export default CombineRule;
