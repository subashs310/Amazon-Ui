import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(datas => {
        console.log(datas);
        setData(datas);
      })
  }, []);

  console.log("idsdata", data.id);

  return (
    <>
      <div className="App">
        
          <h1>Hi, this is Subash</h1>
          <ul className='alldatas'>
            {data.map(alldata => (
              <li key={alldata.id}>
                  <h1>{alldata.title}</h1>
                <p>{alldata.body}</p>
              


              </li>
            ))}
          </ul>
                </div>
    </>
  );
}

export default App;
