import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResutlsTable from './components/ResultsTable/ResutlsTable';
import { useState } from 'react';

function App() {

  const[userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) =>{
     setUserInput(userInput)
  }
      const yearlyData = []; // Per year data

      if(userInput){
        let currentSavings = userInput['current-savings'];
        let yearlyContribution = userInput['yearly-contribution'];
        let expectedReturn = userInput['expected-return'] / 100;
        let duration = userInput.duration;
  
        for(let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings = currentSavings + yearlyInterest + yearlyContribution
          yearlyData.push({
            year: i+1,
            yearlyInterest: yearlyInterest,
            savings: currentSavings,
            yearlyContribution: yearlyContribution,
           
          })
  
        } 
      }
     
  return (
    <div>
     <Header />
     <UserInput onCalculate={calculateHandler}/>
     {!userInput && <p>No invenstment calculated Yet.</p>}
     {userInput && <ResutlsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
