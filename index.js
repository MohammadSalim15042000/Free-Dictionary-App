const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const mainBox = document.querySelector(".card")

const searchBtn = document.querySelector("#btn")
const sound = document.querySelector("#sound")



searchBtn.addEventListener("click",()=>{
   
    const inputWord = document.querySelector("#input-word").value
    const p = fetch(`${url}${inputWord}`)
  p.then((response)=>{
   return response.json()
  }).then((data)=>{
    console.log(data)
    mainBox.innerHTML = `
    <div class="upper">
        <input type="text" placeholder="Type the word here..." id="input-word">
        <button id="btn">Search</button>
    </div>
    <div class="sample">
<h2>${inputWord}</h3>
    <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>

    </div>
    <div class="pos">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/ ${data[0].phonetic} /</p>
    </div>
    <div class="para">
        <p>${data[0].meanings[0].definitions[0].definition}</p>
    </div>
    <div class="example">
        <p> ${data[0].meanings[0].definitions[0].example } || ""</p>
    </div>
    `
  sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
  console.log(sound)
   
   
  }).catch(()=>{
    console.log("word not found")
  })
})


function playSound(){
    sound.play()
}