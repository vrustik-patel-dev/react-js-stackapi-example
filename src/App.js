import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import axios from 'axios';

import SearchList from './containers/SearchList';
import './App.css';
 
const App = () => {

  const [query, setQuery] = useState('');
  const [tags, setTags] = useState('');
  const [fetchedData, setFData] = useState([])

  const fetchData = () => {
    axios.get('https://api.stackexchange.com/2.2/search/advanced',{
      params:{
        site:'stackoverflow',
        q: query,
        tagged: tags,
      }
    })
    .then((result) => {
      setFData(result.data.items)
    })
    .catch((error)=>{console.log(error)})
  }

  return <>
  <div className="inputContainer">
    <p className="title">StackOverflow Query Interface</p>

    <input 
      placeholder="Enter topic That you want to Search" 
      value={query} 
      onChange={e=>setQuery(e.target.value)}
    />

    <div>
      <input 
        placeholder="Enter multiple Search tags e.g. react; redux, etc."
        value={tags}
        onChange={e=>setTags(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={fetchData}>Search</Button>
    </div>
    </div>

    <div className="resultData">
      {fetchedData.map((data)=><a href={data.link} target='_blank'><SearchList key={data.question_id} values={data}/></a>)}      
    </div>
  </>;
}

export default App;
