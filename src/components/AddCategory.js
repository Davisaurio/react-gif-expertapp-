import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue]= useState('') ;
    const handleImputChange =(e)=>{
       setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length>2)
        {
            setCategories(cate => [ inputValue,...cate]);
            setInputValue('');
             //console.log('submit hecho');
        }
       
    } 
    return (
        <form onSubmit ={ handleSubmit}>
         NUEVA CATEGORIA 
         <input 
            type = "Text" 
            value = {inputValue}
            onChange={handleImputChange} 
          />
        </form>
    )
}

AddCategory.propTypes   = {
    setCategories: PropTypes.func.isRequired,
    
}