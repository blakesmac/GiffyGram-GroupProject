import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { fetchUser, fetchGifRequest, fetchMessages } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));

  fetchUser()
  .then(() => {
      fetchMessages()
  .then(() => {
    fetchGifRequest()
    .then(() => {
      if (user) {
        applicationElement.innerHTML = GiffyGram();
      } else {
        applicationElement.innerHTML = LoginForm();
      }
    });
    });
  });
};
renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  renderApp();
});
