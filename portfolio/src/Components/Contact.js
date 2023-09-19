import React from 'react';
import { Box, Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/system/Unstable_Grid/Grid';
import '../Styles/Contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import TextField from '@mui/material/TextField';




const Contact = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" sx={{ bgcolor: '#161515', height: '150vh' }}>
                    <Grid container columnSpacing={12}>
                        <Grid xs={12} className='textColorContact contactSpacing'>Contact Info</Grid>

                        <Grid xs={2}></Grid>
                        <Grid xs={4} className='blockLeft spacing'>
                            <div className='textColorContact'><bold>Phone</bold></div>
                            <PhoneIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>+1 (470) 901-7745</div>
                        </Grid>

                        <Grid xs={4} className='blockRight spacing'>
                            <div className='textColorContact'>Email</div>
                            <EmailIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>gundapanenimamatha@gmail.com</div>
                        </Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={4} className='blockLeft spacing'>
                            <div className='textColorContact'>Address</div>
                            <HomeIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>Acworth, Georgia</div>
                        </Grid>

                        <Grid xs={4} className='blockRight spacing'>
                            <div className='textColorContact'>Emergency Contact</div>
                            <ContactEmergencyIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>+1 (812) 201-1668</div>
                        </Grid>
                        <Grid xs={2}></Grid>

                        <Grid xs={12} className='textColorContact contactFormSpacing'>Contact Forms</Grid>
                        <Grid xs={2.5}></Grid>
                        <Grid xs={7.5}><input type="text" name="name" placeholder="Name" className='textField' /></Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={2.5}></Grid>
                        <Grid xs={7.5}><input type="email" name="Email" placeholder='Email' className='textField' /></Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={2.5}></Grid>
                        <Grid xs={7.5}><textarea name="message" placeholder='Message' className='textField textArea' /></Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={2.5}></Grid>
                        <Grid xs={7.5} className="btnSpacing"><button type="button "name="submit" className='btn'>Send Message</button></Grid>
                        <Grid xs={2}></Grid>

                    </Grid>


            </Container>
        </React.Fragment>
    );
}

export default Contact;