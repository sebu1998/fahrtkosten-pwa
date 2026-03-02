(function () {
    const elDistance = document.getElementById("distance");
    const elConsumption = document.getElementById("consumption");
    const elPrice = document.getElementById("price");
    const elPersons = document.getElementById("persons");
    const elRoundTrip = document.getElementById("roundTrip");

    const elCostOneWay = document.getElementById("costOneWay");
    const elCostRoundTrip = document.getElementById("costRoundTrip");
    const elCostPerPerson = document.getElementById("costPerPerson");
    const elDetails = document.getElementById("details");

    function toNumber(value) {
      if (value === null || value === undefined || value === "") return 0;
      const n = Number(String(value).replace(",", "."));
      return Number.isFinite(n) ? n : 0;
    }

    function moneyEUR(value) {
      const n = Number.isFinite(value) ? value : 0;
      return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
    }

    function clampInt(value, minValue) {
      const n = Math.floor(toNumber(value));
      if (!Number.isFinite(n)) return minValue;
      return Math.max(minValue, n);
    }

    function hasInput() {
      return elDistance.value !== "" || elConsumption.value !== "" || elPrice.value !== "";
    }

    function calculate() {
      if (!hasInput()) {
        elCostOneWay.textContent = "\u2013";
        elCostRoundTrip.textContent = "\u2013";
        elCostPerPerson.textContent = "\u2013";
        elDetails.textContent = "";
        return;
      }

      const oneWayKm = Math.max(0, toNumber(elDistance.value));
      const includeReturn = elRoundTrip.checked;
      const totalKm = includeReturn ? oneWayKm * 2 : oneWayKm;
      const consumptionLper100 = Math.max(0, toNumber(elConsumption.value));
      const pricePerL = Math.max(0, toNumber(elPrice.value));
      const persons = clampInt(elPersons.value || "1", 1);

      const liters = (totalKm * consumptionLper100) / 100;
      const costTotal = liters * pricePerL;
      const costPerPerson = costTotal / persons;

      elCostOneWay.textContent = moneyEUR(includeReturn ? costTotal / 2 : costTotal);
      elCostRoundTrip.textContent = includeReturn ? moneyEUR(costTotal) : "\u2013";
      elCostPerPerson.textContent = moneyEUR(costPerPerson);

      const litersText = liters.toFixed(3).replace(".", ",");
      const totalKmText = totalKm.toFixed(1).replace(".", ",");
      if (includeReturn) {
        elDetails.textContent =
          `${litersText} Liter f\u00fcr ${totalKmText} km ` +
          `(${oneWayKm.toFixed(1).replace(".", ",")} km einfach + R\u00fcckweg)`;
      } else {
        elDetails.textContent =
          `${litersText} Liter f\u00fcr ${totalKmText} km (einfache Fahrt)`;
      }
    }

    const inputs = [elDistance, elConsumption, elPrice, elPersons];
    inputs.forEach((i) => i.addEventListener("input", calculate));
    elRoundTrip.addEventListener("change", calculate);
    calculate();

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("serviceworker.js").catch(() => {});
      });
    }
  })();
