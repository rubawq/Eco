/** @jsxImportSource @emotion/react */
import { cardStyles } from "./card.style";
import type { CardType } from "./typeCom";
import { Link } from "react-router-dom";


const CardCom = ({ id,title, description, price, image , ...rest}: CardType) => {

return (
  <div {...rest} css={cardStyles.cardColumn}>
<Link to={`/product/${id}`} css={cardStyles.link} >

  
      <img src={image} alt={title} css={cardStyles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      </Link>
       <div css={{marginTop:'1rem', alignItems:'10rem'}}>
      <Link to="/cart" >
      <button css={cardStyles.button} >Add to Cart</button>
      
    
    </Link>
    </div>
    </div>
  );
};

export default CardCom;

/*<Link to={`/product/${id}`}>
      <button css={cardStyles.button}>Add to Cart</button>
      </Link> */