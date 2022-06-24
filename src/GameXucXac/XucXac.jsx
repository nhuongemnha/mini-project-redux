import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((item, index) => {
      console.log(item);
      return (
        <img
          key={index}
          className="ml-4"
          style={{ width: 45, height: 45 }}
          src={item.hinhAnh}
          alt="1.png"
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.GameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
