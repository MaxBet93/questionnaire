let firsQuestion = prompt("Скільки буде 2+2?")
let secondQuestion = prompt("Яка столиця України?")
let thirdQuestion = prompt("Якого кольору небо?")
let fourQuestion = prompt("Скільки хвилин в годині")
let resolt = 0
if(firsQuestion == 4)
{
  resolt = resolt+10
}
else (firsQuestion !==4)
{
  resolt = resolt+0
}
console.log(resolt)
if(secondQuestion == "Київ")
{
  resolt = resolt+10
}
else (secondQuestion !=="Київ")
{
  resolt = resolt+0
}
console.log(resolt)
if(thirdQuestion == "Синій")
{
  resolt = resolt+10
}
else (thirdQuestion !=="Синій")
{
  resolt = resolt+0
}
console.log(resolt)
if(fourQuestion == 60)
{
  resolt = resolt+10
}
else (fourQuestion !== 60)
{
  resolt = resolt+0
}
console.log(resolt)
alert(`Ваша оцінка ${resolt} балів`)