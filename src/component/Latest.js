import React from 'react';
import {useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid, Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';





const useStyles = makeStyles({
  root: {
    root: {
      maxWidth: 400,
     
    },
    media: {
      height: 140,
    },
  },
});

 const  Latest = ({items}) =>{
    

  const classes = useStyles();


console.log(items);

      useEffect(()=>{
        //console.log('fetch ran');
        //getData();
        console.log('effect raN');
        //fetchBlogs()      
    
    },[]);
    const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Grid container >


      {
        
        items.map((i)=>(

          
          <Grid  md={3}  item key={i._id}>
          <Link to={`/book/${i._id}`} style={{textDecoration:'none'}} id="RouterNavLink">
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
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Link>
        </Grid>
       

        ))
        

           
      
      }

    
      </Grid>
     
    </div>
  );
}
export default  Latest