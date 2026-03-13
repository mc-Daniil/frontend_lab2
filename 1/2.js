function loadImage(url, successCallback, errorCallback) {
    let image = document.createElement("img");
    image.src = url;

    image.onload = function () {
        successCallback(image);
    };

    image.onerror = function () {
        errorCallback();
    };  
}

let urls = [];

for (let i = 0; i < 5; i++) {
    let url = prompt("Enter url №" + (i + 1));
    
    if (url === null) {
        urls.push("");
    } 
    else {
        urls.push(url);
    }
}

function load(index) {
    if (index >= urls.length) {
        return;
    }

    loadImage(
        urls[index],
        function (image) {
            document.body.appendChild(image);
            load(index + 1);
        },
        function () {
            let errorText = document.createElement("p");
            errorText.textContent = "Can't load image";
            document.body.appendChild(errorText);
            load(index + 1);
        }
    );
}

load(0);

// https://spbcult.ru/upload/iblock/7b9/9n0tc4etzlpw3t1h1021gjzhwl226j5k.jpg
// https://opis-cdn.tinkoffjournal.ru/mercury/welcome-to-2025-01.png
// https://img.rl0.ru/afisha/400x-/daily.afisha.ru/uploads/images/c/cf/ccf7a86d37854b4e911c67a6d10c024b.jpg
// https://i.pinimg.com/236x/80/b7/81/80b781691d46d7f7a352a349ff48515f.jpg
// https://jrnlst.ru/wp-content/uploads/2023/03/cover_6-1024x644.jpg