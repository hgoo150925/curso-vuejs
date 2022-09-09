export const getRandomInt = () => {
  return new Promise(resolve => {
    // Calcula un numero random
    const rndInt = Math.floor(Math.random() * 20) + 1;

    setTimeout(() => {
      resolve(rndInt);
    }, 1000);
  });
};
