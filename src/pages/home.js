import React from 'react'
import axios from 'axios';
import SearchComponent from '../Components/SearchComponent';
import CardComponent from '../Components/CardComponent';
import { useState,useEffect } from 'react';
import loading from './loading.gif'
const Home = () => {
    const [data,setData] = useState([]);
    const [filter,setfilter] = useState('');
    const [filteredItems , setFilteredItems] = useState([]);
    const[Loading, setloading] = useState(false);
  
    const getData = async() => {
      try{
        setloading(true);
      const response = await axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=20')
      setData(response.data)
      setloading(false);
      }catch(err){
        console.log(err)
      }
    }
  
    const searchItems = () => {
      setFilteredItems(data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())))
    }
  
    useEffect(() => {
      searchItems();
    },[filter])
  
    useEffect(() => {
      getData();
    },[])
  return (
    <div >
        <SearchComponent className = "searchBox" setfilter = {setfilter}/>
      {Loading === true ? <div style={{display: 'flex' , alignItems : 'center' , justifyContent : 'center'}}><img style={{height: "70px", width: "70px"}}  src={loading} alt='loading'/>
      </div> : <div className="row row-cols-1 row-cols-md-4 g-4">
        {(filteredItems.length !== 0 ? filteredItems : data).map((item,idx) => (
          <CardComponent key = {idx} item = {item}/>
        ))}
        </div>}
    </div>
  )
}

export default Home