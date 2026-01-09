(function () {
    const elDistance = document.getElementById("distance");
    const elConsumption = document.getElementById("consumption");
    const elPrice = document.getElementById("price");
    const elPersons = document.getElementById("persons");
  
    const elCostOneWay = document.getElementById("costOneWay");
    const elCostRoundTrip = document.getElementById("costRoundTrip");
    const elCostPerPerson = document.getElementById("costPerPerson");
    const elDetails = document.getElementById("details");
  
    function toNumber(value) {
      if (value === null || value === undefined) return 0;
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
  
    function calculate() {
      const distanceRoundTripKm = Math.max(0, toNumber(elDistance.value));
      const consumptionLper100 = Math.max(0, toNumber(elConsumption.value));
      const pricePerL = Math.max(0, toNumber(elPrice.value));
      const persons = clampInt(elPersons.value, 1);
  
      const liters = (distanceRoundTripKm * consumptionLper100) / 100;
      const costRoundTrip = liters * pricePerL;
  
      const costOneWay = costRoundTrip / 2;
      const costPerPerson = costRoundTrip / persons;
  
      elCostOneWay.textContent = moneyEUR(costOneWay);
      elCostRoundTrip.textContent = moneyEUR(costRoundTrip);
      elCostPerPerson.textContent = moneyEUR(costPerPerson);
  
      const litersText = liters.toFixed(3).replace(".", ",");
      const kmOneWay = (distanceRoundTripKm / 2).toFixed(1).replace(".", ",");
      elDetails.textContent =
        `Details: ${litersText} Liter für ${distanceRoundTripKm.toFixed(1).replace(".", ",")} km ` +
        `(eine Fahrt: ${kmOneWay} km).`;
    }
  
    const inputs = [elDistance, elConsumption, elPrice, elPersons];
    inputs.forEach((i) => i.addEventListener("input", calculate));
    calculate();
  
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("serviceworker.js").catch(() => {});
      });
    }
  })();
  