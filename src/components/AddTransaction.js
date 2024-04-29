import React from 'react';
import { useState } from 'react';

function AddTransaction({funcSetData }) {

    const [indate, setDate] = useState("")
    const [indescription, setDescription] = useState("")
    const [incategory, setCategory] = useState("")
    const [inamount, setAmount] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    let newTransaction = {
      date: indate,
      description: indescription,
      category: incategory,
      amount: parseFloat(inamount),
    }
    funcSetData(InstateRecords => [...InstateRecords, newTransaction])
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <div className='Transaction'>
        <form onSubmit={handleSubmit}>
          <div>
          <input type="date" required value={indate}  name='date'   onChange={(e) => setDate(e.target.value)} />

          <input type="text" 
          required
          placeholder='Description'   
          name='Description'
          value={indescription} 
          onChange={(e) => setDescription(e.target.value)}
          />

          <input type="text" required placeholder='Category'    name='category'  onChange={(e) => setCategory(e.target.value)} value={incategory}/>
          <input type="number" required placeholder='Amount'     name='amount' onChange={(e) => setAmount(e.target.value)}  value={inamount}/>
          </div>
        
            <button>Add Transaction</button>
        </form>
    </div>
  );
}

export default AddTransaction;