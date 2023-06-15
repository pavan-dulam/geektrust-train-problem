# Context

 There are 2 super fast trains, Train A and Train B. Train A travels from Chennai to New Delhi. Train B travels from Trivandrum to Guwahati.

- Passengers can board these trains only at the source station.
- The trains have only reserved bogies and each bogie will only have passengers to a specific station.
- When the train arrives at a station, the entire bogie with passengers is detached from the train, and the train continues its journey.

 The routes with station code and distances of each station from originating station are as follows: (STATION (CODE) - DISTANCE ):

| Train A                | Train B                     |
|------------------------|-----------------------------|
| CHENNAI (CHN) - 0      | TRIVANDRUM (TVC) -0         |
| SALEM (SLM) - 350      | SHORANUR (SRR) - 300        |
| BANGALORE (BLR) - 550  | MANGALORE (MAQ) - 600       |
| KURNOOL (KRN) - 900    | MADGAON (MAO) - 1000        |
| HYDERABAD (HYB) - 1200 | PUNE (PNE) - 1400           |
| NAGPUR (NGP) - 1600    | HYDERABAD (HYB) - 2000      |
| ITARSI (ITJ) - 1900    | NAGPUR (NGP) - 2400         |
| BHOPAL (BPL) - 2000    | ITARSI (ITJ) - 2700         |
| AGRA (AGA) - 2500      | BHOPAL (BPL) - 2800         |
| NEW DELHI (NDL) - 2700 | PATNA (PTA) - 3800          |
|                        | NEW JALPAIGURI (NJP) - 4200 |
|                        | GUWAHATI (GHY) - 4700       |

**The Merger**

 During a part of their journey, these trains follow the same route and travel as one train - Train AB.

- Trains start from their respective source stations and meet at Hyderabad.
- Trains travel as Train AB from Hyderabad till Bhopal as a single train.
- From Bhopal the trains travel again as two independent trains, Train A and Train B.
- Train A can have passengers in the route for Train B and vice versa.    Eg: People can board from Chennai in Train A and travel to Guwahati.

**Merging Rules**

- First, both the engines are attached.
- The remaining bogies from Hyderabad are attached in the descending order of distances they have to travel further from Hyderabad.
- When the merged train reaches a station, the bogie for that station will be the last one and it can be detached quickly.

**Goal**

 Given the initial bogie order of both trains, your program should print :

- The bogie order of arrival of Train A and Train B at Hyderabad
- Train AB's departure bogie order from Hyderabad

 💡 Pro tip: Aim to get the Readability and Correctness (I/O) badges - your profile can go forward with most companies with those 2 badges. The rest can be improved upon later!

**Assumptions**

- The passengers board only from the source station.
- If there are no passenger bogies to travel from Hyderabad station, then train should stop there. In such a case it should print JOURNEY_ENDED
- The distances are in kilometers.
- If there are multiple bogies with same station as its destination, then they can be arranged next to each other when the Train AB leaves Hyderabad.

---

# Pre-requisites

* NodeJS 12.6.0/14.15.4/16.10.0
- npm

# How to run the code

We have provided scripts to execute the code.

Use `run.sh` if you are Linux/Unix/macOS Operating systems and `run.bat` if you are on Windows.  Both the files run the commands silently and prints only output from the input file `sample_input/input1.txt`. You are supposed to add the input commands in the file from the appropriate problem statement.

Internally both the scripts run the following commands

- `npm ci --silent` - This will build the solution downloading the necessary dependencies.
- Once the `npm install` from the previous build process is complete, we will execute the program using the command

`npm start --silent sample_input/input1.txt`

We expect your program to take the location to the text file as parameter. Input needs to be read from a text file, and output should be printed to the console. The text file will contain only commands in the format prescribed by the respective problem.

This main file, main.go should receive in the command line argument and parse the file passed in. Once the file is parsed and the application processes the commands, it should only print the output.

# Running the code for multiple test cases

 Please fill `input1.txt` and `input2.txt` with the input commands and use those files in `run.bat` or `run.sh`. Replace `./geektrust sample_input/input1.txt` with `./geektrust sample_input/input2.txt` to run the test case from the second file.

# How to execute the unit tests

 Mocha based test cases are executed with the following command from the root folder
`mocha test`

Jest based test cases are executed with the following command from the root folder
`jest`

# Typescript

Your main file should be named as `geektrust.ts`.

As of now we only support Typescript under the NPM build system. This will require you to compile your typescript program into javascript.

We run the commands `npm install --silent`, `npm start --silent` and `npm test --silent`.

Please ensure that the npm install commands creates the file `geektrust.js` from your geektrust.ts file. The npm start command should then execute this `geektrust.js` file.

In your `package.json` file make sure you have an entry for the install, start and test script.

- The install command should install the dependencies and also build the `geektrust.js` file.
- The start command will execute the program.
- The test command should execute all the unit tests present

```
"scripts": {
    "install" :"<command to create your geektrust.js file>",
    "start": "node geektrust.js",
    "test": "mocha"
}
```

Note: If you create the geektrust.js file in some other folder (like dist/, build/ or out/)other than the main folder, then please appropriately edit the start command.

# Help

You can refer our help documents [here](https://help.geektrust.com)
You can read build instructions [here](https://github.com/geektrust/coding-problem-artefacts/tree/master/NodeJS)
