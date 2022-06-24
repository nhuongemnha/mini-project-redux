import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số Bàn Thắng: {""}
          {this.props.soBanThang}
        </div>
        <div className="display-4 text-success">
          Số Bàn Chơi: {""}
          {this.props.soBanChoi}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameOanTuXi.ketQua,
    soBanThang: state.GameOanTuXi.soBanThang,
    soBanChoi: state.GameOanTuXi.soBanChoi,
  };
};
export default connect(mapStateToProps)(KetQua);
