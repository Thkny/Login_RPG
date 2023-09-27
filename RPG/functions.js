const inputFile = document.querySelector("#picture_input");
const pictureImage = document.querySelector(".picture");
const pictureImageTxt = "Escolha uma imagem"; pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture_img");

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});


let sla = 0;
let coiso = '%'

function add() {
    if (sla < 100) {
        sla += 10;
        update();
    }
}

function sub() {
    if (sla > 1) {
        sla -= 10;
        update();
    }
}

function update() {
    document.getElementById("print").textContent = sla + coiso;
}

let sla2 = 0;

function add2() {
    if (sla2 < 100) {
        sla2 += 10;
        update2();
    }
}

function sub2() {
    if (sla2 > 1) {
        sla2 -= 10;
        update2();
    }
}

function update2() {
    document.getElementById("print2").textContent = sla2 + coiso;
}

let ponto = 15
let pts = ' pts'
let valor1 = 0
let valor2 = 0
let valor3 = 0
let valor4 = 0
let valor5 = 0

function updateValue() {
    document.getElementById("pontos").textContent = ponto + pts
    document.getElementById("valor1").textContent = valor1
    document.getElementById("valor2").textContent = valor2
    document.getElementById("valor3").textContent = valor3
    document.getElementById("valor4").textContent = valor4
    document.getElementById("valor5").textContent = valor5
}

document.getElementById("add1").addEventListener('click', function () {
    if (valor1 < 15) {
        valor1++;
        ponto--;
        updateValue()
    } else {
        alert('Pontos Insuficientes.')
    }
})

document.getElementById("sub1").addEventListener('click', function () {
    if (ponto < 15) {
        valor1--;
        ponto++;
        updateValue()
    } else {
        alert('Pontos Restaurados.')
    }
})



document.getElementById("add2").addEventListener('click', function () {
    if (valor2 < 15) {
        valor2++;
        ponto--;
        updateValue()
    } else {
        alert('Pontos Insuficientes.')
    }
})

document.getElementById("sub2").addEventListener('click', function () {
    if (ponto < 15) {
        valor2--;
        ponto++;
        updateValue()
    } else {
        alert('Pontos Restaurados.')
    }
})



document.getElementById("add3").addEventListener('click', function () {
    if (valor3 < 15) {
        valor3++;
        ponto--;
        updateValue()
    } else {
        alert('Pontos Insuficientes.')
    }
})

document.getElementById("sub3").addEventListener('click', function () {
    if (ponto < 15) {
        valor3--;
        ponto++;
        updateValue()
    } else {
        alert('Pontos Restaurados.')
    }
})



document.getElementById("add4").addEventListener('click', function () {
    if (valor4 < 15) {
        valor4++;
        ponto--;
        updateValue()
    } else {
        alert('Pontos Insuficientes.')
    }
})

document.getElementById("sub4").addEventListener('click', function () {
    if (ponto < 15) {
        valor4--;
        ponto++;
        updateValue()
    } else {
        alert('Pontos Restaurados.')
    }
})



document.getElementById("add5").addEventListener('click', function () {
    if (valor5 < 15) {
        valor5++;
        ponto--;
        updateValue()
    } else {
        alert('Pontos Insuficientes.')
    }
})

document.getElementById("sub5").addEventListener('click', function () {
    if (ponto < 15) {
        valor5--;
        ponto++;
        updateValue()
    } else {
        alert('Pontos Restaurados.')
    }
})