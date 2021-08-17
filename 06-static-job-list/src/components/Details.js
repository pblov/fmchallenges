import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => {

    return {

        pcompany:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:'10px',
            color: 'hsl(180, 29%, 50%)',
            fontSize:'14px',
            fontWeight:'700'
        },
    
        pposition:{
            fontSize:'16px',
            paddingTop:'12px',
            fontWeight:'900',
            cursor:'pointer',
            '&:hover':{
                color: 'hsl(180, 29%, 50%)',
                transition: '.3s all ease-in-out'
            }
        },
    
        pdays:{
            fontSize:'14px',
            paddingTop:'10px',
            color: 'hsl(180, 8%, 52%)'
        },
    
        spanNew:{
            borderRadius:'15px',
            padding:'7px 8px 3px 8px',
            fontSize:'11px',
            fontWeight:'700',
            backgroundColor: 'hsl(180, 29%, 50%)',
            color:'hsl(180, 29%, 100%)'
        },
    
        spanFeat:{
            borderRadius:'15px',
            padding:'7px 8px 3px 8px',
            fontSize:'11px',
            fontWeight:'700',
            backgroundColor: 'hsl(180, 14%, 20%)',
            color:'hsl(180, 29%, 100%)'
        },
    
        hrLine:{
            visibility:'hidden',
            [theme.breakpoints.down('sm')]:{
                visibility:'visible',
                margin:'30px 0px 0px 0px'
             }
        },

        pLeft:{
            paddingLeft:'30px !important',
            [theme.breakpoints.down('sm')]:{
                paddingLeft:'15px !important'
             }
        }
    }

    
});


export const Details = ({
    company,
    newFeat,
    featured,
    position,
    dateAt,
    contract,
    location
}) => {

    
    const {pdays,pposition,pcompany,spanNew,spanFeat,hrLine,pLeft} = useStyles();

    return (

      
            
            <Grid item md={3} xs={12} className={pLeft}>
                <p className={pcompany}>
                    {company}
                    {newFeat &&  <span className={spanNew} > NEW!</span> }
                    {featured &&  <span className={spanFeat}> FEATURED</span> }
                </p>
                <p className={pposition}>
                    {position}
                </p>
                <p className={pdays}>  
                    {dateAt} ・ {contract} ・ {location}
                </p>
                <hr className={hrLine} />
            </Grid>
       
            
     

        
    )
}
