//`if else` statement for the button on the homepage to change the background photo
const buttonOne = document.getElementById('background-button-1');
const buttonTwo = document.getElementById('background-button-2');
const buttonThree = document.getElementById('background-button-3');
const buttonFour = document.getElementById('background-button-4');
const backgroundImg = document.getElementById(`homepage-section-1`);
const logo = document.getElementById(`logo`);

let imageOne = `./images/hotel_front.jpeg`
let imageTwo = `./images/hotel_lobby.jpeg`
let imageThree = `./images/hotel_restaurant_1.jpeg`
let imageFour = `./images/room_3_bedroom.jpeg`

document.addEventListener(`click`, function(changeBackground){
    var targetElement = changeBackground.target
      if (targetElement === buttonOne) {
        backgroundImg.style.backgroundImage = 'url(' + imageOne + ')';
        buttonOne.style.backgroundColor = 'rgba(207, 196, 182, 0.5)';
        buttonTwo.style.backgroundColor = 'transparent';
        buttonThree.style.backgroundColor = 'transparent';
        buttonFour.style.backgroundColor = 'transparent';
    } else if(targetElement === buttonTwo) {
        backgroundImg.style.backgroundImage ='url(' + imageTwo + ')';
        buttonTwo.style.backgroundColor = `rgb(207,196,182,0.5)`;
        buttonOne.style.backgroundColor = 'transparent';
        buttonThree.style.backgroundColor = 'transparent';
        buttonFour.style.backgroundColor = 'transparent';
    } else if(targetElement === buttonThree) {
        backgroundImg.style.backgroundImage ='url(' + imageThree + ')';
        buttonThree.style.backgroundColor = `rgb(207,196,182,0.5)`;
        buttonOne.style.backgroundColor = 'transparent';
        buttonTwo.style.backgroundColor = 'transparent';
        buttonFour.style.backgroundColor = 'transparent';
    } else if(targetElement === buttonFour) {
        backgroundImg.style.backgroundImage ='url(' + imageFour + ')';
        buttonFour.style.backgroundColor = `rgb(207,196,182,0.5)`;
        buttonOne.style.backgroundColor = 'transparent';
        buttonTwo.style.backgroundColor = 'transparent';
        buttonThree.style.backgroundColor = 'transparent';
    } 
})


//Cycling of background photos for Room 1. Didn't have time to get this to work with `if-else` statements for Room 2 and 3
const room1Img = [
    './images/room_1_bedroom.jpeg',
    './images/room_1_bathroom.jpeg',
    './images/room_1_living_room.jpeg',
  ];

const hendrzakBackground = document.getElementById(`homepage-section-3-photo1`)
  
let currentIndex = 0;
  
function changeBackgroundImageRoom1() {
const room1Button = document.getElementById(`room-1-button`);

currentIndex = (currentIndex + 1) % room1Img.length;
const nextImageUrl = room1Img[currentIndex];
hendrzakBackground.style.backgroundImage = `url('${nextImageUrl}')`;
}
  
const changeBackgroundButton1 = document.getElementById('room-1-button');
changeBackgroundButton1.addEventListener('click', changeBackgroundImageRoom1);
  
changeBackgroundImageRoom1();


//Cycling of background photos for Room 2
const room2Img = [
    './images/room_2_bedroom.jpeg',
    './images/room_2_bathroom.jpeg',
    './images/room_2_living_room.jpeg',
  ];

const humphreyBackground = document.getElementById(`homepage-section-3-photo2`)
    
function changeBackgroundImageRoom2() {
const room2Button = document.getElementById(`room-2-button`);

currentIndex = (currentIndex + 1) % room2Img.length;
const nextImageUrl = room2Img[currentIndex];
humphreyBackground.style.backgroundImage = `url('${nextImageUrl}')`;
}
  
const changeBackgroundButton2 = document.getElementById('room-2-button');
changeBackgroundButton2.addEventListener('click', changeBackgroundImageRoom2);
  
changeBackgroundImageRoom2();


//Cycling of background photos for Room 3
const room3Img = [
    './images/room_3_bedroom.jpeg',
    './images/room_3_bathroom.jpeg',
    './images/room_3_living_room.jpeg',
  ];

const haedickeBackground = document.getElementById(`homepage-section-3-photo3`)
    
function changeBackgroundImageRoom3() {
const room3Button = document.getElementById(`room-3-button`);

currentIndex = (currentIndex + 1) % room3Img.length;
const nextImageUrl = room3Img[currentIndex];
haedickeBackground.style.backgroundImage = `url('${nextImageUrl}')`;
}
  
const changeBackgroundButton3 = document.getElementById('room-3-button');
changeBackgroundButton3.addEventListener('click', changeBackgroundImageRoom3);
  
changeBackgroundImageRoom3();


