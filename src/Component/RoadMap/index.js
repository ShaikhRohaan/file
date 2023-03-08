import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./index.css";
import treeImg from "../../Image/img1.png";

const ROADMAP = () => {
  return (
    <div id="journay_Mango" className='roadmap_bg'>
     <h1
          style={{
            textAlign: "center",
            color: "rgb(255,199,0)",
            paddingTop: "30px",
            paddingBottom: "30px",
            fontFamily: "Times New Roman, Times, serif",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          ROAD MAP
        </h1>
      <Container maxWidth="md">
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-1(Birth) </b>
            </h2>
            <ul>
              <li>Marketing for brand awarness</li>
              <li>Website Launch</li>
              <li>5000+ Telegram community</li>
              <li>Meme Creation </li>
              <li>Birth of mangoman </li>
            </ul>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>

          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-2(Seedlling) </b>
            </h2>
            <ul>
              <li>Influrence Promotion</li>
              <li>Coin Gecko Listing </li>
              <li>25000+ telegram community</li>
              <li>25,000 Token Holders</li>
              <li>Third Party Auditing</li>
            </ul>
          </Grid>
        </Grid>

   

        <Grid container style={{marginTop:"30px"}}>
        
        <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-3(Seedlling) </b>
            </h2>
            <ul>
              <li>100,000 Token Holders</li>
              <li>1,00,000 Telegram members </li>
              <li>Air drop facility</li>
              <li>Influencer promotion </li>
              <li>community meme</li>
            </ul>
          </Grid>
        <Grid item lg={1} md={1} sm={1}></Grid>

          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
          <Grid ite lg={1} md={1} sm={1}></Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={12}
            className="phase_birth"
            id="journaey_phase"
          >
            <h2>
              <b>Phase-4(Birth) </b>
            </h2>
            <ul>
            <li>1,50,000 Token Holders</li>
              <li>Immenence Marketing </li>
              <li>More Meme</li>
              <li>Website Augmentation </li>
              <li>Fruit Wallat Traker
              </li>
            </ul>
          </Grid>
        </Grid>


        <Grid container style={{marginTop:"30px"}}>
          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-5(Seedlling) </b>
            </h2>
            <ul>
              <li>3,00,000 Token Holders</li>
              <li>MangoMan  swap unleased</li>
              <li>More Meme</li>
              <li>NFT Collection </li>
              <li>NFT Marketing
              </li>
            </ul>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
        </Grid>

  

      </Container>

      <h3
          style={{
            textAlign: "center",
            color: "rgb(255,199,0)",
            paddingTop: "30px",
            fontFamily: "Times New Roman, Times, serif",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
        Contact Us
        </h3>
  
  
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginTop:'-10px',
            paddingBottom: "30px",
            fontFamily: "Times New Roman, Times, serif",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
        mangomantokken@gmail.com
        </h2>
  
    </div>
  );
};

export default ROADMAP;
