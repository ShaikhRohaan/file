import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import facebook from '../../Image/icon/facebook.png'
import insta from '../../Image/icon/insta.png'
import linkdin from '../../Image/icon/linkedin.png'
import telegram from '../../Image/icon/telegram.png'
import twitter from '../../Image/icon/twitter.png'
import footerlogo from '../../Image/footerlogo.png'
import logo from "../../Image/logo.png";

import './index.css'

const Footer=()=>{





    return <div className='footer_bg'>

     
        <Container style={{paddingTop:'50px'}}>
        <Grid container style={{justifyContent:'center'}}>
            <Grid item lg={2}>
                <Button  style={{backgroundColor:"rgb(37,36,36)",color:"rgb(255,199,0)",width:'100%',fontSize:'20px'}}>Follow uS</Button>
            </Grid>
        </Grid>


        <Grid container style={{justifyContent:'center',marginTop:'30px'}} >
            <Grid item lg={5} md={5} sm={7} xs={12}>
                  <Grid container style={{justifyContent:'center',gap:'30px'}}>
                    <Grid item lg={1.2} md={1.5} sm={1.6} xs={1.2} className='footer_icon'>
                        <img src={facebook} alt=''/>
                    </Grid>
                    <Grid item lg={1.2} md={1.5} sm={1.6} xs={1.2} className='footer_icon'>
                        <img src={insta} alt=''/>
                    </Grid>
                    <Grid item lg={1.2} md={1.5} sm={1.6} xs={1.2} className='footer_icon'>
                        <img src={linkdin} alt=''/>
                    </Grid>
                    <Grid item lg={1.2} md={1.5} sm={1.6} xs={1.2} className='footer_icon'>
                        <img src={telegram} alt=''/>
                    </Grid>
                    <Grid item lg={1.2} md={1.5} sm={1.6} xs={1.2} className='footer_icon'>
                        <img src={twitter} alt=''/>
                    </Grid>
                  </Grid>
            </Grid>
        </Grid>

      <Grid container style={{marginTop:'10%'}}>
        <Grid  item lg={6} md={6} sm={7.5} xs={12} style={{marginTop:'6%'}}>
        <Grid container className="header_top_main">
              <Grid item lg={2.5} xs={2} className="Header_Top_img">
                <img src={logo} alt="" />
              </Grid>

              <Grid item lg={9.5} xs={9.5} className="header_top_h1">
                <p
                  // style={{
                  //   width: "65%",
                  //   paddingTop: "30px",
                  //   marginTop:'4%',
                  //   marginLeft:'5px',
                  //   color:'rgb(255,199,0)',
                  //   fontSize:'20px'
                  // }}
                  id="header_m_h1"
                >
                  <b>Join The Biggest Air drop</b>
                </p>
              </Grid>
              {/* <p style={{textAlign:'start'}}>@2022 Mangomen Intelligent</p> */}
            </Grid>
        </Grid>
        <Grid item lg={1} md={1} ></Grid>
        <Grid  item lg={4.5} md={4.5} sm={4.5}>
            <h2 style={{fontFamily: "Times New Roman, Times, serif",color:'rgb(255,199,0)'}}>Mango Man Intelligent</h2>
            <p style={{textAlign:'justify'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        </Grid>
      </Grid>
        </Container>
    </div>
}

export default Footer