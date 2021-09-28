
import React ,{useState, useEffect, } from 'react'
import download from 'downloadjs';
import { useForm } from 'react-hook-form'
import {useHistory , useRouteMatch,useParams, Link} from 'react-router-dom'
import { getDetail } from './api'
import Details from './Details'
import ImgMediaCard from './image'
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import axios from 'axios'
import {Card} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {deletePost} from './api'

const BookDetails = ({latest}) => {
     

    const mayLike = latest.slice(-3)
    console.log('new');
    console.log(mayLike);
    const {id} = useParams();

    const [details,setDetails]= useState({})
    const match = useRouteMatch();
    console.log(details);
    const [errorMsg, setErrorMsg] = useState('');

    const deletePost=(id)=>{
      console.log(id);
      deletePost(id);
    }

    useEffect(() => {

        const fetchBook = async ()=>{
            const book =  await getDetail(match.params.id)
            setDetails(book)

            console.log();
           
        }

        fetchBook();
        window.scrollTo(0, 0);
       
      }, [])

      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

 
      const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
      };
      const classes = useStyles();
      const [value, setValue] = React.useState(2);
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
      }


      const downloadFile = async (id, path, mimetype) => {
        try {
          const result = await axios.get(`http://localhost:4011/download/${id}`, {
            responseType: 'blob'
          });
          const split = path.split('/');
          console.log(split);
          const filename = split[split.length - 1];
          
          setErrorMsg('');
          console.log('result'+ result.data);
          console.log('filaname'+ filename);

          return download(result.data, filename, 'pdf');
        } catch (error) {
          if (error.response && error.response.status === 400) {
            setErrorMsg('Error while downloading file. Try again later');
          }
        }
      };
      
   
    return (  
       

        <div className="content">

          {
              !details ? (
                  <p>no</p>
              ):( 

                  <div>
                  <div className={classes.root}>
      <Grid container spacing={3} >
       
        <Grid item xs={12} sm={6}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          style={{maxHeight:500}}
          image={`/uploads/${details.image}`}
          title={details.image}
        />
        </Grid>


        <Grid item xs={12} sm={6}>
         
         <div style={{marginLeft:'20px'}}>
         <h1 style={{color:'#566573',fontSize:45 }}> {details.title} </h1>
          <h4>By <span style={{color:'#A569BD',borderRight:'5px'}} >
          {details.author}   
          
          </span>
        
          <Rating style={{paddingTop:'5px', marginLeft:12}}
            name="customized-empty"
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          
          </h4>

          <p style={{color:'#566573',marginTop:'20px'}}> {details.body}</p>
         </div>
         

         <span style={{display:'flex'}}> 
            <Grid item xs={12} sm={3}>
               
            <Button  onClick={()=>downloadFile(id, `/uploads/${details.pic}`, 'image/gif')} style={{marginTop:50,backgroundColor:'#E8DAEF',marginLeft:12}} 
            startIcon={<CloudDownloadIcon />}>Download</Button>
            
        

            </Grid>

            
        </span>
        
          
        </Grid>

        
        
      </Grid>
    </div>
                  </div>
                
                 
               )
          }

          <p className="content" style={{fontSize:'2vw',fontWeight:'bolder',color:'#359cf1'}}>
            Latest Posts
          </p>


          <Grid container style={{marginTop:'1vw'}}>
          {
           
            mayLike.map((i)=>(
             
             <Grid  md={4}  item key={i._id}>
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
            
           
          }</Grid>

          
         


        </div>
    );
}
 
export default BookDetails;