import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img1 from '../../Image/logo.png'
import "./index.css";

const ConectWallet = () => {
  return (
    <div className='bg_we_zax' >
      <Container>
        <Grid container>
          <Grid item lg={8} md={8} sm={8} xs={12} className="we_zax_heading">
            <h1>
              <b>
              Contrary to popular belief, Lorem Ipsum is not simply.
              </b>
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
            </p>
            {/* <Button  style={{textAlign:'start',display:'block',backgroundColor:'rgb(255,0,0)',color:'white',marginBottom:'20px',borderRadius:'5px'}}>Connect Wallet</Button> */}
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12} className='inventing_img'>
            <img src={img1} alt=''/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ConectWallet;
