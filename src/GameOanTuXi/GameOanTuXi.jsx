import React, { Component } from "react";
import { connect } from "react-redux";
import Computer from "./Computer";
import "./GameOanTuXi.css";
import KetQua from "./KetQua";
import Player from "./Player";

class GameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row mt-3">
          <div className="col-4 mt-3">
            <Player />
          </div>
          <div className="col-4 mt-3">
            <KetQua />
            <button
              onClick={() => this.props.playGame()}
              className="btn btn-success p-2 display-4 "
            >
              Play Game
            </button>
          </div>
          <div className="col-4 mt-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputer = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 50) {
          clearInterval(randomComputer);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameOanTuXi);
