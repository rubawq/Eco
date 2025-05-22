import { css } from "@emotion/react";

export const bannerTextStyles = {
  container: css({
    position: "absolute",
    top: "60%",
    left: "10%",
    color: "#fff",
    zIndex: 2,
    maxWidth: "800px",
  }),
  heading: css({
    fontSize: "90px",
    width:"1200px",
    height:"97px",
    fontWeight:3 ,
    fontFamily: "Cormorant Garamond",
    margin: 0,
    lineHeight: 1.2,
    color:"#FFFFFF",
  }),
  paragraph: css({
    fontSize: "30px",
    margin: "12px 0",
    lineHeight: 1.5,
  }),
  button: css({
    padding: "16px 20px",
    border: "1px solid white",
    background: "transparent",
    color: "#fff",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "14px",
  }),
};
