
import { css } from "@emotion/react";

export const cardStyles = {
    link:css({
 textDecoration:"none",
    color:'inherit'
  }),
   cardColumn: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
     alignItems: "center",
    border: "1px solid #ddd",
   padding: "20px",
    borderRadius: 8,
    
    textAlign: "center" as const,
    backgroundColor: "#fff",
     boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
     margin: "4px",
   }),



  topContent: css({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }),

  bottomButton: css({
    marginTop: "1rem",
  }),

  button: css({
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#333",
    },
  }),

  image: css({
    maxWidth: "100%",
    height: "180px",
    objectFit: "contain",
    marginBottom: "1rem",
  }),
};

