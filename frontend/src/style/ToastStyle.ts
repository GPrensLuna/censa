import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
    successToast: {
        backgroundColor: "#4caf50",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        padding: "16px",
    },
    loadingToast: {
        backgroundColor: "#ff9800",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        padding: "16px",
    },
    errorToast: {
        backgroundColor: "#f44336",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        padding: "16px",
    },
};
