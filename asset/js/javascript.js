//animation effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } // }else{
        //     entry.target.classList.remove('show');
        // }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// handburger menu profile page

const edit = document.querySelector('.edit');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    edit.style.display = 'flex';
    edit.style.top = '0';

}

function close() {
    edit.style.top = '-100%';
}


// // change profile

// let profilePic = document.getElementById("profile-pics");
// let inputFile = document.getElementById("input-file");

// inputFile.onchange = function(){
//     profilePic.src  = URL.createObjectURL(inputFile.files[0]);
    
// }
// // change profile ends


// // verification code starts

// const inputs =document.querySelectorAll("input"),
//     button = document.querySelector("button");

// inputs.forEach((input, index1) => {
//     input.addEventListener("keyup", (e) => {
//         const currentInput = input,
//             nextInput = input.nextElementSibling,
//             prevInput = input.previousElementSibling;

//             //if the value has more the one character then clear it
//             if(currentInput.value.length > 1){
//                 currentInput.value = "";
//                 return;
//             }
//             //if the next input is disabled and the current value is not empty
//             //enable the next input and focus on it

//             if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
//                 nextInput.removeAttribute("disabled");
//                 nextInput.focus();
//             }

//             //focus the first input index is 0 on window load
//             if(e.key === "Backspace") {
//                 //iterate over all inputs again
//                 inputs.forEach((inputs, index2) => {
//                     if(index1 <= index2 && previnput){
//                         input.setAttribute("disabled", true);
//                         currentInput.value = "";
//                         prevInput.focus();
//                     }
//                 });
//             }
//     });
// });

// //focus the first input which index is 0 on window load
// window.addEventListener("load", () => inputs[0].focus());   




// status carousel

var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
console.log(screen.width)

