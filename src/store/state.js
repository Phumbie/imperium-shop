let cart = window.localStorage.getItem("cart");
export const state = {
  cart: cart ? JSON.parse(cart) : [],
  customer: null,
  token: localStorage.getItem("token") || "",
  user: localStorage.getItem("user") || "",
  passPhrase: "!imP3riuM@.132]13",
  paystackkey: process.env.VUE_APP_PAYSTACK_KEY,
  categorySelect: "",
  paymentSent: false,
  notificationSystem: {
    options: {
      ballon: {
        balloon: true,
        position: "bottomCenter"
      },
      info: {
        position: "bottomCenter"
      },
      success: {
        position: "bottomCenter"
      },
      warning: {
        position: "bottomCenter"
      },
      error: {
        position: "bottomCenter"
      }
    }
  }
};

export default state;
