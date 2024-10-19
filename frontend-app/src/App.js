import React, { useState, useEffect } from 'react';
import RuleInput from './components/RuleInput';
import RuleList from './components/RuleList';
import EvaluateRule from './components/EvaluateRule';
import CombineRule from './components/CombineRule';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  const [rules, setRules] = useState([]);
  const [astId, setAstId] = useState([]);
  const [inputError, setInputError] = useState([]);
  const [combineError, setCombineError] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rules/getAll')
      .then(response => {
        setRules(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCreateRule = (newRule) => {
    axios.post('http://localhost:5000/api/rules/create', { ruleString: newRule })
      .then(response => {
        setRules([...rules, response.data.rule]);
      })
      .catch(err => {
        setInputError(err.response.data.message);
      });
  };

  const handleCombineRule = (combinedRulesArray) => {
    axios.post('http://localhost:5000/api/rules/combine', combinedRulesArray)
      .then(response => {
        setRules([...rules, response.data.rule]);
        setCombineError("");
      })
      .catch(err => {
        setCombineError(err.response.data.message);
      });
  };

  const handleDeleteRule = (ruleId) => {
    axios.delete(`http://localhost:5000/api/rules/${ruleId}`)
      .then(response => {
        setRules(rules.filter(rule => rule._id !== ruleId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSelectRule = (ruleId) => {
    setAstId(ruleId);
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rule Engine with AST
        </Typography>
      </Box>
      <RuleInput onCreateRule={handleCreateRule} error={inputError} setError={setInputError} />
      <CombineRule onCombineRule={handleCombineRule} error={combineError} />
      <EvaluateRule astId={astId} />
      <RuleList rules={rules} onDeleteRule={handleDeleteRule} onSelectRule={handleSelectRule} />
    </Container>
  );
};

export default App;
