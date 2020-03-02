// const navBar = document.getElementById('nav');
// let sticky = navBar.offsetTop;

// let determineSticky = () => {
//     if(window.pageYOffset >= sticky) {
//         navBar.classList.add('nav__sticky');
//     } else {
//         navBar.classList.remove('nav__sticky')
//     }
// }

// window.onscroll = determineSticky

underDev()

function contactUs() {
    location.replace('http://www.zeroequalsoneequalsinfinity.org/contact.html')
}


function underDev() {
    alert("This website is currently under development! some of the features may not work or look production ready. Please bare with us!")
}


let handleFormSubmit = (e) => {
    e.preventDefault;
    let form = document.getElementsByClassName('contact__form');
    let contactEmail = form.child[0];
    let subject = form.child[1];
    let message = form.child[2];

    const data = {
        contact: contactEmail,
        subject: subject,
        message: message
    };

    data = JSON.stringify(data);

    sendEmail(data)
}

let sendEmail = (emailContent) => {
    fetch('https://www.herokuapp.suitcasebackend.com/contact', {
        method: 'POST',
        headers: {
            contentType: 'application/json',

        },
        data: emailContent
    }).then(res => console.log(res))
}