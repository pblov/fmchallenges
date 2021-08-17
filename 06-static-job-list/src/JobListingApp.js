import React, { useEffect, useState } from 'react';
import { JobCard } from './components/JobCard';
import dataJob from './data/data.json';
import { Container,Grid } from '@material-ui/core';
import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( them => {

    return{

        filterContainer:{
            
           marginTop:'-50px'

        },

        jobContainer:{
            margin:'100px auto',
            
            padding:'0px 30px'
            
        },

        gridFilter:{
            padding:'30px',
            backgroundColor: '#fff',
            boxShadow: '0px 6px 19px -8px hsl(180, 29%, 50%)',
            borderRadius: '5px',
            display:'flex',
            alignItems:'center',
           
        },
        
        tagClass:{
            display:'flex',
            flexWrap:'wrap',
            gap:'20px',

        },

        clearFilter:{
            
            display:'flex',
            justifyContent:'flex-end',
            padding:'12px',   
            
        },

        clear:{
            fontSize:'14px',
            fontWeight:'700',
            cursor:'pointer',
            borderBottom:'1px solid transparent',
            lineHeight:'80%',
            color: 'hsl(180, 8%, 52%)',
            '&:hover':{
                transition:'.3s all ease-in-out',
                color: 'hsl(180, 29%, 50%)',
                lineHeight:'80%',
                borderBottom: '1px solid hsl(180, 29%, 50%)',
                
            }
        }
    
    }

});

export const JobListingApp = () => {

    

    const {filterContainer,jobContainer,gridFilter,tagClass,clearFilter,clear} = useStyles();
    const [jobList, setJobList] = useState([]);
    const [filters, setFilters] = useState([]);
    
    useEffect(() => {
        
        setJobList(dataJob);

    }, []);   

    const handleFilter = ({role,level,languages,tools}) => {

        
        const buttons = [role,level,...languages, ...tools];
        
        if(filters.length === 0){
            return true;
        }

        return filters.every((tag) => buttons.includes(tag));
    }


   const handleClick = (buttons) => {
       if(!filters.includes(buttons)){
        setFilters([...filters,buttons]);
       }
      
   }

   const handleClear = () => {
       setFilters([]);
   }

   const handleDelete = (currentJob) => {
       setFilters(filters.filter((key) => key !== currentJob));
   }

     
   const filteredJobs = jobList.filter(handleFilter);

    return (

        <>

            <Header/> 

            {
                filters.length > 0 &&
            
                <Container className={filterContainer}>

                    <Grid container className={gridFilter} >
                        <Grid item md={9} xs={9} className={tagClass}>
                            {
                                filters.map(
                                    (filter) => <Filter handleDelete={handleDelete} key={filter} fil={filter}></Filter>  )
                            }
                        </Grid>
                        <Grid item md={3} xs={3}className={clearFilter}>
                            <p onClick={handleClear} className={clear}>Clear</p>
                        </Grid>
                    </Grid>
                                            
                </Container>
            }

            <Container className={jobContainer}>
                
                {
                    filteredJobs.map(jobs => 
                        <JobCard  key={jobs.id}  job={jobs} handleClick={handleClick} />
                    )
                }


            </Container>

        </>
       
    )
}
