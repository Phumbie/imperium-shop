export const mutations = {
  saveData(state) {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  categorySelect(state, data) {
    state.categorySelect = data;
  },
  paymentSent(state, data) {
    state.paymentSent = data;
  },
  updateCart(state, product) {
    state.cart = product;
    this.commit("saveData");
  },
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  }
};
