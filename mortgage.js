"use strict";

function calculateMortgage() {
  const principal = parseFloat(document.getElementById("principal").value);
  const annualRate = parseFloat(document.getElementById("interestRate").value) / 100;
  const years = parseFloat(document.getElementById("years").value);

  // Calculate monthly rate and number of payments
  const monthlyRate = annualRate / 12;
  const numPayments = years * 12;

  // Mortgage payment formula
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
  const totalInterest = monthlyPayment * numPayments - principal;

  const resultContent = `
      <h4>Mortgage Payment Results</h4>
      <p><strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}</p>
      <p><strong>Total Interest Paid:</strong> $${totalInterest.toFixed(2)}</p>
    `;

  // Display results
  const resultDiv = document.getElementById("mortgageResult");
  resultDiv.innerHTML = resultContent;
  resultDiv.style.display = "block";
}
