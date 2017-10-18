import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import API from "../../utils/API";
// import './Profile.css';

class Dashboard extends Component {
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
  state = {
    users: [],
    username: "",
    oneMileRun: "",
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
        oneMileRun: this.state.oneMileRun,
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
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Dashboard;