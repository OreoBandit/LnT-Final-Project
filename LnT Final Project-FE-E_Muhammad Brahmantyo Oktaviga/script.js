const firebaseConfig = {
    apiKey: "AIzaSyAsxpbvGWn-OnnKRZn5P_XnUsna-jYnepI",
    authDomain: "lntfinalproject---brahmantyo-o.firebaseapp.com",
    databaseURL: "https://lntfinalproject---brahmantyo-o-default-rtdb.firebaseio.com",
    projectId: "lntfinalproject---brahmantyo-o",
    storageBucket: "lntfinalproject---brahmantyo-o.appspot.com",
    messagingSenderId: "966731826373",
    appId: "1:966731826373:web:efbc8771c5ba1400235cac",
    measurementId: "G-VNXJ4E6YJH"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref('user');




const tombol = document.getElementById('buttonSubmit');
let email;
let nama;
let phone;
let bener;
let tempC = document.querySelector('select');

function emailValidator(email) {
    let adCount = 0;
    if (!email) {
        return -1;
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            adCount++;
            if (adCount > 1) {
                return -1;
            }
        }
        else if (i == email.length - 1 && adCount == 0) {
            return -1;
        }
    }
    return 1;
}

function nameValidator(name) {
    if (name.length < 3) {
        return -1;
    }
    return 1;
}

function phoneValidator(phone) {
    if (phone[0] == '0' && phone[1] == '8' && phone.length < 14) {
        return 1;
    }
    return -1;
}


let rSec = document.getElementById('sucess-regis');
rSec.classList.add('remove-warning');

let em = document.getElementById('emailWarning');
em.classList.add('remove-warning');

let nm = document.getElementById('nameWarning');
nm.classList.add('remove-warning');

let pn = document.getElementById('phoneWarning');
pn.classList.add('remove-warning');

let st = document.getElementById('selectionWarning');
st.classList.add('remove-warning');



tombol.addEventListener('click', function (event) {


    let escape = 0;
    email = document.getElementById('inputEmail').value
    nama = document.getElementById('inputNama').value
    phone = document.getElementById('inputPhone').value
    let finalC = tempC.options[tempC.selectedIndex].value;

    //=====EMAIL=====
    if (emailValidator(email) == 1) {
        em.classList.add('remove-warning');
        escape++;
    }
    else {
        em.classList.remove('remove-warning');
        escape--;
    }

    //=====NAME=====
    if (nameValidator(nama) == 1) {
        nm.classList.add('remove-warning');
        escape++;
    }
    else {
        nm.classList.remove('remove-warning');
        escape--;
    }

    //=====PHONE=====
    if (phoneValidator(phone) == 1) {
        pn.classList.add('remove-warning');
        escape++;
    }
    else {
        pn.classList.remove('remove-warning');
        escape--;
    }

    //untuk selection
    if (finalC.localeCompare("select event") == 0) {
        st.classList.remove('remove-warning');
        escape--;
    }
    else {
        st.classList.add('remove-warning');
        escape++;
    }

    if (escape == 4) {
        console.log("udah bener");
        rSec.classList.remove('remove-warning');

        let newUser = database.push();
        newUser.set({
            nama: nama,
            email: email,
            phone: phone,
            selection: finalC,
        });
    }
    event.preventDefault();
});