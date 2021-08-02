import { getGifs } from "../data/provider.js";
import { deletePost } from "../data/provider.js";
import { getUsers } from "../data/provider.js";
const applicationElement = document.querySelector(".giffy")


export const giffyPost = () =>{
  
  const user = getUsers()
  const gifItems = getGifs()
  let html=`
    <ul class="">
      ${gifItems.map(gifItem => {
        return`
          <div>
            <section class="post__remark">
             <h1> ${gifItem.title}</h1>
            </section>
            <section class="post__image">
            <img src="${gifItem.url}" alt="">
            </section>
            <section class="post__tagline">
              ${gifItem.description}
            </section>
            <section class="post__tagline">
               Posted by ${gifItem.userId} on ${gifItem.datePosted}
            </section>
            <section class="post__favdelete">
            <img class="star" src="./images/favorite-star-blank.svg" alt="Message icon"/> <img class="deleteThis" src="./images/block.svg" alt="Message icon" id="deleteThis--${gifItem.id}"/>
          </section>
          </div>
          `
        }).join("")
      }
    </ul>
  `



  return html
}