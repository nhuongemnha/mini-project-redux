import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframes = `@keyframes randomItem${Date.now()} {
   0% {top: -50px;}
   25% {top: 80px;}
   50% {top: -50px;}
   75% {top: 80px;}
   100% {top: 0;}
  }`;
    return (
      <div className="playerGame">
        <style>{keyframes}</style>
        <div className="theThink">
          <img
            style={{
              position: "absolute",
              left: "30%",
              width: 100,
              paddingTop:40,
              animation: `randomItem${Date.now()} 0.1s`,
            }}
            src={this.props.computer.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./assets/image/playerComputer.png"
          alt="player.png"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.GameOanTuXi.computer,
  };
};

export default connect(mapStateToProps)(Computer);
