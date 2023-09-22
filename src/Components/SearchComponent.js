import React from 'react'

const SearchComponent = (props) => {
    const {setfilter} = props
  return (
    <div style={{display : 'flex', justifyContent : 'center'}} >
        <input className='searchBox' placeholder='    search by product name' onChange={(e) => {setfilter(e.target.value)}}/>
        </div>
  )
}

export default SearchComponent