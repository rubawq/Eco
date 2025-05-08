/** @jsxImportSource @emotion/react */
import { cardStyles } from "./card.style";
import type { CardType } from "./typeCom";

const CardCom = ({ title, description, price, image }: CardType) => {
  return (
    <div css={cardStyles.card}>
      <img src={image} alt={title} css={cardStyles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <br/>
      <button css={cardStyles.button}>Add to Cart</button>
    </div>
  );
};

export default CardCom;
