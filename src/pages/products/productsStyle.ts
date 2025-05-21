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
 display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    width: "100%",
    padding: "2rem",
    justifyItems: "center",
    

}),
searchBar:css({
    padding: "0.5rem 1rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        width: "200px",
        margin: "0rem 0",
        marginRight: "1rem",
}),
filter:css({
   display: "flex",
  justifyContent: "left",
  alignItems: "center",
  gap: "1rem", 
  marginBottom: "1.5rem"}),
  
  selectDropdown: css({
  padding: "0.5rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
}),
}