import { DirectMessages } from "./friends/DirectMessage.js"
import {NavBar} from "./nav/navBar.js"
import {postBtn} from "./feed/PostBtn.js"
import {MessageForm} from "./message/MessageForm.js"
import {postForm} from "./feed/postForm.js"
import { giffyPost } from "./feed/PostList.js"
import { getShowMessages } from "./data/provider.js"

export const GiffyGram = () => {
let page = ""
const showMessages = getShowMessages()
if (showMessages === true) {
 page = DirectMessages()
} else {
 page = giffyPost()
}
  return `
  <div class="giffygram__feed">
    <section class="messageForm">
    ${NavBar()}
    </section>
    <section class="messageFeed">
    ${postBtn()}
    </section>
    <section class="postForm">
    ${page}
    </section>
  </div>
  `
}


