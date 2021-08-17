import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => {

    return {

        relative:{
            position:'relative'
        },

        imgAbsolute:{
            [theme.breakpoints.down('sm')]:{
                width:'60px',
                height:'60px',
                position:'absolute',
                bottom: '5px',

            }
        }
    
    }

    
});

export const Image = ({path,desc}) => {

    const {imgAbsolute,relative} = useStyles();


    return (
        <Grid item md={1} xs={12} className={relative} >
           
         <img className={imgAbsolute} src={path} alt={desc} />
                        
        </Grid>
    )
}
