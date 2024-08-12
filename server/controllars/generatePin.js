 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */






export const generatePin = (pin,max,min) => {
  if (pin > min && pin <= max) return pin
  return generatePin(Math.floor(Math.random()*max))
}













