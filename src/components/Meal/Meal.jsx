import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css'
const getDataLocalstrage=()=>{
    setAllMeals(localStorage.getItem('meals'))
}

const Meal = ({searchTerm}) => {
    console.log(searchTerm)
    const [meals,setMeals]=useState([])
    const [sideMeal,setSideMeal]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchTerm])

    const handelFoodCart=(meal)=>{
        const newSideMeal=[...sideMeal,meal]
        setSideMeal(newSideMeal)

        console.log(meal)
        // setSideMeal(meal)
    }

    return (
       <div className=' all-meal-container '>
         <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                meals.map(meal=><SingleMeal handelFoodCart={handelFoodCart} meal={meal}  key={meal.idMeal}></SingleMeal>)
            }
        </div>
        <div className=' bg-danger text-center wonclass'>
            <h1>Order Summery</h1>
            <h6>select item : {sideMeal.length}</h6>
           



        </div>
       </div>
    );
};

export default Meal;