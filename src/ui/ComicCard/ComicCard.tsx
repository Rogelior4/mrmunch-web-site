import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

interface ComicCardProps {
  title: string;
  image: string;
  description: string;
}

export const ComicCard = ({ title, image, description }: ComicCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "white",
        borderRadius: 4,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 0 20px rgba(251, 133, 0, 0.4)",
          border: "1px solid #fb8500",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#fb8500", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
