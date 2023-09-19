import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" sx={{ bgcolor: '#161515' }}>
                    <div className='footerLeft'>
                        <div>E: gundapanenimamatha@gmail.com</div>
                        <div>Ph: +1 (470) 901-7745</div>
                    </div>

                    <div className='footerRight'>
                    <div>Get in touch with
                       <div>
                        <a href="#"  className='iconSpacing'><TwitterIcon fontSize="small" color="error" /></a>
                        <a href="https://www.linkedin.com/in/mamatha-gundapaneni-rp/"  className='iconSpacing'><LinkedInIcon fontSize="small" color="error" /></a>
                        <a href="https://github.com/gundapaneni-mamatha"  className='iconSpacing'> <GitHubIcon fontSize="small" color="error" /></a>
                        <a href="#"><InstagramIcon fontSize="small" color="error" /></a>
                       </div>
                       </div> 
                    </div>
            </Container>
        </React.Fragment>
    );
}

export default Footer;