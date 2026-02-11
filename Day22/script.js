let img = document.getElementById('img')
let icon = document.getElementById('icon')
let userName = document.getElementById('name')

img.addEventListener('dblclick' , like)

function like() {
        userName.innerHTML = "Hiroshi Nohara"
        setTimeout(() => {
            userName.innerHTML = '野原 ひろし'
            img.style.backgroundImage = "url('https://i.pinimg.com/1200x/27/37/c9/2737c955e7aea211d1acb278f9c0bb33.jpg')";
        }, 800);

    console.log("hello");
    icon.style.opacity = '1'
    icon.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
img.style.backgroundImage = "url('https://i.pinimg.com/736x/34/24/95/342495906dd445343493f4178a879340.jpg')";


    setTimeout(() => {
         icon.style.transform = 'translate(-50%, -400%) scale(1) rotate(60deg)'
    }, 800);
    setTimeout(() => {
        icon.style.opacity = '0'
        }, 1000);
    setTimeout(() => {
         icon.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
    }, 1200);
}