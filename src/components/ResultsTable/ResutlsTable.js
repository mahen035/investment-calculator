import React from 'react';

function ResutlsTable(props) {
    return (
        <div>
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

export default ResutlsTable;