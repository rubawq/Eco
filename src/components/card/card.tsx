/** @jsxImportSource @emotion/react */
import { cardStyles } from "./card.style";
import type { CardType } from "./typeCom";
import { Link } from "react-router-dom";


const CardCom = ({ id,title, description, price, image , ...rest}: CardType) => {

return (
  <div {...rest}>
<Link to={`/product/${id}`}  css={cardStyles.link}>
    <div css={cardStyles.cardColumn}  >
      <img src={image} alt={title} css={cardStyles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <br/>
      <Link to="/cart">
      <button css={cardStyles.button}>Add to Cart</button>
      </Link>
    </div>
    </Link>
    </div>
  );
};

export default CardCom;

/*<Link to={`/product/${id}`}>
      <button css={cardStyles.button}>Add to Cart</button>
      </Link> */