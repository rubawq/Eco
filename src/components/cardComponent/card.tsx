/** @jsxImportSource @emotion/react */
import { cardStyles } from "./card.style";
import type { CardType } from "./typeCom";
import { Link } from "react-router-dom";

const CardCom = ({id, title, description, price, image }: CardType) => {
  return (
    <div css={cardStyles.card}>
      <img src={image} alt={title} css={cardStyles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <br/>
      <Link to={`/product/${id}`}>
      <button css={cardStyles.button}>Add to Cart</button>
      </Link>
    </div>
  );
};

export default CardCom;
