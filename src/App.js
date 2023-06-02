import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };
  return (
    <div className="App">
      <Divider>Food List</Divider>
      <div className="food-container">
        {foodList.map((food) => (
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          </Row>
        ))}
      </div>
      <AddFoodForm addFood={addFood} />
    </div>
  );
}

export default App;
