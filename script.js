function maxProfit() {
  const n = Number(document.getElementById("unitinput").value);
  
  if (n <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  const earningsPerUnit = {
    T: 1500,
    P: 1000,
    C: 3000,
  };

  const buildTimes = {
    T: 5,
    P: 4,
    C: 10,
  };

  let maxEarning = 0;
  let combinations = [];

  for (let t = 0; t <= Math.floor(n / buildTimes.T); t++) {
    for (let p = 0; p <= Math.floor(n / buildTimes.P); p++) {
      for (let c = 0; c <= Math.floor(n / buildTimes.C); c++) {
        let currentTime = 0;
        let totalEarnings = 0;
        let isValid = true;

        for (let i = 0; i < t; i++) {
          currentTime += buildTimes.T;
          const operationalTime = n - currentTime;
          if (operationalTime > 0) {
            totalEarnings += operationalTime * earningsPerUnit.T;
          } else {
            isValid = false;
            break;
          }
        }
        if (!isValid) continue;

        for (let i = 0; i < p; i++) {
          currentTime += buildTimes.P;
          const operationalTime = n - currentTime;
          if (operationalTime > 0) {
            totalEarnings += operationalTime * earningsPerUnit.P;
          } else {
            isValid = false;
            break;
          }
        }
        if (!isValid) continue;

        for (let i = 0; i < c; i++) {
          currentTime += buildTimes.C;
          const operationalTime = n - currentTime;
          if (operationalTime > 0) {
            totalEarnings += operationalTime * earningsPerUnit.C;
          } else {
            isValid = false;
            break;
          }
        }
        if (!isValid) continue;

        if (totalEarnings > maxEarning) {
          maxEarning = totalEarnings;
          combinations = [{ t, p, c }];
        } else if (totalEarnings === maxEarning) {
          const exists = combinations.some((combo) => combo.t === t && combo.p === p && combo.c === c);
          if (!exists) {
            combinations.push({ t, p, c });
          }
        }
      }
    }
  }

  document.getElementById("timeunit").innerHTML = `Time Unit: ${n}`;
  document.getElementById("earnings").innerHTML = `Earnings: $${maxEarning}`;
  let sortedCombinations = combinations.sort((a, b) => b.t - a.t);
  let resultHTML = sortedCombinations.map((combo, index) =>
        `${index + 1}. T: ${combo.t} P: ${combo.p} C: ${combo.c}<br/>`
    ).join("");
  document.getElementById("solution").innerHTML = `Solutions:<br/>${resultHTML}`;
}