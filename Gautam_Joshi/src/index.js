const express = require('express');
const fs = require('fs');
const fastcsv = require('fast-csv');

const app = express();
const PORT = process.env.Port||3000;

app.use(express.json());

let transactions = [];

app.post('/transactions', (req, res) => {
  const csvFilePath = 'data.csv'; 

  const stream = fs.createReadStream(csvFilePath)
    .pipe(fastcsv.parse({ comment: '#' ,ignoreEmpty: true}))
    .on('data', row => { 
      transactions.push({
        Date: row[0],
        Type: row[1],
        Amount: parseFloat(row[2]),
        Memo: row[3]
      });
    })
    .on('end', () => {
        console.log(transactions)
      res.status(200).json({ message: 'Data has been processed and stored' });
    });

  stream.resume();
});

app.get('/report', (req, res) => {
  let grossRevenue = 0;
  let expenses = 0;
  transactions.forEach(transaction => {
    if (transaction['Type'] === 'Income') {
      grossRevenue += transaction['Amount'];
     
    } else if (transaction['Type'] === 'Expense') {
      expenses += transaction['Amount'];
      
    }
  });


  const netRevenue = grossRevenue - expenses;

  const report = {
    'gross-revenue': grossRevenue.toFixed(2),
    expenses: expenses.toFixed(2),
    'net-revenue': netRevenue.toFixed(2)
  };

  res.json(report);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
