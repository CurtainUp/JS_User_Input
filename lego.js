let creator = document.querySelector("#lego__creator")
let color = document.querySelector("#lego__color")
let shape = document.querySelector("#lego__shape")
let creation = document.querySelector("#lego__creation")

let clearAll = () => {
	creator.value = ""
	color.value = ""
	shape.value = ""
	creation.value = ""
}

document.querySelector('button[class="btn lego__save"]').addEventListener("click", event => {

  // Once you have collected all the values, build your data structure
  const legoToSave = {
		"creator": creator.value,
		"color": color.value,
		"shape": shape.value,
		"creation": creation.value
  }

  fetch("http://localhost:3000/legoCreations", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
    })

    clearAll()

    console.log("Creation saved!")
})