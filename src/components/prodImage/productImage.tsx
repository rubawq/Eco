/** @jsxImportSource @emotion/react */
import { ProductImageStyle } from "./productImageStyle";
import type { ProductImageProps } from "./productImageType";





const ProductImage =({src ,alt ,variant}: ProductImageProps)=>{
    return(

           <img 
           src={src}
            alt={alt} 
           css={variant === "banner"? ProductImageStyle.banner: ProductImageStyle.image}/> 
        
    );

};
export default ProductImage;