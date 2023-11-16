import React from 'react';

function UserInput(props) {

   const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('Form Submitting...')
   }

   const handleReset = ()=>{
      console.log('Resetting...')
   }

   const inputChangeHandler = (input, value) => {
       console.log('INPUT: '+input)
       console.log('VALUE: '+value)
   }
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <div className='input-group'>
                    <p>
                        <lable htmlFor="current-savings">Current Savings ($)</lable>
                        <input type="number" id="current-savings" onChange={(event)=>{
                            inputChangeHandler('current-savings', event.target.value)
                        }}/>
                    </p>
                    <p>
                        <lable htmlFor="yearly-contribution">Yearly Savings ($)</lable>
                        <input type="number" id="yearly-contribution" onChange={(event)=>{
                            inputChangeHandler('yearly-contribution', event.target.value)
                        }}/>
                    </p>
               </div>
             <div className='input-group'>
          <p>
              <lable htmlFor="expected-return">Expected Interest (%, per year)</lable>
              <input type="number" id="expected-return" onChange={(event)=>{
                            inputChangeHandler('expected-return', event.target.value)
                        }}/>
          </p>
          <p>
              <lable htmlFor="duration">Investment Duration (years)</lable>
              <input type="number" id="duration" onChange={(event)=>{
                            inputChangeHandler('duration', event.target.value)
                        }}/>
          </p>
        </div>
        
        <p className='actions'>
          <button onClick={handleReset} type='reset'>Reset</button>
          <button type='submit'>Calculate</button>
        </p>

      </form>
        </div>
    );
}

export default UserInput;