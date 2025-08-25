
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';


export default function CardInfo(props) {
  const navigate= useNavigate()
  return (
    <Card sx={{ maxWidth: 145, margin:5 }} >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <img src={props.img} alt="" className='flex '/>
      <h1>{props.title}</h1>
      <button className='border-0 p-2 bg-blue-600 text-white m-2 cursor-pointer'
      onClick={(e)=> navigate(`/edit?url=${props.img}`)}>Edit</button>
      
      
    </Card>
  );
}

//Comment for Git