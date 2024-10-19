import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const EvaluateRule = ({ astId }) => {
  const [data, setData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: '',
  });

  const [results, setResults] = useState(null);
  const [evaluated, setEvaluated] = useState(false); // Track if the evaluation has been performed

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setResults(null); 
    setEvaluated(false); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEvaluate();
  };

  const handleEvaluate = () => {
    fetch('http://localhost:5000/api/rules/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        astId,
        data: {
          ...data,
          age: Number(data.age),
          salary: Number(data.salary),
          experience: Number(data.experience),
        },
      }),
    })
      .then((response) => response.json())
      .then((resultData) => {
        setResults(resultData.result); 
        setEvaluated(true); 
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <Card className="w-2/3 p-4 mx-4 shadow-md border border-gray-300">
        <CardContent>
          <Typography variant="h5" component="h2" className="text-center mb-4">
            Evaluate Rule
          </Typography>
          <form onSubmit={handleSubmit} className="mb-6">
            <TextField
              label="Age"
              type="number"
              name="age"
              value={data.age}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Department"
              type="text"
              name="department"
              value={data.department}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Salary"
              type="number"
              name="salary"
              value={data.salary}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Experience"
              type="number"
              name="experience"
              value={data.experience}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="mt-4"
              >
                Evaluate
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="w-1/3 p-4 mx-4 shadow-md border border-gray-300">
  <CardContent>
    <Typography variant="h5" component="h2" className="mb-4">
      Result:
    </Typography>
    {evaluated ? (
      results !== null ? (
        <Typography
          variant="h3"
          component="p"
          className={`font-bold ${results === true ? 'text-green-600' : 'text-red-600'}`} 
        >
          {results === true ? 'True' : 'False'}
        </Typography>
      ) : (
        <Typography variant="body1" className="text-red-500">
          Error: No result available.
        </Typography>
      )
    ) : (
      <Typography variant="body1" className="text-gray-600">
        Please evaluate the rule to see the result.
      </Typography>
    )}
  </CardContent>
</Card>

    </div>
  );
};

export default EvaluateRule;
