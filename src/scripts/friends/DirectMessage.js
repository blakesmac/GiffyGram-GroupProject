import { getMessages } from "../data/provider.js"
// import { saveMessage } from "../data/provider.js"
const mainContainer = document.querySelector(".giffygram")

const convertMessagetoDirectMessage = (msg) => {
    return `<div class="dMessage">
        <section class="message__contents">
        ${msg.senderId}
        </section>
        <section class="date__sent">
        ${msg.message}
        <br>
        ${msg.dateSent}
        </section>
        </div>
        ` 
}
export const DirectMessages = () => {
    const message = getMessages()
    let html = `
    <ul>
        ${
            message.map((msg) => convertMessagetoDirectMessage(msg)).join("")
        }
        </ul>
    `
    return html
}