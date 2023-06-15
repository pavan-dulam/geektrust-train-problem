const fs = require('fs');
const Train = require('./services/train');
const stationDistancesA = require('./enums/stationDistancesA');
const stationDistancesB = require('./enums/stationDistancesB');

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;

  const inputLines = data.replace(/\r/g, '').split('\n');
  const trainAInput = inputLines[0].replace(/\s+/g, ' ').trim().split(' ');
  const trainBInput = inputLines[1].replace(/\s+/g, ' ').trim().split(' ');

  const trainA = new Train(
    trainAInput[0],
    trainAInput[1],
    trainAInput.slice(2)
  );
  const trainB = new Train(
    trainBInput[0],
    trainBInput[1],
    trainBInput.slice(2)
  );

  //print arrival order of trains
  trainA.printArrivalOrders();
  trainB.printArrivalOrders();

  const mergedDepartureOrder = [
    trainA.engine,
    trainB.engine,
    ...trainA.getDepartureOrder(),
    ...trainB.getDepartureOrder(),
  ].sort(
    (a, b) =>
      (stationDistancesA[b] || stationDistancesB[b]) -
      (stationDistancesA[a] || stationDistancesB[a])
  );

  console.log('DEPARTURE TRAIN_AB', ...mergedDepartureOrder);
});
