import { css } from '@emotion/react'

export const cardStyles = {
  link:css({
 textDecoration:"none",
    color:'inherit'
  }),
  cardColumn: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: 8,
    
    textAlign: "center" as const,
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    margin: "4px",
  }),
  
  image:css ( {
    width: "200px",
    height: "250px",
    borderRadius: 4,
    objectFit:'contain'
  }),
  button:css ({
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  }),
};
