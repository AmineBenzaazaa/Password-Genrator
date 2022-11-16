const lengthSlider = document.querySelector('.pass-length input');
generateBtn = document.querySelector('.generate-btn');
options = document.querySelectorAll('.option input');
passwordInput = document.querySelector('.input-box input');
indicator = document.querySelector('.pass-indicator');

const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const updateSlider = () =>{
    const sliderValue = lengthSlider.value;
    document.querySelector('.pass-length span').innerHTML = sliderValue;
    console.log(sliderValue);
}

const generatePassword = () => {
    let password = "",
    passStatic = "",
    length = lengthSlider.value;
   
   options.forEach(option => {
    if(option.checked){
        if (option.id !== "exc-duplicate" && option.id !== "spaces"){
            passStatic += characters[option.id]
        }else if(option.id === "spaces"){
            passStatic += ` ${passStatic} `;
        }else{
            excludeDuplicate = true;
        }
    }
   });

//    for (let index = 0; index < length; index++) {
//     password += passStatic[Math.floor(Math.random() * passStatic.length)];

//     passwordInput.value = password;
//    }
//    const updatePassIndicator = () => {
//     indicator.id = length.value <= 6 ? "weak" : length.value <= 12 ? "medium" : "strong";
//    }
   length <= 6 ? indicator.style.backgroundColor = "red" : length <= 12 ? indicator.style.backgroundColor = "orange" : indicator.style.backgroundColor = "green";
   
   console.log(password);
}
updateSlider();

lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click',generatePassword);
