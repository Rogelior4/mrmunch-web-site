import { Button, type ButtonProps } from "@mui/material";

interface NeonButtonProps extends ButtonProps {
  active?: boolean;
}

export const NeonButton = ({
  active,
  children,
  sx,
  ...props
}: NeonButtonProps) => {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={{
        border: "2px solid",
        borderColor: "#ff006e",
        borderRadius: 20,
        whiteSpace: "nowrap",
        color: active ? "#fff" : "#ff006e",
        backgroundColor: active ? "#ff006e" : "transparent",
        boxShadow: active ? "0 0 10px #ff006e" : "none",
        transition: "all 0.3s ease",

        "&:hover": {
          border: "2px solid",
          borderColor: "#ff006e",
          backgroundColor: "#ff006e",
          boxShadow: "0 0 15px #ff006e",
          color: "#fff",
        },

        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
