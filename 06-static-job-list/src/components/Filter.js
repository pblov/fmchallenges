import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => {

    return {

        gridTag:{
            display:'flex',
            alignItems:'center',
        },

        dispTag:{
            backgroundColor:'hsl(180, 31%, 95%)',
            color:'hsl(180, 29%, 50%)',
            fontWeight:'700',
            padding:'8px',
            fontSize:'14px',   
            borderTopLeftRadius:'5px',
            borderBottomLeftRadius:'5px'
        },

        dispX:{
            cursor:'pointer',
            color:'hsl(180, 29%, 100%);',
            backgroundColor:'hsl(180, 29%, 50%)',
            fontWeight:'700',
            fontSize:'14px',
            borderTopRightRadius:'5px',
            borderBottomRightRadius:'5px',
            padding:'6px 10px',
            '&:hover':{
                transition:'.3s all ease-in-out',
                backgroundColor:'hsl(180, 14%, 20%)',
            }
        }
    }
    
});


export const Filter = ({fil,handleDelete}) => {
    

    const {dispTag,dispX,gridTag} = useStyles();

    return (

            <Grid item className={gridTag}>
                <span className={dispTag}>{fil}</span>
                <span onClick={() => handleDelete(fil)} className={dispX}>✖</span>
            </Grid>
                
            
            
          
                       

         

    )
}
