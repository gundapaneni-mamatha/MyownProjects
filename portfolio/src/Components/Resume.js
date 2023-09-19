import React from 'react';
import { Container, Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import '../Styles/Resume.css'
import Grid from '@mui/system/Unstable_Grid/Grid';
import ResumeImg from '../Images/resume.jpg'
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import CheckIcon from '@mui/icons-material/Check';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GrassIcon from '@mui/icons-material/Grass';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsIcon from '@mui/icons-material/Sports';

const Resume = () => {
    const [variant, setVariant] = React.useState('soft');

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1Zt-d3N-LtgFmnKov7hGdTNWVb0QsAIzk/view?usp=sharing'; 
        link.target = '_blank';
        link.download = 'Mamatha_Gundapaneni_CV.pdf'; 
        link.click();
      };
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false"  className="textColorHeadings" sx={{ bgcolor: '#161515', height: '420vh' }}>
                <Grid container className='itemStart'>
                    <Grid item className="head" xs={12}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3} className="itemsAlign">
                        <div className='image'><img src={ResumeImg} className='image'></img></div></Grid>

                    <Grid container xs={5} marginTop={1}>
                        <Grid item xs={12}>Hello! I'm Mamatha Gundapaneni. Frontend developer from Acworth, Georgia, USA. I have experience in web site design and building,
                            also I am good at mobile applications.</Grid>

                        <Grid item xs={6} className="itemStart">
                            <p>Total Experience: 6</p>
                            <p>Age: 27</p>
                            <p>Job: Fulltime</p>
                        </Grid>
                        <Grid className="itemStart" item xs={6}>
                            <p>Phone: +1 (470) 901-7745</p>
                            <p>Email: gundapanenimamatha@gmail.com</p>
                            <p>Address: Acworth, Georgia</p>
                        </Grid>

                        <Grid xs={12}><button type="button" name="Download" className='btn' onClick={handleDownloadCV}>Download CV</button></Grid>

                        {/* <p>Mamatha Gundapaneni</p>
                        <p>React Developer/Frontend Developer</p> */}
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container className="itemStart">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} className="head">
                        <div className='mainHead mainTitle'>Experience</div>
                        <Box className="section">
                            <span className='dateColor'>Aug 2022 - present</span>
                            <div className='descriptionHead'>Frontend Developer - Atap cloud LLC.</div>
                            <div className='descriptionColor'>Ensures accurate tracking of third party company activities and tasks performed by them</div>
                        </Box>

                        <Box className="section">
                            <span className='dateColor'>Jan 2022 - Jun 2022</span>
                            <div className='descriptionHead'>Associate Projects - Cognizant Technologies</div>
                            <div className='descriptionColor'>Online payment processing and commerce solutions for internet businesses of all sizes.</div>
                        </Box>

                        <Box className="section">
                            <span className='dateColor'>Sep 2018 - Dec 2021</span>
                            <div className='descriptionHead'>Software Engineer - Osmosys Software Solutions</div>
                            <div className='descriptionColor'>Online learning tool where facilities can manage their student assignments and tutorials along with payments</div>
                            <div className='descriptionColor'>Worked on data extraction tool using crawler scripts</div>
                        </Box>

                        <Box>
                            <span className='dateColor'>Jun 2017 - Aug 2018</span>
                            <div className='descriptionHead'>Javascript Developer - Flysoft Inc.</div>
                            <div className='descriptionColor'>Some content goes here</div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className="head subItem">
                        <div className='mainHead mainTitle'>Education</div>
                        <Box className="section">
                            <span className='dateColor'>2013 - 2017</span>
                            <div className='descriptionHead'>Btech</div>
                            <div className='descriptionColor'>Bachelors Degree in Computer Science, Sri Mitapalli College, Guntur, India.</div>
                        </Box>
                        <Box className="section">
                            <span className='dateColor'>2011 - 2013</span>
                            <div className='descriptionHead'>Intermediate</div>
                            <div className='descriptionColor'>MPC in Computer Science, NRI Institute, Guntur, India.</div>
                        </Box>
                        <Box className="section">
                            <span className='dateColor'>2010 - 2011</span>
                            <div className='descriptionHead'>Secondary School Certificate</div>
                            <div className='descriptionColor'>Educated in Sri Saraswathi High School, Tallur, India.</div>
                        </Box>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head itemStart codingHead mainTitle">Coding Skills</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={1.6} className='codingName'>
                        <div><CircularProgress color="danger" variant={variant} determinate value={95}
                            sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressThickness': '7px' }}> 95% </CircularProgress></div>
                        <div className='codingNameSpacing'>HTML/CSS</div></Grid>

                    <Grid item xs={1.6} className='codingName'>
                        <div><CircularProgress color="danger" variant={variant} determinate value={90}
                            sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressThickness': '7px' }}> 90% </CircularProgress></div>
                        <div className='codingNameSpacing'>React/<br />Javascript</div></Grid>

                    <Grid item xs={1.6} className='codingName'>                                   
                     <div><CircularProgress color="danger" variant={variant} determinate value={65}
                        sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressThickness': '7px' }}> 65% </CircularProgress></div>
                        <div className='codingNameSpacing'>AWS/REST</div></Grid>
                    <Grid item xs={1.6} className='codingName'>
                        <div><CircularProgress color="danger" variant={variant} determinate value={50}
                            sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressThickness': '7px' }}> 50% </CircularProgress></div>
                        <div className='codingNameSpacing'>ElasticSearch</div></Grid>

                    <Grid item xs={1.6} className='codingName'>
                        <div><CircularProgress color="danger" variant={variant} determinate value={75}
                            sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressThickness': '7px' }}> 75% </CircularProgress></div>
                        <div className='codingNameSpacing'>Nodejs</div></Grid>

