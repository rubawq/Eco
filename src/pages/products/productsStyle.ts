import { css } from "@emotion/react";
export const ProductsStyle={
PageContainer:css({
    display:'flex',
    flexDirection:"column", 
    alignItems:"center",
    minHeight:"100vh",
    padding:"2rem",
  

}),

title:css ({
textAlign: "center",
}),
cardgrid:css({
display:"flex",

justifyContent:"center",
gap:"1.5rem",
width:"100%",
flexWrap:"wrap",

})
}