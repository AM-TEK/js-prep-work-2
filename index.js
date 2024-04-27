
function getPasswordLength() {
    const length = document.getElementById("length").value
    return Number(length);
}

function getProperties() {
    // const lowercase = document.getElementById("lowercase")
    // const uppercase = document.getElementById("uppercase")
    // const numbers = document.getElementById("numbers")
    // const special = document.getElementById("special")

    const ids = ["lowercase", "uppercase", "numbers", "special"]
    const properties = {}

    // loop through ids array, set the element based off string id, set key/value in properties object
    // {"lowercase": true}
    for (const id of ids) {
        const element = document.getElementById(id)
        properties[id] = element.checked
    }
    return properties;
}

function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65;
    let chars = []

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
    }
    return chars;
}

function getNumbers() {
    const numbers = []

    for (let i = 0; i < 10; i++) {
        numbers.push(i)
    }
    return numbers;
}

const lowercaseChars = getChars(true)
const uppercaseChars = getChars(false)
const numbers = getNumbers()
const special = ["!","@","#","$","%","^","&,","*","(",")"]
function generatePassword() {
    const length = getPasswordLength()
    const properties = getProperties()

    //create array of all the different properties checked
    const characters = []
    if (properties.lowercase) characters.push(...lowercaseChars);
    if (properties.uppercase) characters.push(...uppercaseChars);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);
    if (characters.length === 0) {
        return alert("You must select at least 1 property.")
    }


    let password = []
    //will implement array methods and join password to string
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        const char = characters[randomIndex]
        password.push(char)
    }
        const passwordString = password.join("")
        document.getElementById("password").innerHTML = "<p>" + passwordString + "</>";
        // const element = document.getElementById("password")
        // element.appendChild(<p>{passwordString}</p>)
}