import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink">
          <img
            style={{ width: 100,paddingTop:40 }}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt=""
          />
          {console.log(this.props.mangDatCuoc.find((item) => item.datCuoc))}
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./assets/image/player.png"
          alt="player.png"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = null;
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div key={index} className="col-4">
                <button
                  onClick={() => this.props.datCuoc(item.ma)}
                  style={border}
                  className="btnItem"
                >
                  <img
                    style={{ width: 35, height: 35 }}
                    src={item.hinhAnh}
                    alt=""
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.GameOanTuXi.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (ma) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        ma,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
