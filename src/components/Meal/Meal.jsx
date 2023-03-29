import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css'
const getDataLocalstrage=()=>{
    setAllMeals(localStorage.getItem('meals'))
}

const Meal = () => {
    const [meals,setMeals]=useState([])
    const [allMeals,setAllMeals]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'fish'}`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])

    const handelFoodCart=(allMeals)=>{

        console.log(allMeals)
        localStorage.setItem('meals', JSON.stringify(allMeals.strMeal))
        setAllMeals(allMeals)
    }

    return (
       <div className=' all-meal-container '>
         <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                meals.map(meal=><SingleMeal handelFoodCart={handelFoodCart} meal={meal} key={meal.idMeal}></SingleMeal>)
            }
        </div>
        <div className=' bg-danger text-center'>
            <h1>Order Summery:{allMeals.length}</h1>
            <h6>Name : {allMeals.strMeal}</h6>



        </div>
       </div>
    );
};

export default Meal;