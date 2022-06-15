import React,{useState,useMemo} from "react";
import './App.css';

// import  ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// export  const UserContext = React.createContext()
// export  const ChannelContext = React.createContext()
function App() {

  const[counterOne, setCounterOne] = useState(0);
  const[counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () =>{
    setCounterOne(counterOne + 1);
  }
  const incrementTwo = () =>{
    setCounterTwo(counterTwo + 1);
  }

  
  const isEven = useMemo(() =>{
    let i=0
    while (i<20000000) {        // it will not effect our code but it will slow the rendering element. even after we click on CounterTwo 
      return counterOne % 2 == 0;
    }
  },[counterOne]) //C

  return (
    <>
    <div className="App">
      {/* <UserContext.Provider value={'Hardik'}>
      <ChannelContext.Provider value={'Hardik2'}>
    <ComponentA />
    <ComponentB />
    <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider> */}
  <div>
    <button onClick={incrementOne}>
      count one - {counterOne}
    </button>
  </div>
  <span>{isEven ? 'even':'odd'}</span>
  <div>
    <button onClick={incrementTwo}>
      count two - {counterTwo}
    </button>
  </div>
    </div>
    </>
  );
}

export default  App;
