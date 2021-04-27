import { BiCheck } from "react-icons/bi";
const ingredient = (props) => {
  return (
    <li className="recipe__ingredient">
      <BiCheck className="recipe__icon" />
      <div className="recipe__quantity">{props.quantity}</div>
      <div className="recipe__description">
        <span className="recipe__unit">{props.unit}</span>
        {props.description}
      </div>
    </li>
  );
};
export default ingredient;
