import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

export default function Header() {
    return (
        <Box id='header'>
            <Grid container style={{width: '100%', height: '100%'}} alignContent='end'>
                <Box color='white' item width='40%' justifyContent='center' alignItems='center' display='flex' textAlign='start' flexDirection='column'>
                    <Typography variant='h4'>Fallen Angel (Devon Owen)</Typography>
                    <Typography>Full Stack Web Developer</Typography>
                </Box>
            </Grid>
        </Box>
    )
}
