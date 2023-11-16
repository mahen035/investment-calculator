import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className='header'>
        {/* <img src={logo} alt='logo'/> */}
        <h1>Investment Calculator</h1>
      </header>

      <form className='form'>
        <div className='input-group'>
            <p>
              <lable htmlFor="current-savings">Current Savings ($)</lable>
              <input type="number" id="current-savings"/>
          </p>
          <p>
              <lable htmlFor="yearly-contribution">Yearly Savings ($)</lable>
              <input type="number" id="yearly-contribution"/>
          </p>
        </div>
        <div className='input-group'>
          <p>
              <lable htmlFor="expected-return">Expected Interest (%, per year)</lable>
              <input type="number" id="expected-return"/>
          </p>
          <p>
              <lable htmlFor="duration">Investment Duration (years)</lable>
              <input type="number" id="duration"/>
          </p>
        </div>
        
        <p className='actions'>
          <button type='reset'>Reset</button>
          <button type='submit'>Calculate</button>
        </p>

      </form>

      <table className='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS</td>
            <td>INTEREST</td>
            <td>TOTAL INTEREST</td>
            <td>TOTAL INVESTMENT</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default App;
