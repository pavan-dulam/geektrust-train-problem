/**this is test script I hard coded few inputs and output for testing purpose */
const { expect } = require('chai');
const Train = require('./services/train');

describe('Train Schedule Unit Tests', () => {
  let stationDistancesA;
  let stationDistancesB;

  before(() => {
    // Load station distances from files or define them here
    stationDistancesA = {
      CHN: 0,
      SLM: 350,
      BLR: 550,
      KRN: 900,
      HYB: 1200,
      NGP: 1600,
      ITJ: 1900,
      BPL: 2000,
      AGA: 2500,
      NDL: 2700,
    };

    stationDistancesB = {
      TVC: 0,
      SRR: 300,
      MAQ: 600,
      MAO: 1000,
      PNE: 1400,
      HYB: 2000,
      NGP: 2400,
      ITJ: 2700,
      BPL: 2800,
      PTA: 3800,
      NJP: 4200,
      GHY: 4700,
    };
  });

  it('should calculate the correct arrival order for Train A', () => {
    //input
    const trainA = new Train('TRAIN_A', 'ENGINE', [
      'NDL',
      'NDL',
      'KRN',
      'GHY',
      'SLM',
      'NJP',
      'NGP',
      'BLR',
    ]);

    const arrivalOrder = trainA.getArrivalOrder();

    //expected output
    expect(arrivalOrder).to.deep.equal(['NDL', 'NDL', 'GHY', 'NJP', 'NGP']);
  });

  it('should calculate the correct arrival order for Train B', () => {
    //input
    const trainB = new Train('TRAIN_B', 'ENGINE', [
      'NJP',
      'GHY',
      'AGA',
      'PNE',
      'MAO',
      'BPL',
      'PTA',
    ]);

    const arrivalOrder = trainB.getArrivalOrder();
    //expected output
    expect(arrivalOrder).to.deep.equal(['NJP', 'GHY', 'AGA', 'BPL', 'PTA']);
  });

  it('should calculate the correct departure order for Train A', () => {
    //input
    const trainA = new Train('TRAIN_A', 'ENGINE', [
      'NGP',
      'KRN',
      'NGP',
      'NDL',
      'HYB',
      'BPL',
    ]);

    const departureOrder = trainA.getArrivalOrder();
    //expected output
    expect(departureOrder).to.deep.equal(['NGP', 'NGP', 'NDL', 'HYB', 'BPL']);
  });

  it('should calculate the correct departure order for Train B', () => {
    //input
    const trainB = new Train('TRAIN_B', 'ENGINE', [
      'GHY',
      'PTA',
      'NJP',
      'PNE',
      'MAQ',
      'BPL',
    ]);

    const departureOrder = trainB.getArrivalOrder();
    //expected output
    expect(departureOrder).to.deep.equal(['GHY', 'PTA', 'NJP', 'BPL']);
  });

  it('should calculate the correct departure order when merging Train A and Train B', () => {
    //input
    const trainA = new Train('TRAIN_A', 'ENGINE', [
      'NGP',
      'KRN',
      'NGP',
      'NDL',
      'HYB',
      'BPL',
    ]);
    //input
    const trainB = new Train('TRAIN_B', 'ENGINE', [
      'GHY',
      'PTA',
      'NJP',
      'PNE',
      'MAQ',
      'BPL',
    ]);

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
    //expected output
    expect(mergedDepartureOrder).to.deep.equal([
      'ENGINE',
      'ENGINE',
      'GHY',
      'NJP',
      'PTA',
      'NDL',
      'BPL',
      'BPL',
      'NGP',
      'NGP',
    ]);
  });
});
