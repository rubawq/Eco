import { css } from "@emotion/react";

export const navbarStyles = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    height: "83px",
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    fontFamily: "'Playfair Display', serif",
    fontSize: "14px",
    position: "relative",
    zIndex: 10,
  }),
  left: css({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color:"#000000",
    fontSize:"20px",
    a: {
      textDecoration: "none",
      color: "#82746C",
      fontWeight: 500,
    },
  }),
  center: css({
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#000",
  }),
  right: css({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "20px",
    color: "#333",
  }),
  searchInput:css({
    borderRadius:"2.5px",
    border:"0.5px solid grey ",
    padding:"2px",
    marginTop:"4px",
  }),
};
