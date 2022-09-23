import React from "react"

const Button = (props) =>{
    const handleSubmit = () =>{
        props.handleSubmitFromApp();
    }

    return(
        <div>
            
                <button type="button" onClick={handleSubmit}>
                    Find a Random Dog
                </button>

        </div>
        
    )
}

export default Button;