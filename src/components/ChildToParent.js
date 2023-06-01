import { useState } from "react"

function Counter({ getCounter }) {
    const [count, setCount] = useState(null);
  
    const handler = (e) => {
      const {value} = e.target
      setCount(value);
      getCounter(value);
    };
  
    return (
      <div>
        <input placeholder="color" value={count} onChange={handler} />
      </div>
    );
  }

export default function ChildToParent() {
    const [counter, setCounter] = useState(null)
    const getCounter = (counter) => {
      setCounter(counter)
    }
    
    return (
      <div>
        <div style={{width: 100, height: 100, background: `${counter}`}}></div>
        <Counter getCounter={getCounter} />
      </div>
      
      
    )
  }