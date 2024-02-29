/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Grid } from "@mui/material"
import '@fontsource/roboto/500.css';












const Weather = ({weatherData} : any) => (



    <Box width={400} marginX='auto' marginY={30} p={2}  sx={{ borderRadius: 2, background: 'linear-gradient(0deg, rgba(34,0,54,1) 0%, rgba(101,40,196,1) 100%, rgba(92,38,200,1) 100%, rgba(91,43,166,1) 100%);', }}>
        <Grid container spacing={2}>
            <Grid container item>
                <Grid item xs>
                    <Typography variant="h2" color="white">
                        {weatherData.main.temp}&deg;
                    </Typography>
                </Grid>
                <Grid item>
                    <Box 
                    component="img"
                    sx={{
                        height: 90,
                        width: 90
                    }}
                    alt="weather icon"
                    src={`${import.meta.env.VITE_APP_ICON_URL}${weatherData.weather[0].icon}.png`}
                    />
                    
                </Grid>
            </Grid>
            <Grid container item >
                <Grid item xs>
                    <Typography color="white">
                        {weatherData.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="white" textTransform="capitalize">
                        {weatherData.weather[0].description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Box>


)


export default Weather