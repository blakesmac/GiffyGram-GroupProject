import { getCurrentUser } from "../data/provider.js"
import { saveMessage, getUsers } from "../data/provider.js"
const mainContainer = document.querySelector(".giffyTop")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {
        console.log("it works")
        const recipientIndex = document.getElementById("recipientSelect").options.selectedIndex
        const recipientInput = document.getElementById("recipientSelect").options[recipientIndex].text
        const messageInput = document.querySelector("input[name='message']").value
        const d = new Date()
        const dateInput = `${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`
        const user = getUsers()
        const getCurrentUser = user[localStorage.getItem("gg_user")].name

        const dataForAPI = {
            recipientId: recipientInput,
            senderId: getCurrentUser,
            message: messageInput,
            dateSent: dateInput
        }

        saveMessage(dataForAPI)
    }
})

export const MessageForm = () => {
    let html = `
    <div class="directMessage">
    <button class="button" id="directMessage__close">X</button>
    <h1>Direct Message</h1>
    <div class="recipient_section">
        <label for="recipient" class="recipientLabel"> Recipient:</label>
        <select id="recipientSelect" name="directMessage__userSelect" class="message_input">
            <option value" "> Choose a Recipient:
        </option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
            <option value="six">6</option>
        </select>
    </div>
    <div class="message__section">
        <label for="message"> Message:</label>
            <input type="text" name="message" class="message__input" placeholder="Message to user" />
    </div>
    <button class="button" id="directMessage__submit">Save</button>
    <button class="button" id="directMessage__cancel">Cancel</button>
    </div>
    `
    return html
} 
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "directMessage__close"){
        
    }
})