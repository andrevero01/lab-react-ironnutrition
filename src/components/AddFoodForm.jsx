import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFood({ name, image, calories, servings });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input
          value={name}
          name="name"
          type="text"
          onChange={handleNameInput}
        />
        <label>Image</label>
        <Input
          value={image}
          name="image"
          type="text"
          onChange={handleImageInput}
        />
        <label>Calories</label>
        <Input
          value={calories}
          name="calories"
          type="text"
          onChange={handleCaloriesInput}
        />
        <label>Servings</label>
        <Input
          value={servings}
          name="servings"
          type="text"
          onChange={handleServingsInput}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
