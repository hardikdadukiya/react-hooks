import React,{useContext} from 'react'
import { UserContext,ChannelContext } from "../App";

function ComponentA() {
    const user =useContext(UserContext)
    const channel =useContext(ChannelContext)
  return (
    <div>
      <h1>ComponentA  {user}---{channel}</h1>
    </div>
  )
}

export default ComponentA
