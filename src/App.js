import logo from './logo.svg';
import './App.css';
import TableTransaction from './Components/TableTransaction';

function App() {
  let TransactionRecords = [
    { date: "2024-04-05", description: "Coffee with friends", category: "Social", amount: 8.50 },
    { date: "2024-04-06", description: "Internet bill", category: "Utilities", amount: 60.00 },
    { date: "2024-04-01", description: "Grocery shopping", category: "Food", amount: 150.00 },
    { date: "2024-04-03", description: "Monthly subscription", category: "Entertainment", amount: 12.99 },
    { date: "2024-04-04", description: "Gym membership", category: "Health", amount: 40.00 },
    { date: "2024-04-10", description: "Textbooks", category: "Education", amount: 120.00 }
];
  return (
    <div className="App">
      <div className='royaltitle'>The Royal Bank of Flatiron</div>
      <TableTransaction records={TransactionRecords}/>
    </div>
  );
}
export default App;
