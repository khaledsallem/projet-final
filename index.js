// function for navBar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
// function for video autoplay home page
window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
        await video.play();
    } catch (err) {
        video.controls = true;
    }
});

// form validation
function validateForm() {
    if (document.myForm.fname.value == "") {
        alert("Please provide your name !");
        document.myForm.fname.focus();
        return false;
    }

    if (document.myForm.number.value == "") {
        alert("Please provide your phone number !");
        document.myForm.number.focus();
        return false;
    }

    if (document.myForm.email.value == "") {
        alert("Please provide your email !");
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.message.value == "") {
        alert("Please provide your letter !");
        document.myForm.message.focus();
        return false;
    }

}

// add-cart 

var articles = document.querySelectorAll('.add-cart')

function calSum() {
    let sum = 180;
    for (var i = 0; i < articles.length - 1; i++) {
        price = parseInt(articles[i].children[3].children[0].innerHTML)
        sum += price
    }

    document.querySelector('.price').innerHTML = sum;
}

calSum();

for (var i = 0; i < articles.length - 1; i++) {
    let qnt = articles[i].children[1];
    let prx = articles[i].children[3].children[0];

    articles[i].children[0].addEventListener('click', function () {
        if (parseInt(qnt.innerHTML) > 0) {
            qnt.innerHTML = parseInt(qnt.innerHTML) - 1
            prx.innerHTML = parseInt(qnt.innerHTML) * 180
        }
        calSum();
    })

    articles[i].children[2].addEventListener('click', function () {
        qnt.innerHTML = parseInt(qnt.innerHTML) + 1
        prx.innerHTML = parseInt(qnt.innerHTML) * 180
        calSum();
    })


}