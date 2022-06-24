import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Bạn Chọn :{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div className="display-4">
          Bàn Thắng :
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng Số Bàn Chơi :{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.GameXucXac.soBanThang,
    tongSoBanChoi: state.GameXucXac.tongSoBanChoi,
    taiXiu: state.GameXucXac.taiXiu,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
