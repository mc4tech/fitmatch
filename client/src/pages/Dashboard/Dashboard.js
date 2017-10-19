import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Panel, ControlLabel, } from 'react-bootstrap';
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class Dashboard extends Component {

  state = {
    users: [],
    username: "",
    avgMileWalking: "",
    avgMileJogging: "",
    avgMileBiking: "",
    open: true,
  };

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username: "", avgMileWalking: "", avgMileJogging: "", avgMileBiking: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
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
    const { profile } = this.state;
    return (
      <div className="container" id="profile">
        <div className="profile-area">
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <h1>{profile.name}</h1>
            </div>
            <div  aria-expanded={this.state.open}>
            <Row>
              <Col size="md-12">
              
                  <h4>Please Complete Your Profile?</h4>
         
                <form>
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (requi#0b0e7b)"
                  />
                  <Input
                    value={this.state.avgMileWalking}
                    onChange={this.handleInputChange}
                    name="avgMileWalking"
                    placeholder="Average Mile Walking (requi#0b0e7b)"
                  />
                  <Input
                    value={this.state.avgMileJogging}
                    onChange={this.handleInputChange}
                    name="avgMileJogging"
                    placeholder="Average Mile Jogging (optional)"
                  />
                  <Input
                    value={this.state.avgMileBiking}
                    onChange={this.handleInputChange}
                    name="avgMileBiking"
                    placeholder="Average Mile Biking (optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.avgMileWalking && this.state.username)}
                   
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </Col>
               
            </Row>
          </div>
            {/*<pre>{JSON.stringify(profile, null, 2)}</pre>*/}
          </Panel>
          </div>
        <div className="matches-area">
          <Panel header="Matches">
            {this.state.users.length ? (
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <Link to={"/users/" + user._id}>
                    <strong>
                      {user.username} 
                    </strong>
                    <span>Walks:{user.avgMileWalking} Jogs:{user.avgMileJogging} Bikes:{user.avgMileBiking}</span>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteBook(user._id)} />
                </ListItem>
              ))}
            </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Panel>
        </div>
      </div>
    );
  }
}

export default Dashboard;