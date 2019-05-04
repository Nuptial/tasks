import React, { Component } from "react";

const styles = {
  margin: "10px 0px"
};

const stylesCountdown = {
  position: "absolute",
  right: "0px",
  bottom: "0px",
  background: "white",
  padding: "10px",
  color: "black",
  fontWeight: "bold",
  display: "flex"
};

let days;
let hrs;
let min;
let sec;

class Boutique extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hrs: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    this.timeToLaunch();

    this.setState({
      days: days,
      hrs: hrs,
      min: min,
      sec: sec
    });

    setTimeout(this.countDownTimer, 1001);
  }

  timeToLaunch = () => {
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - new Date(this.props.boutique.countdown)) / 1000;
    diff = Math.abs(Math.floor(diff));

    // Check number of days until target
    days = Math.floor(diff / (24 * 60 * 60));
    sec = diff - days * 24 * 60 * 60;

    // Check number of hours until target
    hrs = Math.floor(sec / (60 * 60));
    sec = sec - hrs * 60 * 60;

    // Check number of minutes until target
    min = Math.floor(sec / 60);
    sec = sec - min * 60;
  };

  countDownTimer = () => {
    // Figure out the time to launch
    this.timeToLaunch();

    this.setState({
      days: days,
      hrs: hrs,
      min: min,
      sec: sec
    });

    // Repeat the check every second
    setTimeout(this.countDownTimer, 1000);
  };

  render() {
    return (
      <div className="card m-10" style={styles}>
        <a href={this.props.boutique.link} target="_blank">
          <img
            className="card-img-top"
            src={this.props.boutique.img}
            alt="Card image cap"
          />
          {this.props.boutique.countdown ? (
            <div className="countdown" style={stylesCountdown}>
              <div className="number m-1">{this.state.days}</div>
              <div className="label m-1">Gün</div>
              <div className="number m-1">{this.state.hrs}</div>
              <div className="label m-1">Saat</div>
              <div className="number m-1">{this.state.min}</div>
              <div className="label m-1">Dakika</div>
              <div className="number m-1">{this.state.sec}</div>
              <div className="label m-1">Saniye</div>
            </div>
          ) : null}
        </a>
      </div>
    );
  }
}

export default Boutique;
