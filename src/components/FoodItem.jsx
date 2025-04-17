export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt={food.title} />
      <h1>{food.title}</h1>
      <button>View Recipe</button>
      {/* <p>Ready in {food.readyInMinutes} minutes</p> */}
    </div>
  );
}
