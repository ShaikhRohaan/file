import React, { useState , useEffect } from 'react'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit'

import Button from "@mui/material/Button";

import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';


const Login = () => {
const Swal = require('sweetalert2')

document.body.style.backgroundColor = "rgb(37, 36, 36)";
document.body.style.color = "white";
 
  var Key = [];
  const [JustifyActive, setJustifyActive] = useState('Tab1');

  const handleJustifyClick = (value) => {
    if (value === JustifyActive) {
      return
    }

    setJustifyActive(value)
  }


  async  function login(){
    var email = document.getElementById("form1").value;
    var password = document.getElementById("form2").value;
    if (email == '' || password == '' ) 
    {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
          })
          Key.push(0)
    } else {
  fetch("http://159.65.126.129:8081/login?email="+email+"&password="+password)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data[0].email, "data");
        Key.push(data[0].email);
            console.log(Key)
        if (data.length == 1) {
            
            data.forEach(element => {
              //  console.log(element)
              //  console.log(element.email_id);

            

            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 900
            })

            var home = document.getElementById("wallets");
            home.click();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not registered',
            })	
            localStorage.setItem("allow",false);
          return 0;
      }
    
   });
  }
  }
  async function register(){
  var signin = document.getElementById("signin");
  var Name = document.getElementById('rname').value;
  var userName = document.getElementById('uname').value;
  var Email = document.getElementById('uemail').value;
  var Referral = document.getElementById('referral').value;

  var emailValue = Email;
  var emailPattern = /^[^\s@]+@gmail\.com$/;

  var password = document.getElementById('upassword').value;

 
   if(Name == '' || Name == null || Name == undefined){						
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name is required',
      })
   }
   else if(userName == '' || userName == null || userName == undefined){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Name is required',
      })	
   }
   else if(!emailPattern.test(emailValue)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong Email!',
      })	
   }
   else if(password == '' || password == null || password == undefined){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is required',
      })	
   }
   else if(password.length < 6){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords must be at least 6 characters',
      })	
   }
   else{
    fetch("http://159.65.126.129:8081/chackuser?username="+userName)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        if (data.length == 1) {
  
            data.forEach(element => {
           

               Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'UserName already Exiest',
              })	
            })
        }else if(data.length == 0){
                fetch("http://159.65.126.129:8081/chackmail?email="+Email)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    if (data.length == 1) {

                        data.forEach(element => {
                       
            
                           Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email already Exists',
                          })	
                        })
                    }else {
                    
                      fetch("http://159.65.126.129:8081/refrellCode?Code="+Referral)
                      .then(function(res) {
                          return res.json();
                          console.log(res);
                      })
                      .then(function(data) {
            
                          if (data.length == 0) {
                                Swal.fire({
                                  icon: 'error',
                                  title: 'Oops...',
                                  text: 'Referral Code Not Exists',
                                })	 
                          }else {
                          const url = 'http://159.65.126.129:8081/register';

                          let data = {
                              name : Name ,
                              username : userName ,
                              email : Email,
                              password : password ,
                              refrellCode : 'All/'+Email+'/Friends',
                              referralParent : Referral,
                          }

                          let request = new Request(url, {
                          method: 'POST',
                          body: JSON.stringify(data),
                          headers: new Headers({
                              'Content-Type': 'application/json'
                          })
                          });

                          fetch(request)
                          .then(function() {
                              Swal.fire({
                                  icon: 'success',
                                  title: 'Registration Success',
                                  showConfirmButton: false,
                                  timer: 900
                              })
                          signin.click();
                          });
                  }
               });
               

                    }
    
   });





    
        }
      })
    }
  }
useEffect(() => {
console.log(Key)
},[Key]);
  return (
    <div style={{color:'white'}}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
            id='signin'
              onClick={() => handleJustifyClick('Tab1')}
              active={JustifyActive === 'Tab1'}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('Tab2')}
              active={JustifyActive === 'Tab2'}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={JustifyActive === 'Tab1'}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />
            {/* 
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div> */}

            <Button onClick={login} className="mb-4 w-100">Sign in</Button>
            <Link to={'/'} state={Key} id="wallets" style={{display: 'none'}} className="mb-4 w-100">Home</Link>
            {/* <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p> */}
          </MDBTabsPane>

          <MDBTabsPane show={JustifyActive === 'Tab2'}>
            <div className="text-center mb-3">
              <p>Register Your Self:</p>

            </div>

            <MDBInput wrapperClass="mb-4" label="Name" id="rname" type="text" required />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="uname"
              type="text"
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="uemail"
              type="email"
              required
            />
          
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="upassword"
              type="password"
              required

            /> 
          <MDBInput
            wrapperClass="mb-4"
            label="Referral Code (Optional)"
            id="referral"
            type="text"
            required
          />
            {/* <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div> */}

            <Button onClick={register} className="mb-4 w-100">Sign up</Button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  )
}

export default Login
