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
    sla += 10;
    update();
}

function sub() {
    sla -= 10;
    update();
}

function update() {
    document.getElementById("print").textContent = sla + coiso;
}

let sla2 = 0;

function add2() {
    sla2 += 10;
    update2();
}

function sub2() {
    sla2 -= 10;
    update2();
}

function update2() {
    document.getElementById("print2").textContent = sla2 + coiso;
}

