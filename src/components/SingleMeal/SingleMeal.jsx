import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleMeal = (props) => {
  const { idMeal,strMealThumb,strMeal,strInstructions } = props.meal;
  const handelFoodCart=props.handelFoodCart
  // console.log(props.handelFoodCart);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
           {strInstructions.slice(0,100)}......
          </Card.Text>
          <Button onClick={()=>handelFoodCart(props.meal)} variant="primary" className="w-100">Addt To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMeal;
