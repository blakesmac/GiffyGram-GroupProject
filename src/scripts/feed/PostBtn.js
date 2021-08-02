import { postForm } from "./postForm.js"


export const postBtn = () => {
    return `
    <div class='newPost__drop'>
        <button class="miniMode" id='miniMode'>
            Have a gif to post?
        </button>
    </div>`
}


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id==="miniMode") {
        console.log("the post button has been pushed")
        applicationElement.innerHTML = postForm()
    }
})

const applicationElement=document.querySelector(".giffyTop") 


  