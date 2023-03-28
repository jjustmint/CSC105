import { Card, CardMedia, CardContent, Typography } from "@mui/material";
function MediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F6157254766001%2F961ad642-68ec-4156-ab18-5fb26db7e85c%2Fa7fd44aa-762e-4be4-a99f-bdebcce91235%2F1280x720%2Fmatch%2Fimage.jpg"
        alt="404 not found"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kitty
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The cat is a domestic species of small carnivorous
          mammal. It is the only domesticated species in the family
          Felidae.
        </Typography>
      </CardContent>
    </Card>
  );
}
export default MediaCard;
