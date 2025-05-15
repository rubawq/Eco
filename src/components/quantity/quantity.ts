import { css } from "@emotion/react";

export const QuantityStyle = {
  container: css({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "4px 8px",
    backgroundColor: "#f9f9f9",
    width: "fit-content",
  }),

  button: css({
    border: "none",
    backgroundColor: "#f0f0f0",
    padding: "6px 12px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "4px",
    color: "#333",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  }),

  value: css({
    width: "30px",
    textAlign: "center",
    fontSize: "16px",
    color: "#333",
  }),
};
