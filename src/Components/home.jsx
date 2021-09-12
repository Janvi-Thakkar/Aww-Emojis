import React, { useState } from 'react';
import PropTypes from 'prop-types';



function Home(props) {
    const emojis=['😁','😀',' 😃', '😄', '😁','😆','😅','😂','😍','😘','😙','🤣','😊',' 🥰', '😛', '😎','😋','😜','😏','😡','😩','😢'    ]
    const [count,setCount]=useState([{id:0,emoji:'😘'}]);

   const SetCount=(counts)=>{
        
    console.log(counts)
          setCount([{id:count.length,emoji:emojis[Math.floor(Math.random()*20)%21]}]) 
    }
    const number=count.map((counts)=>
    {
        return(<div className="emoji" key={counts.id}>{counts.emoji}</div>)
    }
   
   
    )
    return (
        <div className="outerDiv">
          <div className="randomEmoji">{number}</div>
          <button onClick={()=>SetCount(count+count)}>Test My Mood</button>
        </div>
    );
}

export default Home;