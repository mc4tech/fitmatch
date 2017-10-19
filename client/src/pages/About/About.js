import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Panel from "../../components/Panel";
import Meguel from "./Images/Meguel.jpg";
import Carl from "./Images/Carl.png";
import Safiyya from "./Images/Safiyya.jpg";
import Menelik from "./Images/Menelik.jpg";
import Ray from "./Images/Ray.jpg";
import Linkedin from "./Images/linkedin.png";
import Github from "./Images/GitHub-Mark-64px.png";
import "./About.css";

class About extends Component {
state = {
    users: [],
    username: "",
    avgMileWalking: "",
    avgMileJogging: "",
    avgMileBiking: "",
    open: true,
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.avgMileWalking) {
      API.saveUser({
        username: this.state.username,
        avgMileWalking: this.state.avgMileWalking,
        avgMileJogging: this.state.avgMileJogging,
        avgMileBiking: this.state.avgMileBiking,
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };
  render() {

    return (  
      <div>
      
        <Container>
        <div  aria-expanded={this.state.open}>
            <Row>
               
            </Row>
          </div>
          <Panel>
          <Row>
            <h1 className="text-center">Meet Our Developers</h1>
          </Row>

          <Col size="md-9 md-offset-1 bioContent">
            <div className="text-center">
              <Row>
                <Col size="md-3 md-offset-1">
                   <h3>Safiyya Shariff</h3>
                  <img className="img-circle bioPic" alt="Safiyya Shariff" src={Safiyya}></img>
                  <Row>
                    <a href="https://github.com/ssharif10" target="_blank"><img className="img-circle links " alt="github" src={Github}></img></a>
                    <a href="https://www.linkedin.com/in/safiyya-sharif-cpim" target="_blank"><img className="img-circle links col-md-offset-1" alt="linkedin" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Meguel Chavez</h3>
                  <img className="img-circle bioPic" src={Meguel} alt="Meguel Chavez" ></img>
                  <Row>
                    <a href="https://github.com/mc4tech" target="_blank"><img className="img-circle links" alt="github" src={Github}></img></a>
                    <a href="www.linkedin.com/in/meguel-chavez" target="_blank"><img className="img-circle links col-md-offset-1" alt="linkedin" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Menelik Tefera</h3>
                  <img className="img-circle bioPic" alt="Menelik Tefera" src={Menelik}></img>
                  <Row>
                    <a href="https://github.com/menelik7" target="_blank"><img className="img-circle links" alt="github" src={Github}></img></a>
                    <a href="#" target="_blank"><img className="img-circle links col-md-offset-1" alt="linkedin" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"></img></a>
                  </Row>
                </Col>  
              </Row>
              <div className="row"id="bottom">
                <Col size="md-3 md-offset-3">
                  <h3>Carlvis Jones</h3>
                  <img className="img-circle bioPic" src={Carl} alt="Carlvis Jones"></img>
                  <Row>
                    <a href="https://github.com/TangentLine" target="_blank"><img className="img-circle links" alt="github" src={Github}></img></a>
                    <a href="#" target="_blank"><img className="img-circle links col-md-offset-1" alt="linkedin" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Ray Shin</h3>
                  <img className="img-circle bioPic" alt="Ray Shin" src={Ray}></img>
                  <Row>
                    <a href="https://github.com/rayjshin" target="_blank"><img className="img-circle links" alt="github" src={Github}></img></a>
                    <a href="https://www.linkedin.com/in/ray-shin-91176016/" target="_blank"><img className="img-circle links col-md-offset-1" alt="linkedin" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"></img></a>
                  </Row>
                </Col> 
              </div> 
            </div> 
          </Col>
          </Panel>
        </Container>
      </div>
      );
  }
  
}

export default About;