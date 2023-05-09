import { useState } from "react"
import './style.css'
import lightbulb1 from "./assets/lampada-acesa.png"
import lightbulb2 from "./assets/lampada-apagada.png"




function App() {

 const[off, setAcesa] = useState(false);
 const handleClick = () => {setAcesa(!off);};
 
 return (

<>
<div>
<button onClick={handleClick}>{off ? 'OFF' : 'ON'}</button>
<img src={off ? lightbulb1 : lightbulb2}></img>
</div>

</>
 )

}





export default App
