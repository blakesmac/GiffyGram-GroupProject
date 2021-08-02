const API = "http://localhost:3000"
const mainContainer = document.querySelector(".giffygram")
// added message into the applicationState
//changed users to an array [] instead of object {}
const applicationState = {
  currentUser: {x:1},
  users: [],
  message: [],
  showMessages: false,
  gifItems: [],
  feed: [
    {  
      chosenUser: null,
      displayFavorites: false,
      displayMessages: false
    }
]
}

//function that grabs all users from giffygram.json
export const fetchUser = () => {
  return fetch (`${API}/users`)
  .then(response => response.json())
  .then(
    (loggedUsers) => {
        applicationState.users = loggedUsers
    }
  )
}
export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const getCurrentUser = () => {
    return {...window.localStorage.getItem('gg_user')}
}
export const setShowMessages = (isShown) => {
    return applicationState.showMessages = isShown 
}
export const getShowMessages = () => {
    return applicationState.showMessages
} 
export const fetchMessages = () => {
    return fetch(`${API}/message`)
    .then(res => res.json())
    .then(
        (messageRequest) => {
            applicationState.message = messageRequest
        }
    )
}

export const getMessages = () => {
    return applicationState.message.map(msg => ({...msg}))
}
export const saveMessage = (userSentMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSentMessage)
    }
    return fetch(`${API}/message`, fetchOptions)
    .then(res => res.json())
    .then(()=> {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
//saveGif takes inputs from postForm.js and saves to database


//added this fetch and save gifs
export const fetchGifRequest = () => {
  return fetch(`${API}/gifItems`)
  .then(response => response.json())
  .then(
    (gifRequest) => {
      applicationState.gifItems = gifRequest
      // document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

export const saveGif = (userSentGif) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userSentGif)
  }
  
  return fetch(`${API}/gifItems`, fetchOptions)
  .then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

export const getGifs = () => {
  return applicationState.gifItems.map(gifItem => ({...gifItem}));
}

// this function will give us the abiity to delete posts
export const deletePost = (id)=> {
  return fetch(`${API}/gifItems/${id}`, {method: "DELETE"})
  .then(
    () => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}


// export const postMessage = () => {
//   const 
// }

// debugger
// export const getCurrentUserById = (id, arr) => { 
//   return arr.find(x => x.id === id);
// }
// getCurrentUserById(window.localStorage.getItem('gg_user'), applicationState.users)
