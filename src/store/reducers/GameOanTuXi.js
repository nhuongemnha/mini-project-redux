const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./assets/image/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./assets/image/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./assets/image/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love u 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./assets/image/bua.png", datCuoc: false },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO":
      // Cách 1:
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.ma) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangDatCuocUpdate;
      // Cách 2:
      // let mangDatCuocUpdate = [...state.mangDatCuoc];
      // mangDatCuocUpdate = mangDatCuocUpdate.map((item) => {
      //   return { ...item, datCuoc: false };
      // });
      // const index = mangDatCuocUpdate.findIndex(
      //   (item) => item.ma === action.ma
      // );
      // if (index !== -1) {
      //   mangDatCuocUpdate[index].datCuoc = true;
      // }
      // state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    case "RAN_DOM":
      let soNgauNhien = Math.floor(Math.random() * state.mangDatCuoc.length);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    case "END_GAME":
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => {
        return item.datCuoc === true;
      });
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa nhau!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Bạn Thắng rồi nha!! :*";
            state.soBanThang += 1;
          } else {
            state.ketQua = "Tiếc Quá Thua Rồi!!!";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Tiếc Quá Thua Rồi!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Hòa Nhau!!!";
          } else {
            state.ketQua = "Bạn Thắng rồi nha!! :*";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Bạn Thắng rồi nha!! :*";
            state.soBanThang += 1;
          } else if (computer.ma === "bao") {
            state.ketQua = "Tiếc Quá Thua Rồi!!!";
          } else {
            state.ketQua = "Hòa Nhau!!!";
          }
          break;
        default:
      }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
