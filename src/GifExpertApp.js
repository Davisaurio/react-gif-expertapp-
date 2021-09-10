import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  
    const [categories, setCategories]= useState(['goku']);
     
    
    // const handleAdd= () => {        
    //     setCategories(cate => [...cate, 'HunterXHunter']);
    //   }

    return (
           <div>
               <h2> GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
               <hr/>
                  
                <ol>
                {
                    categories.map(category=>(<GifGrid 
                        key= {category}
                        category={category}/>)
                        // return <li key= { category }> { category } </li>
                    )
                }
                </ol>          

                  
           </div>
    )
}




