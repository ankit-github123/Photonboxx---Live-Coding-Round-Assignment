import "./styles.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  useEffect(()=> {
    const APICall =async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (response)
        setData(response?.data);
        console.log(data, 'response');
        
    }
    
    APICall();
  },[])
  const increment = () => {
    setCounter(counter+1);
  }
  const decrement = () => {
    if (counter!==0)
      setCounter(counter-1);
  }
//   id: 1
// name: "Leanne Graham"
// username: "Bret"
// email: "Sincere@april.biz"
// address: Object
// phone: "1-770-736-8031 x56442"
// website: "hildegard.org"
// company: Object
  //name , email , phone
  return (
    <div className="App">
      {/* <h1>{counter}</h1>
      <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div> */}
        {
          data && <table>
            {data.map((item,index) => {
              return <tr key={index}><td>{item.name}</td> <td>{item.email}</td><td>{item.phone}</td></tr>
            })}
            </table>
        }
    </div>
  );
}
