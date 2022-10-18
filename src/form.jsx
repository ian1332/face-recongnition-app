import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";


// const Form = () => {
//     const [value, setValue] = useState("");

//     return(
//         <form>
//             <input type="text" value={value} placeholder="Your name" onChange = {(e) => setValue(e.target.value.toUpperCase())} 
//             />
//             <p>{value}</p>
//         </form>
//     )
// }

const Button = () => {
 
    useEffect(() =>(
        document.title = 'You clicked ${count} times'
    ))


}

export default Button;