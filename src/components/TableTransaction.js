import React from 'react';
import TransactionRow from './TransactionRow';
import { useState } from 'react';
import AddTransaction from './AddTransaction';
import SearchBox from './searchBox';

function TableTransaction({records}) {
  // the below usestate holds the records in a variabke alled stateRcords
  const [stateRecords, setStateRecords] = useState(records); 
  // the below usestate holds the search value
  const [searchValue, setSearch] = useState("");

  //  initiated an empty array
    const rows = [];
    // looped throu the stat  that held the records
      stateRecords.forEach((data, index) => {
        // if the search value is not in the description of the record, return
 
       if(data.description.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
        return;
       } 
      //   by default pushed the componet to the  top new array 
      rows.push( < TransactionRow 
          key={index}
            date={data.date} 
            description={data.description}
            category={data.category}
            amount={data.amount}
            />
      )
})
    return (<>
    {/* the search box and the add transaction component */}
      <SearchBox searchValue={searchValue} funcSetSearch={setSearch} />
      <AddTransaction funcSetData={setStateRecords} />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        </>
      );
}

export default TableTransaction;