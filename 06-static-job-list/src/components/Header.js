import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( them => {

    return{

        imgHead:{
            backgroundColor:'hsl(180, 29%, 50%)',
            height: '200px',
            backgroundImage: 'url("/images/bg-header-desktop.svg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            
            backgroundPosition:'center',
            [them.breakpoints.down('sm')]:{

                backgroundImage: 'url("/images/bg-header-mobile.svg")'
            }
        }

    
    }

});




export const Header = () => {

    const {imgHead} = useStyles();

    return (
        <header className={imgHead}></header>
    )
}
