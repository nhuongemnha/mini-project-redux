import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";

class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center display-4 mt-5 ">
          Bài tập game Xúc Xắc
        </div>
        <div className="row text-center">
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame btn btn-primary"
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame btn btn-primary"
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi">
          <ThongTinTroChoi />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 mt-5 display-4"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      dispatch({
        type: "DAT_CUOC",
        taiXiu,
      });
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);
