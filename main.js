let currentFaceId = 0;

const faces = new Map([
  [0, "BaseBaby.svg"],
  [1, "ACDC.svg"],
  [2, "Dio.svg"],
  [3, "Giorno.svg"],
  [4, "Josuke.svg"],
  [5, "Jotaro.svg"],
  [6, "Kakyoin.svg"],
  [7, "KeichoNijimura.svg"],
  [8, "N'doul.svg"],
  [9, "Polnareff.svg"],
  [10, "Rohan.svg"],
]);

const getRandomFaceIdFromMap = () => {
  return Math.floor(Math.random() * (faces.size - 0));
};

/**
 * Set a new src for the img tag based on the images in img/faces/ folder
 * which is mapped in the faces variable above.
 */
const setNewBabyFace = () => {
  const babyFace = document.querySelector("#face img");
  const baseFolder = "img/faces/";
  let randomFaceId = getRandomFaceIdFromMap();

  // to avoid displaying the same image source more than once
  while (currentFaceId == randomFaceId) {
    randomFaceId = getRandomFaceIdFromMap();
  }

  const newBabyFace = faces.get(randomFaceId);
  currentFaceId = randomFaceId;
  babyFace.src = baseFolder + newBabyFace; // set new image here
};

const bottomObject = document.querySelector("#bottom-object");
bottomObject.addEventListener("click", setNewBabyFace);

document.body.onkeydown = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    setNewBabyFace();
  }
};
