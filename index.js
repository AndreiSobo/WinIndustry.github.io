import { refreshHelloDiv } from "./functions/utility/takingUserInfo.js";
import storageAvailable from "./functions/utility/checkForLocalStorage.js";
import resourcesLink from "./functions/func/dropdownMenu.js";

let user = {};

(function () {
  if (storageAvailable("localStorage") === true) {
    let storedUser = JSON.parse(localStorage.getItem("storageUser"));
    if (storedUser !== null) {
      user = storedUser;
      const enterDetailsDiv = document.querySelector(".enter-details");
      if (enterDetailsDiv) {
        refreshHelloDiv(user.name);
      }
    }
  }
})();

export default user;
