import {useState} from "react";

function Counter(){
    console.log("render Counter");
const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        // setNumber(number+1);
        // setNumber(number+1); Important thing to note here is these all below setNumber will never work, as state is changing before this and react will
        // setNumber(number+1); render it, and these functions will never get a chance to execute, to overcome this we should tackle it like below.
        // setNumber(number+1);
        
        setNumber(number => number+1); // updater function, prefered way to use in react projects
        setNumber(number => number+1);
        setNumber(number => number+1);

        console.log(number);
    }

    return(
        <>
         <h1 style={{color:"white"}}>{number}</h1>
         <button onClick={handleClick}>Add</button>
        </>
       
    )
}

export default Counter;