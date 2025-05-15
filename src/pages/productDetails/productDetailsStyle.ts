import { css } from "@emotion/react";

export const ProductDetailsStyle = {
  container: css({
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    justifyContent:"center",
    maxWidth:"1000px",
    flexWrap: "wrap",
    padding: "2rem",
    margin: "0 auto",
    alignItems: "center",
    width:"100%",
  }),

  imageSection: css({
    flex: "1",
    minWidth: "300px",
  }),

 
  // img: css({
  //   width: "100%",
  //   borderRadius: "12px",
  //   height: "auto", 
  // }),

  detailsSection: css({
    flexDirection: "column",
    flex: "1",
    minWidth: "300px",
  }),

  title: css({
    marginBottom: "0.5rem",
  }),

  description: css({
    marginBottom: "1rem",
  }),

  price: css({
    fontSize: "1.5rem",
    display: "block",
    marginBottom: "1rem",
  }),

  label: css({
    display: "block",
    margin: "1rem 0 0.5rem",
  }),

  button: css({
    backgroundColor: "black",
    color: "white",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  }),

  extraInfo: css({
    marginTop: "1rem",
    fontSize: "0.9rem",
  }),

  hhh: css({
    flexDirection: "row",
    fontSize:"20px"
   
  }),
};
