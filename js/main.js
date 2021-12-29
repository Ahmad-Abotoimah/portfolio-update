//select landing elements
const landingpagecover = document.querySelector(".landing-page");
const myGear = document.querySelector("#my-gear");
const settingBox = document.querySelector("#setting-box");
const colorsArray = document.querySelectorAll(".colors-list li");
const switchImagesStyleArr = document.querySelectorAll('.images-list li');
let backgroundSwitch = 'true';
let interval;
// start settingBox


/*landing switching*/
let CustomerSwitch = localStorage.getItem('switch');
if (CustomerSwitch !== null) {
    backgroundSwitch = CustomerSwitch;
    if (backgroundSwitch === 'true') {
        switchImagesStyleArr[0].classList.add('active');
        switchImagesStyleArr[1].classList.remove('active');
    } else {
        switchImagesStyleArr[1].classList.add('active');
        switchImagesStyleArr[0].classList.remove('active');
    }
} else {
    backgroundSwitch = 'true'
}
const addSwitcher = () => {
    if (backgroundSwitch === 'true') {
        let imgsArray = [
            "0.png", "1.png", "2.png", "3.png"
        ];
        landingpagecover.style.backgroundImage = "url('imgs/2.png')";
        interval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingpagecover.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        }, 10000)
    }

}
addSwitcher()
switchImagesStyleArr.forEach(li => {
    li.addEventListener("click", (e) => {
        // set images
        if (e.target.dataset.value == "yes") {
            backgroundSwitch = 'true';
            localStorage.setItem('switch', 'true')
            addSwitcher()

        } else {
            backgroundSwitch = 'false';
            localStorage.setItem('switch', 'false')
            clearInterval(interval)
            landingpagecover.style.backgroundImage = 'url("imgs/2.png")'
        }
        switchImagesStyleArr.forEach(x => {
            li.classList.add('active');
            if (x != li) {
                x.classList.remove('active');
            }
        })
    })
})

let count = 0;
window.addEventListener("load", () => {
    count = 0;
    return count;
});

myGear.addEventListener("click", () => {
    count++;
    if (count % 2 == 0 || count == 0) {
        settingBox.style.left = "-220px";
        myGear.style.right = "-33px";
        myGear.style.fontSize = "20px";
        myGear.innerHTML = "Try"
        myGear.classList.remove('fa-spin')
    } else if (count % 2 != 0 && count != 0) {
        settingBox.style.left = "0";
        myGear.style.right = "5px";
        myGear.style.fontSize = "32px";
        myGear.innerHTML = ""
        myGear.classList.add('fa-spin')
    }

})
let customerColor = localStorage.getItem("main-color")
if (customerColor !== null) {
    document.documentElement.style.setProperty('--main--color', customerColor);
} else {
    document.documentElement.style.setProperty('--main--color', '#f44336')
}
colorsArray.forEach(li => {
    li.addEventListener("click", (e) => {
        // set main-color
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        localStorage.setItem("main-color", e.target.dataset.color)
        li.classList.add('active');
        colorsArray.forEach(x => {
            if (x != li) {
                x.classList.remove('active');
            }

        })
    })
})

// end settingBox