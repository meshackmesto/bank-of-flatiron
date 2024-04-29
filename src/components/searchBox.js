import React from 'react'
function SearchBox({searchValue, funcSetSearch}) {
    //  funcSetSearch is a passed functioon to update the usestae of the search value
    return (<>
        <input 
            type="text" 
            className="SearchInput"  
            placeholder="Search Recents Transactions.."
            value={searchValue}
            onChange={e =>  funcSetSearch(e.target.value)}
        />
    </>
 )
}

export default SearchBox;