import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvaliableMeals.module.css"
import { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvaliableMeals = () => {
  
  const {isLoading, error, sendRequest} = useHttp();

  const [mealsList, setMealsList] = useState([]);

  
  useEffect(() => {
    const loadMeals = (data) => {
      const meals = [];
      for (const key in data) {
        meals.push(
            {
                id: key,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price,
            }
        )
      }
      setMealsList(meals);
    };
    sendRequest(loadMeals, {link :"https://react-guide-8c237-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"});
  }, [sendRequest]);

  return (
      <section className={classes.meals}>
          <ul className={classes.ul}>
              {error ? <p>Something went wrong!</p>
              : isLoading ? <p>LOADING!</p>
              : mealsList.map(meal => {
                return (
                    <Card>
                        <MealItem id={meal.id} key={meal.id} price={meal.price} description={meal.description} name={meal.name}/>
                    </Card>
                );
              })}
          </ul>
      </section>
  )
}

export default AvaliableMeals;