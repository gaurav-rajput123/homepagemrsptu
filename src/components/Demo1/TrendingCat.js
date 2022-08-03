import React from 'react';
import { Avatar, Grid, Typography,Box ,Card,Button} from '@mui/material';
import download1 from '../Neha/download1.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import T1 from '../Neha/T1.png';
import jobs from '../Neha/jobs.png';
import create from '../Neha/create.png';
import keewe from '../Neha/keewe.png';
import learn from '../Neha/learn.png';
import virtual from '../Neha/virtual.png';


const TrendingCat = () => {
  const arr =[
    {
      name : "Research",
      p : " Enrolled learners of MRSPTU online courses will have access to funded research requirements of various partnered organizations of this platform.",
      img : T1
    },
    {
      name : "Jobs For You",
      p : "Learners will be provided with unique job portal where they will have access to more than 100+ Companies and can apply for jobs easily while continuing with their Skills- based courses.",
      img : jobs
    },
    {
      name : "Create & Earn",
      p : "Inviting learners to share their knowledge and experiences by creating online courses and getting an opportunity to earn money and rewards.",
      img : create
    },
    {
      name : "Keewe Networking Media",
      p : "A unique networking platform and marketplace, where participants can display, exhibit, and sell their creative works.",
      img : keewe
    },
    {
      name : "Learn",
      p : "Skills - Reskill - Upskill yourself with our simple and easy to use platform and gain hands on practice in new age courses.",
      img : learn
    },
    {
      name : "Virtual Incubation",
      p : "If you are with a mind full of creative ideas and business-oriented skills, or on your way to creating an innovative products, go ahead and fulfill your dreams.",
      img : virtual
    }
    
  

  ];
  return (

  <Grid container>
   

   <Carousel variant="dark" indicators={false} style={{width:'100%'}}>
 {arr.map((item, index) => {
                return (
                  <Carousel.Item key={item.name}  interval={1500}>
    
         
            <Card sx={{border:'1px solid green',width:'80%',marginLeft:'10%',marginTop:'7%',display:'flex'}}>
              <Grid item container xs={12} lg={12} justifyContent={"center"} display={"flex"}>
            <Grid item xs={0.5}></Grid>
              <Grid item xs={12} lg={6.5} sx={{padding:'2%'}}>

      
      
       
         <Typography sx={{color: '#000000',fontSize: '40px',fontFamily:'Poppins' ,width:'100%',fontWeight:'bold'}}>
           {item.name}
         </Typography>
         
      
      
     

      <Typography sx={{color: '#262020c9',fontSize: '20px',fontFamily:'Poppins',marginTop:'2%'}} >
       {item.p}
      </Typography>
      <Button variant="contained" sx={{backgroundColor:'#06213F',textTransform:'capitalize',marginTop:'3%'}}>Learn More</Button>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={12} lg={3.5} >
               <img src={item.img} alt="" style={{height:'100%',width:'100%'}}/>
              </Grid>
              <Grid item xs={0.5}></Grid></Grid>
            </Card>
           
       

    
    
    </Carousel.Item>);
  })}
</Carousel>
</Grid>
       
  

    
  )
}

export default TrendingCat