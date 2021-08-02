import { deletePost, saveGif, getUsers } from "../data/provider.js"
// import { getCurrentUser } from "../data/provider.js"
// import { deletePost } from "../data/provider.js"

const mainContainer = document.querySelector(".giffyTop")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newPostSubmit") {
        const postTitle = document.querySelector("input[name='postTitle']").value
        const postURL = document.querySelector("input[name='postURL']").value
        const postDescription = document.querySelector("textarea[name='postDescription']").value
        const d = new Date()
        const datePosted = `${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`
        const user = getUsers()
        const postUser = user[localStorage.getItem("gg_user")].name
        // Make an object out of the user input
        const dataToSendToAPI = {
            title: postTitle,
            url: postURL,
            description: postDescription,
            userId: postUser,
            datePosted: datePosted
        }
        // Send the data to the API for permanent storage
        saveGif(dataToSendToAPI)
    }
})

document.addEventListener("click", click=>{
    if(click.target.id.startsWith("deleteThis")) {
        const[,gifItemId]= click.target.id.split("--")
        deletePost(parseInt(gifItemId))
        console.log("the delete button has been pushed")
    }
})



export const postForm = () => {
    let html = `
    <div class='newPost'>
        <div>
            <input value name="postTitle" class="newPost__input" placeholder="Title"></input>
        </div>
        <div>
            <input value name="postURL" class="newPost__input" placeholder="URL of gif"></input>
        </div>
        <div>
            <textarea value name='postDescription' class="newPost__input" placeholder="story behind your gif..."></textarea>
        </div>
        <div>
            <button id="newPostSubmit" class="newPost__Submit">Submit</button>
            <button class="newPost__cancel">Cancel</button>
        </div>
    </div>`

    return html
}

