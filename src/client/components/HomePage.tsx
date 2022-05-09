/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Farms from './Farms';
import { stringify } from 'querystring';
import { Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const HomePage = ({ getAllSubscriptions }: any) => {
  // interface Farms {name: string, description: string, id: number, farmArray: any}
  const [farms, setFarms] = useState([]);
  const navigate = useNavigate();

  const getFarms = () => {
    axios
      .get('/api/farms')
      .then((data: any) => {
        // console.log("front end axios call", data)
        setFarms(data.data);
      })
      .catch((err: unknown) => {
        console.error('OH NOOOOO', err);
      });
  };
  useEffect(() => {
    getFarms();
  }, []);
  // console.log("farms", 22, farms)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Knock, Knock Tomatoes
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph
            >
              Community Supported Agriculture is a way for farms to serve their
              communities & for their communities to serve them. It's a
              beautifully organized delivery system designed to compliment both
              the farmers & the eaters so both parties have a chance to learn,
              work, & grow with each other.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button
                variant='contained'
                color='success'
                sx={{ color: 'white' }}
                onClick={() => navigate('/subscriptions-page')}
              >
                Sign Up
              </Button>
              {/* <Button variant='outlined'>Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component='img'
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='http://res.cloudinary.com/ddg1jsejq/image/upload/v1651189122/dpzvzkarpu8vjpwjsabd.jpg'
                    alt='random'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Season Subscription
                    </Typography>
                    <Typography>
                      A 4-month subscription of weekly boxes filled with the
                      freshest produce from our farm.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default HomePage;
