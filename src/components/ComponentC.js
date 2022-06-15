import React,{useContext} from 'react'
import  {UserContext,ChannelContext}  from "../App";
function ComponentC() {
    const user =useContext(UserContext)
    const channel =useContext(ChannelContext)
  return (
    <div>
         
      <h1>ComponentC   {user}---{channel}</h1>
    </div>
  )
}

export default ComponentC
