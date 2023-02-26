import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '0 auto',
  minHeight: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  borderRadius: '12px',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'
  }
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 150
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5E9CF',
  minHeight: 50,
  borderRadius: '0 0 12px 12px'
  
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '12px 12px 0 0'
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  margin: '1rem 0',
  color: theme.palette.text.primary,
  textAlign: 'center'
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  textAlign: 'center'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'capitalize',
  color: theme.palette.primary.contrastText,
  backgroundColor: '#E96479',
  '&:hover': {
    backgroundColor: '#7DB9B6'
  }
}));

const ContentCard = ({ category, description, src }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt={category}
        image={src}
      />
      <StyledCardContent>
        <StyledTitle variant="h5" component="div">
          {category}
        </StyledTitle>
        <StyledDescription variant="body2" color="text.secondary">
          {description}
        </StyledDescription>
      </StyledCardContent>
      <StyledCardActions>
        <StyledButton size="small" variant="contained">
          Events
        </StyledButton>
      </StyledCardActions>
    </StyledCard>
  );
}

export default ContentCard;
