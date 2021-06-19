import './App.css';
import LineChart from './components/LineChart';

const data = [
  {
    label: 'ABC',
    value: 11
  },
  {
    label: 'EFG',
    value: 2
  },
  {
    label: 'HIJ',
    value: 89
  },
  {
    label: 'KLM',
    value: 44
  },
  {
    label: 'MNO',
    value: 77
  },
  {
    label: 'PQR',
    value: 33
  },
  {
    label: 'STU',
    value: 0
  },
  {
    label: 'VWX',
    value: 66
  },
  {
    label: 'YZ',
    value: 100
  },
]

function App() {
  const colors = ['#541488', '#008CFF', '#ff7810'];
  return (
    <div className="App">
      <header className="App-header">
        D3 Graphs in React
      </header>

      <div className="card" style={{ margin: '40px', padding: '15px' }}>
        <LineChart width={480} height={280} colors={colors} data={data} />
      </div>
    </div>
  );
}

export default App;
