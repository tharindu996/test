import React,{ useState, useEffect}from 'react'
import {Card,Grid, Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {deleteTask,getBook,getBooks } from '../../api';

const Admin = ({items,hadleDelete}) => {

  const [list,setList] = useState([]);

  
  const hDlt = async(id) =>{

    console.log(id);
    await deleteTask(id);
    const newList= await getBooks();
    console.log(newList);
    setList(newList);

  }

  useEffect(() => {
    setList(items)    
  }, [])

  


    return (
        <div style={{padding:'40px'}}>
            <h1 className="center-text">Admin</h1>
            <Grid container >


{
  
  list.map((i)=>(

    
    <Grid  md={3}  item key={i._id}>
   
  <Card style={{marginRight:20,marginBottom:20,padding:10}}>
<CardActionArea>

 <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="140"
    image={`/uploads/${i.image}`}
    title="Contemplative Reptile"
  />
 
 
  <CardContent>
    <Typography gutterBottom  style={{color:'#359cf1'}} variant="h5" component="h2">
      {i.title}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
   {i.body}
    </Typography>
   
  </CardContent>
</CardActionArea>
<CardActions>
<Link to={`/edit/${i._id}`} style={{ textDecoration: 'none' }}>
<Button style={{}} size="small" color="primary">
    Edit
  </Button>
</Link>
 
  <Button size="small" color="primary" onClick={()=>hDlt(i._id)} >
   Delete
  </Button>
</CardActions>
</Card>

  </Grid>
 

  ))
  

     

}


</Grid>
        </div>
    )
}

export default Admin
