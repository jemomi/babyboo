export const generateRandomNumber = (min: number = 0, max: number = 1000) => Math.floor(Math.random() * (max - min)) + min;