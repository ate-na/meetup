import styless from "./card.module.css";
const Card = (props) => {
  return <div className={styless.card}>{props.children}</div>;
};
export default Card;
