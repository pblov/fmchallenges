import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from './Image';
import { Details } from './Details';
import { Skills } from './Skills';


const useStyles = makeStyles( them => {

    return{

        cardGrid:{
            
            padding:'15px',
            marginTop:'50px',
            backgroundColor:'#fff',
            boxShadow: '0px 6px 19px -8px hsl(180, 29%, 50%)',
            borderRadius: '5px',
            [them.breakpoints.down('sm')]:{
                padding:'20px'
             }
        },

        featuredActive:{
            borderLeft:'4px solid hsl(180, 29%, 50%)'
        }


    
    }

});


export const JobCard = ({job,handleClick}) => {

 
    const {cardGrid,featuredActive} = useStyles();
    const {company,logo,newFeat,role,level,tools,featured,position,location,contract,postedAt,languages} = job;



 
    return (
      
           
 
  
                <Grid  
                
                     className= {(featured) 
                                    ? `${cardGrid} ${featuredActive}` 
                                    : `${cardGrid}`} 
                    container 
                    alignItems="center" 
                    spacing={3} >

                                
                            
                            

                            <Image  
                                    path={logo} 
                                    desc={company}/>
                            <Details 
                                    company={company} 
                                    newFeat={newFeat} 
                                    featured={featured}
                                    position={position}
                                    dateAt={postedAt}
                                    contract={contract}
                                    location={location}
                            />

                            <Skills 
                                    lang={languages} 
                                    tools={tools} 
                                    role={role} 
                                    level={level} 
                                    handleClick={handleClick}
                            /> 

                </Grid>
       
            
            
           

      
    )
}
