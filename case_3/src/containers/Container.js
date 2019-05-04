import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Boutique from "../components/Boutique";
import Campaign from "../components/Campaign";
import Loading from "../components/Loading";
import { getData } from "../actions";
import { connect } from "react-redux";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: ""
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  changeCategory = event => {
    this.setState({
      selectedCategory: event.currentTarget.textContent
    });
  };

  render() {
    return (
      <div className="container">
        <NavBar changeCategory={this.changeCategory} />
        <Loading />
        <div className="d-flex">
          <div>
            <div className="float-right">
              {" "}
              {(((this.props.data || []).data || []).Campaigns || []).map(
                (campaign, index) => (
                  <Campaign key={index} campaign={campaign} />
                )
              )}{" "}
            </div>{" "}
            {(((this.props.data || []).data || []).Boutiques || [])
              .filter(
                boutiqe =>
                  boutiqe.category.toUpperCase() ===
                    this.state.selectedCategory.toUpperCase() ||
                  this.state.selectedCategory === ""
              )
              .map((boutiqe, index) => (
                <Boutique key={index} boutique={boutiqe} />
              ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getData
};

const mapStateToProps = state => ({
  data: state
});

Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Container;
