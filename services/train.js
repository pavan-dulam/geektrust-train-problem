const stationDistancesA = require('../enums/stationDistancesA');
const stationDistancesB = require('../enums/stationDistancesB');

class Train {
  constructor(name, engine, bogies) {
    this.name = name;
    this.engine = engine;
    this.bogies = bogies;
  }

  getArrivalOrder() {
    return this.bogies.filter(
      (bogie) =>
        stationDistancesA[bogie] >= stationDistancesA.HYB ||
        stationDistancesB[bogie] >= stationDistancesB.HYB
    );
  }

  getDepartureOrder() {
    const departureBogies = this.bogies.filter(
      (bogie) =>
        stationDistancesA[bogie] > stationDistancesA.HYB ||
        stationDistancesB[bogie] > stationDistancesB.HYB
    );

    return departureBogies.sort(
      (a, b) =>
        stationDistancesA[b] - stationDistancesA[a] ||
        stationDistancesB[b] - stationDistancesB[a]
    );
  }

  printArrivalOrders() {
    console.log('ARRIVAL', this.name, this.engine, ...this.getArrivalOrder());
  }
}

module.exports = Train;
