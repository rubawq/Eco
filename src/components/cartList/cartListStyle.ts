import { css } from '@emotion/react'

export const CartListStyle={

    cardRow: css({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "flex-start",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: 8,
        width: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        margin: "4px",
        height:"auto",
      }),
      image:css ( {
        width: "200px",
        height: "250px",
        borderRadius: 4,
        objectFit:'contain'
      }),
      title: css({
        displayDirection:"column",
        
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
      cancel:css ({
        border:"none",
        background:"none",
        marginLeft:"auto",
        
      })

}