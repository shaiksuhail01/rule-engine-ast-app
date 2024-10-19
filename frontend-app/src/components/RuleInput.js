import { useState } from "react";
import { TextField, Button } from "@mui/material";

const RuleInput = ({ onCreateRule, error, setError }) => {
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onCreateRule(ruleString);
      setRuleString('');
      setError('');
    } catch (error) {
    
      console.error(error);
      setError("An error occurred while creating the rule."); 
    }
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className="w-2/3 mx-auto p-4 bg-white shadow-xl rounded">
        <h2 className="text-lg font-bold mb-4">Create a New Rule</h2>
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <TextField
          variant="outlined"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter a rule"
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="info" // Adjust color as per your theme
          className="mt-2"
        >
          Create Rule
        </Button>
      </form>
    </div>
  );
};

export default RuleInput;
