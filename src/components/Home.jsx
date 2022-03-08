import React from 'react'
import {Button} from '@mui/material'
import "./Home.css"

const Home = () => {
  return (
    //   <div class="hello">
    //       <h3 >hello world</h3>
    //   </div>

    
    <div class="hello"> 

    <div className='card'>
        {/* <img src={image} alt={name}/> */}
        <article> BY image</article>
        <h3>test</h3>
        <p>desciption</p>
        <h3>hello</h3>
        <Button sx={{mt:'auto'}}>Delete</Button>
    </div>

    <div className='card'>
        {/* <img src={image} alt={name}/> */}
        <article> BY image</article>
        <h3>test</h3>
        <p>desciption</p>
        <h3>hello</h3>
        <Button sx={{mt:'auto'}}>Delete</Button>
    </div>

    
    </div>
  )
}

export default Home