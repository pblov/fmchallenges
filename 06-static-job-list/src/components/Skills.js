import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles( theme => {

    return{
        skill:{

            cursor:'pointer',
            color: 'hsl(180, 29%, 50%)',
            fontWeight:'700',
            fontSize:'14px',
            borderRadius:'3px',
            backgroundColor: 'hsl(180, 31%, 95%)',
            padding:'8px',
            '&:hover':{
                transition:'.3s all ease-in-out',
                backgroundColor:'hsl(180, 29%, 50%)',
                color:'hsl(180, 29%, 100%)'
            }
          
        },
    
        layout:{
            
            display:'flex',
            gap:'20px',
            justifyContent:'flex-end',
            [theme.breakpoints.down('sm')]:{
               justifyContent:'flex-start',
               flexWrap:'wrap'
               
            }
    
        }
    }
 

});

export const Skills = ({lang,tools,role,level,handleClick}) => {


    const {skill,layout} = useStyles();
    const langTools = [role,level,...lang, ...tools];

    

    return (

            <Grid item className={layout} md={8} xs={12} >
                {
                    (langTools) 

                        ?  langTools.map((lang,i) => 
                                
                                <span  onClick={ () => handleClick(lang) } className={skill} key={i}>
                                     {lang}
                                </span>
                            )

                        :  ''
                                
                }
            </Grid>
    )
}
