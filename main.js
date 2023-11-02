let currentFaceId = 0;
let currentImportantNumber = 0;

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

/**
 * Gets a random number from 0 to maxValue.
 *
 * @param {int} maxValue
 * @returns
 */
const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * (maxValue - 0));
};

/**
 * Set a new src for the img tag based on the images in img/faces/ folder
 * which is mapped in the faces variable above.
 */
const setNewBabyFace = () => {
  const babyFace = document.querySelector("#face img");
  const baseFolder = "img/faces/";
  let randomFaceId = getRandomNumber(faces.size);

  // to avoid displaying the same image source more than once
  while (currentFaceId == randomFaceId) {
    randomFaceId = getRandomNumber(faces.size);
  }

  const newBabyFace = faces.get(randomFaceId);
  babyFace.src = baseFolder + newBabyFace; // set new image here
  currentFaceId = randomFaceId; // store the currentFaceId
};

/**
 * Sets the "Important Number" at the bottom of the screen (inside the #bottom-object container).
 */
const setNewImportantNumber = () => {
  const importantNumberContainer = document.querySelector("#important-number");
  const importantNumbers = [2, 11, 13, 23];
  let importantNumber =
    importantNumbers[getRandomNumber(importantNumbers.length)];

  // to avoid displaying the same important number more than once
  while (currentImportantNumber == importantNumber) {
    importantNumber =
      importantNumbers[getRandomNumber(importantNumbers.length)];
  }

  currentImportantNumber = importantNumber;
  importantNumberContainer.innerHTML = importantNumber;
};

const scaleElementUp = (element, scaleValue) => {
  element.style.transform = `scale(${scaleValue})`;
};

const returnElementToNormalSize = (element) => {
  element.style.transform = "scale(1)";
};

const uiUpdateEventHandler = () => {
  setNewBabyFace();
  setNewImportantNumber();
};

const face = document.querySelector("#face");
face.addEventListener("click", uiUpdateEventHandler);
face.addEventListener("click", uiUpdateEventHandler);
face.addEventListener("mousedown", () => returnElementToNormalSize(face, 1.03));
face.addEventListener("mouseout", () => returnElementToNormalSize(face, 1.03));
face.addEventListener("mouseover", () => scaleElementUp(face, 1.03));
face.addEventListener("mouseup", () => scaleElementUp(face, 1.03));

const bottomObject = document.querySelector("#bottom-object");
bottomObject.addEventListener("click", uiUpdateEventHandler);
bottomObject.addEventListener("mousedown", () =>
  returnElementToNormalSize(bottomObject, 1.3)
);
bottomObject.addEventListener("mouseout", () =>
  returnElementToNormalSize(bottomObject, 1.3)
);
bottomObject.addEventListener("mouseover", () =>
  scaleElementUp(bottomObject, 1.3)
);
bottomObject.addEventListener("mouseup", () =>
  scaleElementUp(bottomObject, 1.3)
);

document.body.onkeydown = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    uiUpdateEventHandler();
  }
};
