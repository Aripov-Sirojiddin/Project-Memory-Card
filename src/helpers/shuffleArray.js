import randomNumber from "./randomNumber";

export default (arrayToShuffle) => {
  const arrayCopy = [...arrayToShuffle];
  let currentIndex = arrayCopy.length;
  while (currentIndex > 0) {
    currentIndex--;
    const randomIndex = randomNumber(0, arrayCopy.length);

    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }
  return arrayCopy;
};
