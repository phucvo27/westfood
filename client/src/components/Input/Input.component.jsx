import React from 'react';
import { Input } from './Input.styled';

const InputComponent = ({type , placeholder})=>{

    return (
        <div className="form__group">
            <Input 
                type= {type} 
                placeholder= {placeholder}
                />
        </div>
    )
}

export default InputComponent;