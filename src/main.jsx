import { useState } from "react"
import Recipe from './recipe.jsx'
import React from "react";
import { getMistral } from './huggingface.js'
import { useRef } from "react";


export default function Main(){
    const [ingredient,setIngredients]=useState([])

    const items=ingredient.map((item,index) => (<li key={index}>{item}</li>
    ))
    
    const [recipeValue,setRecipe]=useState("")

    const setScroll=useRef(null)
   

    React.useEffect(() => {
        if(recipeValue !=='' && setScroll !== null){
            setScroll.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipeValue])

    function submit(event){
        event.preventDefault()
        const getform =new FormData(event.currentTarget)
        const ingredientlist = getform.get('add-item')
        setIngredients(pre => [...pre,ingredientlist])
  
        event.currentTarget.reset()
    }
    
    async function makeRecipe(){
        const genertedRecipe = await getMistral(ingredient)
        setRecipe(genertedRecipe)
    
        
    }
    

    return (
        <div className="form-input">
            <form onSubmit={submit}>
                <input type="text" name="add-item" id="add-item" placeholder="Enter ingredient" />
                <button type="submit">Add</button>
            </form>
            { items.length > 0 && <div>
                <h2>Ingredient list:</h2>
                {items}
            </div>}
            { items.length > 3 && 
            <section>
                <div className="get-recipe-container">
                    <div>
                        <h3><b>From your kitchen to your plate</b><br />Generate a recipe now!</h3>
                    </div>
                    <button onClick={() => {makeRecipe(); document.getElementById('loader').style.display = 'block';}}>Generate</button>
                </div>
            </section> }
            <Recipe ref={setScroll} recipes={recipeValue} />
        </div>
    )

}