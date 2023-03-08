import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import twitter from '../../Image/icon/twitter.png'
import telegram from '../../Image/icon/telegram.png'
import letter from '../../Image/icon/letter.png'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import './index.css'
import { textAlign } from '@mui/system'
import React from 'react'
// import Button from 'react-
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { colors } from '@mui/material'

const Task = () => {
  const Swal = require('sweetalert2')
  var location = useLocation()
  var asd = location.state

  async function Friends() {
    var key = location.state
    var a = key.toString()

    Swal.fire({
      title: 'All/' + a + '/Friends',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    })
  }

  async function chack() {
    var key = location.state
    var a = key.toString()
    console.log(a)
    if (a == null || a == undefined || a == '') {
      document.getElementById('inputAdrs').style.display = 'none'
    } else {
      document.getElementById('inputAdrs').style.display = 'block'
    }
  }

  async function bindchack() {
    var key = location.state.toString()
    console.log(key)
    fetch('http://159.65.126.129:8081/chackmail?email=' + key)
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        let a = data[0].address.toString()
        if (a.length >= 20) {
          console.log(data[0].address)
          var str = data[0].address
          let newStr = str.substring(0, 5) + '...' + str.substring(6, 11)
          refrellChack(key)
          document.getElementById('badres').innerHTML =
            'Binded Address   :   ' + newStr
          document.getElementById('bnd').style.display = 'none'
          document.getElementById('bnd21').style.display = 'block'
        } else {
          document.getElementById('inputAdrs').style.display = 'block'
          chack()
        }
      })
  }
  bindchack()

  async function refrellChack(key){
    fetch('http://159.65.126.129:8081/chackReferralParent?referralParent=' + 'All/'+key+'/Friends')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
     if(data.length > 0) {
      document.getElementById('countrefrell').innerHTML = data.length + ' MMIT';
     }else{

     }
    })
  }



  async function bind() {
    var emaile = asd.toString()
    var adrs = document.getElementById('Address').value
    if (adrs.length >= 40) {
      console.log(adrs)
      const url = 'http://159.65.126.129:8081/insaddress'

      let data = {
        adrs: adrs,
        email: emaile,
      }

      let request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })

      fetch(request).then(function () {
        Swal.fire({
          icon: 'success',
          title: 'Binding Success',
          showConfirmButton: false,
          timer: 900,
        })
      })
    } else {
    }
  }
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('')
  const [dbdata, setdbdata] = useState({
    image: ' ',
    email: ' ',
  })

  const [isShown, setIsShown] = useState(false)
  const [isShowntele, setIsShowntele] = useState(false)
  const [isShownsbg, setIsShownsbg] = useState(false)

  const handleClick = (event) => {
    setIsShown((current) => !current)
  }
  const handleClicktele = (event) => {
    setIsShowntele((curren) => !curren)
  }

  const handleClicksbg = (event) => {
    setIsShownsbg((curre) => !curre)
  }

  useEffect(() => {
    chack()
    bindchack()
  }, [])

  function Handletokenhit() {
    var emaile = asd.toString()
    let data = {
      image: image,
      email: emaile,
    }

    axios
      .post('http://159.65.126.129:8081/tokenhandle', data)
      .then(function (response) {
        console.log(response.data)

        Swal.fire({
          icon: 'success',
          title: 'Registration Success',
          showConfirmButton: false,
          timer: 900,
        })
      })
      .catch(function (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'UserName already Exiest',
        })
      })
  }

  // function handledb(){
  //   setdbdata({...dbdata, image: image, email: email})
  // }
  // let request = new Request(url, {
  // method: 'POST',
  // body: JSON.stringify(data),
  // headers: new Headers({
  //     'Content-Type': 'application/json'
  // })
  // });

  // fetch(request)
  // .then(function() {
  //     Swal.fire({
  //         icon: 'success',
  //         title: 'Registration Success',
  //         showConfirmButton: false,
  //         timer: 900
  //     })
  // });

  // }

  return (
    <div className="mmittooken_bg">
      <div style={{ display: 'none' }} id="inputAdrs">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h1 style={{ color: 'white' }}>Bind Your Wallet Address</h1>
            <Form.Label id="badres">Wallet Address</Form.Label>
            <Form.Control
              style={{ color: 'white' }}
              id="Address"
              type="text"
              placeholder="Address"
            />
          </Form.Group>
          <Button id="bnd" onClick={bind} variant="success">
            Bind Address
          </Button>
          <Button
            id="bnd21"
            style={{ display: 'none' }}
            onClick={bind}
            variant="success"
          >
            Rebind Address
          </Button>
        </Form>
      </div>

      <h1
        style={{
          textAlign: 'center',
          color: 'rgb(255,199,0)',
          fontFamily: 'Times New Roman, Times, serif',
          marginBottom: '50px',
          paddingTop: '5%',
        }}
      >
        Task
      </h1>
      <Container>
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid item lg={6} md={7} sm={9} xs={12} className="mmit_token_main">
            <Grid
              container
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                marginBottom: '20px',
                marginTop: '30px',
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img
                  src="https://gateway.pinata.cloud/ipfs/QmbPh3vFcw8Xt2m1NG6RkXfozNzcjf1TtiCdxp2gbnuHVV"
                  alt=""
                  className="mmit_icon"
                />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button id='dawnload_sbg'>
                    Download SBG Wallet App
                  </Button>
                </p>
              </Grid>

              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: 'rgb(255,199,0)',
                  paddingTop: '6px',
                  borderRadius: '10px',
                }}
              >
                <p className="text_coin">
                  <b>1 MMIT</b>
                </p>
              </Grid>
            </Grid>

            {/* <Grid
              container
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img src='https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-round-icon-3d-png-image_8704805.png' alt="" className="mmit_icon" />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button onClick={handleClick} style={{color:"black" ,textAlign:"center"} }>
                    Twitter Task
                  </Button>
                </p>
              </Grid>

             
            </Grid>
       

             <div>
              {isShown && (
                <div className="drawer">
                  <Grid
                    container
                    style={{
                      backgroundColor: "white",
                      borderRadius: "15px",
                      marginBottom: "20px",
                      marginTop: "30px",
                    }}
                  >
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img src='https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-round-icon-3d-png-image_8704805.png' alt="" className="mmit_icon" />
                    </Grid>
                    <Grid item lg={1} md={0.5} sm={0.1}></Grid>
                    <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                      <p id="task_text">
                        <Button style={{color:'black'}} href ='https://twitter.com/mangomanintell'>
                          Follow Us On Twitter and Get
                        </Button>
                      </p>
                    </Grid>

                    <Grid
                      item
                      lg={2}
                      md={2}
                      sm={2.5}
                      xs={3}
                      style={{
                        backgroundColor: "rgb(255,199,0)",
                        paddingTop:'6px',
                        borderRadius: "10px",
                      }}
                    >
                      <p className="text_coin">
                        <b>1 MMIT</b>
                      </p>
                    </Grid>
                  </Grid>

               
                </div>
              )}
            </div> */}
            <Grid
              container
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                marginBottom: '20px',
                marginTop: '30px',
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img
                  src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-round-icon-3d-png-image_8704805.png"
                  alt=""
                  className="mmit_icon"
                />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button
                 id='dawnload_sbg'
                    href="https://twitter.com/mangomanintell"
                  >
                    Follow on Twitter
                  </Button>
                </p>
              </Grid>

              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: 'rgb(255,199,0)',
                  paddingTop: '6px',
                  borderRadius: '10px',
                }}
              >
                <p className="text_coin">
                  <b>1 MMIT</b>
                </p>
              </Grid>
            </Grid>
            {/* <Grid
              container
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img src='https://static.vecteezy.com/system/resources/previews/012/493/083/original/instagram-logo-3d-illustration-free-png.png' alt="" className="mmit_icon" />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button onClick={handleClicktele} style={{color:"black" ,textAlign:"center"}}>Telegram Task</Button>
                </p>
              </Grid>
            </Grid>
            <div>
              {isShowntele && (
                <div className="drawer">
                  <Grid
                    container
                    style={{
                      backgroundColor: "white",
                      borderRadius: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img src='https://static.vecteezy.com/system/resources/previews/012/493/083/original/instagram-logo-3d-illustration-free-png.png' alt="" className="mmit_icon" />
                    </Grid>
                    <Grid item lg={1} md={0.5} sm={0.1}></Grid>
                    <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                      <p id="task_text">
                        <Button href="https://instagram.com/mangomanintell?igshid=YmMyMTA2M2Y=" style={{color:"black" ,textAlign:"center"}}>
                          Join Us On Instagram
                        </Button>
                      </p>
                    </Grid>
                    <Grid
                      item
                      lg={2}
                      md={2}
                      sm={2.5}
                      xs={3}
                      style={{
                        backgroundColor: "rgb(255,199,0)",
                        paddingTop:'6px',
                        borderRadius: "10px",
                      }}
                    >
                      <p className="text_coin">
                        <b>1 MMIT</b>
                      </p>
                    </Grid>
                  </Grid>
                </div>
              )}
            </div> */}
            <Grid
              container
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                marginBottom: '20px',
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/493/083/original/instagram-logo-3d-illustration-free-png.png"
                  alt=""
                  className="mmit_icon"
                />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button
                    href="https://instagram.com/mangomanintell?igshid=YmMyMTA2M2Y="
                    id='dawnload_sbg'
                  >
                    Join Us On Instagram
                  </Button>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: 'rgb(255,199,0)',
                  paddingTop: '6px',
                  borderRadius: '10px',
                }}
              >
                <p className="text_coin">
                  <b>1 MMIT</b>
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                marginBottom: '20px',
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img
                  src="https://www.pngall.com/wp-content/uploads/11/Telegram-Logo-PNG-Clipart.png"
                  alt=""
                  className="mmit_icon"
                />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button
                    href="https://t.me/mangomanintell"
                    id='dawnload_sbg'
                  >
                    Join Us On Telegram
                  </Button>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: 'rgb(255,199,0)',
                  paddingTop: '6px',
                  borderRadius: '10px',
                }}
              >
                <p className="text_coin">
                  <b>1 MMIT</b>
                </p>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                marginBottom: '20px',
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img
                  src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-referral-program-scheme-icon-png-image_4965367.png"
                  alt=""
                  className="mmit_icon"
                />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <Button
                    onClick={Friends}
                    id='dawnload_sbg'
                  >
                    Share With Your Friends 
                  </Button>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: 'rgb(255,199,0)',
                  paddingTop: '6px',
                  borderRadius: '10px',
                }}
              >
                <p className="text_coin">
                  <b id='countrefrell' >0 MMIT</b>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Container style={{ textAlign: 'center' }}>
          <h1
            style={{
              textAlign: 'center',
              color: 'rgb(255,199,0)',
              fontFamily: 'Times New Roman, Times, serif',
              marginBottom: '50px',
              paddingTop: '5%',
            }}
          >
            BUY Token and Drop Screen Shot Here
          </h1>
        </Container>

        <Grid container style={{ justifyContent: 'center' }}>
          <Grid
            item
            lg={5.2}
            md={6.5}
            sm={7}
            xs={12}
            style={{ marginTop: '5%' }}
          >
            <main>
              <form
                onClick={() => document.querySelector('.input-field').click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name)
                    if (files) {
                      setImage(URL.createObjectURL(files[0]))
                    }
                  }}
                />

                {image ? (
                  <img src={image} width={150} height={150} alt={fileName} />
                ) : (
                  <>
                    <MdCloudUpload color="rgb(255, 199, 0)" size={60} />
                    <p style={{ color: 'white' }}>
                      <b>Browse Files to upload</b>
                    </p>
                  </>
                )}
              </form>

              <section className="uploaded-row">
                {/* <AiFillFileImage color='#1475cf' /> */}
                <span className="upload-content">{fileName}</span>
              </section>
              <Button
                onClick={Handletokenhit}
                style={{
                  backgroundColor: 'rgb(122,0,255)',
                  width: '100%',
                  marginTop: '25px',
                  borderRadius: '12px',
                  color: 'white',
                  paddingTop: '15px',
                  paddingBottom: '15px',
                  fontSize: '20px',
                }}
              >
                <b>Submit Snap</b>
              </Button>
            </main>
          </Grid>
        </Grid>
        <h1
          style={{
            textAlign: 'center',
            color: 'rgb(255,199,0)',
            fontFamily: 'Times New Roman, Times, serif',
            marginBottom: '50px',
            paddingTop: '5%',
          }}
        >
          WHITE PAPER
        </h1>
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid item lg={4} md={5} sm={6} xs={12}>
            <Button
              style={{
                backgroundColor: 'rgb(122,0,255)',
                width: '100%',
                marginTop: '-20px',
                borderRadius: '12px',
                color: 'white',
                paddingTop: '20px',
                paddingBottom: '15px',
                fontSize: '20px',
              }}
            >
              <b>Read WhitePaper</b>
            </Button>
          </Grid>
        </Grid>
      </Container>
   
    </div>
  )
}

export default Task
