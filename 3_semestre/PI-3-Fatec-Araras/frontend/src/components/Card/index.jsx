import { Card as MUICard, CardMedia, CardContent, Button } from '@mui/material';
import { CardH } from './styles';

function Card ({ name, image, id, handleOpen }) {
  return(
    <MUICard title={name} sx={{ maxWidth: 345, border: '1px solid red' }}>
      <CardH>
        {name}
      </CardH>
      <CardMedia
        component="img"
        image={image}
        alt={name}
      />
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="outlined" color="error" type="submit" size="large" onClick={() => handleOpen(id)} sx={{ width: '75%', marginTop: 5, color: '#000', border: '1px solid #000', fontSize: '19.2px', lineHeight: '50px' }}>See More</Button>
      </CardContent>
    </MUICard>
  );
}

export default Card;
