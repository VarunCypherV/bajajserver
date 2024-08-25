const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(cors());

const user = {
  user_id: "john_doe_17091999",
  email: "john@xyz.com",
  roll_number: "ABCD123"
};

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && item.match(/[a-zA-Z]/));

  let highestLowercase = [];
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].toLowerCase() === data[i] && data[i].match(/[a-z]/)) {
      highestLowercase = [data[i]];
      break;
    }
  }

  const response = {
    is_success: true,
    user_id: user.user_id,
    email: user.email,
    roll_number: user.roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  const response = {
    operation_code: 1
  };
  res.json(response);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
