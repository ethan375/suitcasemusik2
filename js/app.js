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


let cryptos = document.getElementsByClassName('crypto_icon');

for(let i = 0; i < cryptos.length; i++) {
    cryptos[i].addEventListener('click', () => {
        determineCrypto(cryptos[i]);
    })
}

function determineCrypto(crypto) {
    let value = crypto.innerText
    
    if(value == " Bitcoin") {
        createModal("bitcoin");
    } else if(value == " Ethereum") {
        createModal("ethereum");
    } else if(value == " XRP") {
        createModal("xrp");        
    }

}


function createModal(crypto) {
    let modal = document.createElement('div');
    let image = document.createElement('img');
    let account = document.createElement('p');
    let close = document.createElement('span');
    close.innerHTML = '&times';
    close.classList.add("close")

    if(crypto == 'bitcoin') {
        image.src = "../img/crypto-qr/bitcoin.png";
        account.innerHTML = "1Kkxe4AC2Yg81DJjJDiYh5wAxcPTBu7t3C";
    } else if(crypto == 'ethereum') {
        image.src = '../img/crypto-qr/etherium.png';
        account.innerHTML = '0xC418AD6Df786Bd829FB87760104081764445d606';
    } else if(crypto == 'xrp') {
        image.src = '../img/crypto-qr/xrp.png';
        account.innerHTML = 'rnRH89r5xK8GCmvEzQyeeLcchg8LorAkrg';
    }
    modal.classList.add('modal-show');

    modal.appendChild(image);
    modal.appendChild(account);
    modal.appendChild(close)
    document.getElementsByTagName("body")[0].appendChild(modal);

    let closeModal = document.getElementsByClassName('close')

    for(let i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener('click', hideModal)
    }
}

function hideModal() {
    let body = document.getElementsByTagName("body")[0];
    let modal = document.getElementsByClassName('modal-show');

    if (modal.length > 1) {
        for(let i = 0; i < modal.length; i++) {
            body.removeChild(modal[i])
        }
    } else {
        body.removeChild(modal[0])
    }
}