{/* <Box sx={{ display: 'inline-block', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}> */}
                    {/* </Box> */}

                    <Grid item xs={1}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head codingHead mainTitle itemStart">Tool Skills</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div className='toolSkillName'><span className='itemStart'>import.io</span> <span className='itemEnd'>95%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={95} /></div>

                        <div className='toolSkillName'><span>Postman</span> <span className='itemEnd'>90%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={90} /></div>

                        <div className='toolSkillName'><span>Figma</span> <span className='itemEnd'>85%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={85} /></div>

                        <div className='toolSkillName'><span>Jira</span> <span className='itemEnd'>95%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={95} /></div>

                        <div className='toolSkillName'><span>Chrome Developer</span> <span className='itemEnd'>95%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={95} /></div>
                        </Grid>

                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head codingHead mainTitle itemStart">Languages known</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div className='toolSkillName'><span className='itemStart'>English</span> <span className='itemEnd'>90%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={90} /></div>

                        <div className='toolSkillName'><span>Telugu</span> <span className='itemEnd'>Native</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={95} /></div>

                        <div className='toolSkillName'><span>Hindi</span> <span className='itemEnd'>85%</span></div>
                        <div className='toolSkillSpacing'><LinearProgress size="md" color="danger" variant={variant} determinate value={85} /></div>

                        </Grid>

                    <Grid item xs={2}></Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head mainTitle knowHead itemStart">Knowledge things</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} >
                        <div className='mainHead mainTitle'>CodeHub</div>
                        <div className='checkSkills'><span><CheckIcon fontSize="medium" color="error" /></span> <span className='marginLeft'>Visual studio</span></div>
                        <div className='checkSkills'><span><CheckIcon fontSize="medium" color="error" /></span> <span className='marginLeft'> Github/Gitlab</span></div>
                        <div className='checkSkills'><span><CheckIcon fontSize="medium" color="error" /></span> <span className='marginLeft'> Bitbucket</span></div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className='mainHead mainTitle'>System Softwares</div>
                    <div className='checkSkills'><span><CheckIcon fontSize="medium" color="error" /></span> <span className='marginLeft'> Windows</span></div>
                    <div className='checkSkills'><span><CheckIcon fontSize="medium" color="error" /></span> <span className='marginLeft'> Linux</span></div>
                    </Grid>

                    <Grid item xs={2}></Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head mainTitle itemStart">Interests</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid xs={2}></Grid>
                        <Grid xs={4} className='blockLeft spacing'>
                            <div className='textColorContact'>Music</div>
                            <MusicNoteIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>Music can brings happiness ,excitement and joy.</div>
                        </Grid>

                        <Grid xs={4} className='blockRight spacing'>
                            <div className='textColorContact'>Planting</div>
                            <GrassIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>Your heart gets stronger and plants and can clean air</div>
                        </Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={2}></Grid>
                        <Grid xs={4} className='blockLeft spacing'>
                            <div className='textColorContact'>Reading</div>
                            <AutoStoriesIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>Reading can help you relax and forget your worries,</div>
                        </Grid>

                        <Grid xs={4} className='blockRight spacing'>
                            <div className='textColorContact'>Sports</div>
                            <SportsIcon fontSize="large" color="error" className='iconSpacing' />
                            <div className='textColorContact'>Encourage team-building skills,hard work and practice will see improvements in sports skills</div>
                        </Grid>
                        <Grid xs={2}></Grid>
                    
                </Grid>


                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="head mainTitle itemStart knowHead">Summary about me</Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>Thank you for visiting my portfolio website. I am passionate about website design, building in react and eager to take on new challenges. 
                    If you're interested in collaborating or have any questions, I'd love to hear from you. Let's create something amazing together!</Grid>
                    <Grid item xs={2}></Grid>

                    
                </Grid>

            </Container>
        </React.Fragment>
    );
}

export default Resume;