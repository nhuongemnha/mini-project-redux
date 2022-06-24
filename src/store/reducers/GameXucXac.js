const initialState = {
  taiXiu: true, // true là tài (từ 3>11), false là xỉu (<12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./assets/img/1.png" },
    { ma: 2, hinhAnh: "./assets/img/2.png" },
    { ma: 3, hinhAnh: "./assets/img/3.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6 + 1);
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./assets/img/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      state.tongSoBanChoi += 1;

      let tongSoDiem = state.mangXucXac.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && !state.taiXiu)
      ) {
        console.log(state.taiXiu);
        state.soBanThang += 1;
      }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
