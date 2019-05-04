import React, { Component } from "react";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-around w-100">
            {(((this.props.data || []).data || []).Categories || []).map(
              (category, index) => (
                <a
                  className="nav-item nav-link"
                  href="#"
                  onClick={this.props.changeCategory}
                  key={index}
                >
                  {category}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

NavBar = connect(
  mapStateToProps,
  null
)(NavBar);

export default NavBar;
