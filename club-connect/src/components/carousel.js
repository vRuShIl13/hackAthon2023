import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Box } from '@mui/system';

const carousel = (props) =>
{
    const Pictures = [
        {
            src: require("../assets/Pic1.jpg"),
            alt: "Picture 1",
            key: 1
        },
        {
            src: require("../assets/Pic2.jpg"),
            alt: "Picture 2",
            key: 2
        },
        {
            src: require("../assets/Pic3.jpg"),
            alt: "Picture 3",
            key: 3
        },
     {
            src: require("../assets/Pic5.jpg"),
            alt: "Picture 5",
            key: 5
        }, {
            src: require("../assets/Pic6.jpg"),
            alt: "Picture 6",
            key: 6
        }, {
            src: require("../assets/Pic7.jpg"),
            alt: "Picture 7",
            key: 7
        },

    ]

    const Picture =(props) =>
{
    return ( 
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: "auto",
                width: "75%",
                height: 500,
            },
        }}>
        <Paper elevation={20} >
            <img src= {props.item.src} alt={props.item.alt} className='Picture'/>
        </Paper>

    </Box>
    )
}
   

    return (
        <Carousel autoPlay={true} stopAutoPlayOnHover={false}  >
            {
                Pictures.map( (item, i) => <Picture key={item.key} item={item} /> )
            }
        </Carousel>
    )
}


export default carousel