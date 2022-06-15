import React from "react";
import './App.css';
import  ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
export  const UserContext = React.createContext()
export  const ChannelContext = React.createContext()
function App() {
  return (
    <>
    <div className="App">
      <UserContext.Provider value={'Hardik'}>
      <ChannelContext.Provider value={'Hardik2'}>
    <ComponentA />
    <ComponentB />
    <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
    </>
  );
}

export default  App;
