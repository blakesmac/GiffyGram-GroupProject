import { DirectMessages } from "../friends/DirectMessage.js";
import { MessageForm } from "../message/MessageForm.js";
import { setShowMessages, getMessages } from "../data/provider.js";
const mainContainer = document.querySelector(".giffygram");
export const NavBar = () => {
  const message = getMessages();

  // Show main main UI
  return `
    <header>
    <nav class="navigation">
        <div class="navigation__item navigation__icon">
          <img src="./images/pb.png" alt="Giffygram icon" id="logo"/>
        </div>
        <div class="navigation__item navigation__name"
          <h1>Giffygram</h1>
        </div>
        <div class="navigation__message">
        <img type="image" name="openMessage" src="./images/fountain-pen.svg" alt="Message icon" id="pen"/>
        </div>
        <button id="logout"class="navigation__logout navigation__name">Logout</button>
        <button type="button" id="messages" class="notification__count"
        <h1>${message.length}</h1>
        </button>
        
    </header>`;
};
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "messages") {
    setShowMessages(true);
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logo") {
    console.log("it was clicked");
    location.reload();
  }
});

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "pen") {
    console.log("the pen was clicked");
    applicationElement.innerHTML = MessageForm();
  }
});

const applicationElement = document.querySelector(".giffyTop");

//event listener to logout
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logout") {
    console.log("logout was clicked")
    window.localStorage.removeItem("gg_user")
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  }
})
