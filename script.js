// Sidebar
const circle1 = document.getElementById('circle-1')
const circle2 = document.getElementById('circle-2')
const circle3 = document.getElementById('circle-3')
const circle4 = document.getElementById('circle-4')
const circleNumber1 = document.getElementById('circle-number-1')
const circleNumber2 = document.getElementById('circle-number-2')
const circleNumber3 = document.getElementById('circle-number-3')
const circleNumber4 = document.getElementById('circle-number-4')

// Step 1
const step1Container = document.getElementById('step-1')
const inputEmail = document.getElementById('input-email')
const inputName = document.getElementById('input-name')
const inputPhone = document.getElementById('input-phone')
let email;
let phone;
let names;

// Step 2
const plan1 = document.getElementById('plan1')
const plan2 = document.getElementById('plan2')
const plan3 = document.getElementById('plan3')



// buttons
const btn = document.getElementById('next');
const btnBack = document.getElementById('back');
let currentStep = 1;

const nextStep = () => {
    if (currentStep < 4) {
        currentStep++;
        checkStep();
    }
}

const previousStep = () => {
    if (currentStep > 1) {
        currentStep--
        checkStep()
    }
}

const checkStep = () => {
    const circles = [circle1, circle2, circle3, circle4];
    const circleNumbers = [circleNumber1, circleNumber2, circleNumber3, circleNumber4];

    for (let i = 0; i < circles.length; i++) {
        if (i === currentStep - 1) {
            circles[i].classList.add('current-step');
            circleNumbers[i].classList.add('current-step-title');
        } else {
            circles[i].classList.remove('current-step');
            circleNumbers[i].classList.remove('current-step-title');
        }
    }
    if (currentStep === 2) {
        takeInfos()
        renderStep2()
    }
    if (currentStep === 3) takeInfos()

}
// Step 1
const takeInfos = () => {
    email = inputEmail.value;
    phone = inputPhone.value;
    names = inputName.value;

    if (names, phone, email === '')
        console.log(email, phone, names);
}
// step1Container.classList.add('hidden')
const renderStep2 = () => {

}
btn.addEventListener('click', nextStep)
btnBack.addEventListener('click', previousStep)
