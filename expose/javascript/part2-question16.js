let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}

for (pro in statistics) {
  if (pro.startsWith('r')) {
    console.log(statistics[pro]);
  }
  else if (statistics[pro]% 2 == 1){
    console.log(statistics[pro]);
  }
  else {
    continue;
  }
}
