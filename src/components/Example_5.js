import {useState} from "react";


function Example_5({onSubmit}){
    
    const [term,setTerm]=useState('');

    const handleSubmit=(event)=>{
                event.preventDefault();
                onSubmit('cars');
    }

    const handleChange=(event)=>{
              setTerm(event.target.value);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}/> 
                <h3>Your Test is</h3>
                <p>{term}</p>
            </form>
        </div>
    );
}

export default Example_5;