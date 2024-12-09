// Home Page
const topPerformers = [
    { symbol: "AAPL", name: "Apple Inc.", price: 175.64, volume: 98945623, change: "+1.5%" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 332.89, volume: 76457231, change: "+2.3%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2801.12, volume: 53217890, change: "+1.8%" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 1200.33, volume: 43215789, change: "+3.7%" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 3452.19, volume: 65127389, change: "+2.1%" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 301.15, volume: 78932123, change: "+4.0%" },
    { symbol: "FB", name: "Meta Platforms Inc.", price: 364.23, volume: 58932654, change: "+0.8%" },
    { symbol: "NFLX", name: "Netflix Inc.", price: 590.45, volume: 22345789, change: "+5.1%" },
    { symbol: "DIS", name: "Walt Disney Co.", price: 154.98, volume: 91234567, change: "+1.2%" },
    { symbol: "V", name: "Visa Inc.", price: 220.76, volume: 65432178, change: "+2.7%" },
];

function fillTable(data) {
    const tableBody = document.querySelector("#topPerformersTable tbody");

    data.forEach(company => {
        const row = document.createElement("tr");

        const symbolCell = document.createElement("td");
        symbolCell.textContent = company.symbol;

        const nameCell = document.createElement("td");
        nameCell.textContent = company.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${company.price.toFixed(2)}`;

        const volumeCell = document.createElement("td");
        volumeCell.textContent = company.volume.toLocaleString();

        const changeCell = document.createElement("td");
        changeCell.textContent = company.change;

        row.appendChild(symbolCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(volumeCell);
        row.appendChild(changeCell);

        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#topPerformersTable tbody");
    if (!tableBody) {
        console.error("Error: #topPerformersTable tbody element not found.");
        return;
    }

    fillTable(topPerformers);
});



// Stock Details Page
const stockDetail = {
    symbol: "AAPL",
    name: "Apple Inc.",
    description: "Apple Inc. designs, manufactures, and markets consumer electronics and software.",
    currentPrice: 175.43,
    change: "+1.25%",
};

const historicalData = [
    { date: "2024-12-06", open: 172.15, close: 175.43, high: 176.00, low: 171.50 },
    { date: "2024-12-05", open: 170.25, close: 172.15, high: 172.75, low: 169.50 },
];

const prediction = {
    trend: "Bullish",
    nextPrice: 178.50,
    confidence: "85%",
};

function renderStockDetails() {
    const stockDetailSection = document.getElementById("stock-detail");
    stockDetailSection.innerHTML = `
        <h2>${stockDetail.name} (${stockDetail.symbol})</h2>
        <p>${stockDetail.description}</p>
        <p>Current Price: <strong>$${stockDetail.currentPrice}</strong></p>
        <p>Change: <span style="color: ${stockDetail.change.startsWith('+') ? 'green' : 'red'};">
            ${stockDetail.change}</span>
        </p>
    `;
}

function renderHistoricalData() {
    const historicalDataSection = document.getElementById("historical-data");
    let tableHtml = `
        <h3>Historical Data</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>High</th>
                    <th>Low</th>
                </tr>
            </thead>
            <tbody>
    `;
    historicalData.forEach(row => {
        tableHtml += `
            <tr>
                <td>${row.date}</td>
                <td>$${row.open.toFixed(2)}</td>
                <td>$${row.close.toFixed(2)}</td>
                <td>$${row.high.toFixed(2)}</td>
                <td>$${row.low.toFixed(2)}</td>
            </tr>
        `;
    });
    tableHtml += `
            </tbody>
        </table>
    `;
    historicalDataSection.innerHTML = tableHtml;
}

function renderPrediction() {
    const predictionSection = document.getElementById("prediction");
    predictionSection.innerHTML = `
        <h3>Prediction</h3>
        <p>Trend: <strong>${prediction.trend}</strong></p>
        <p>Predicted Next Price: <strong>$${prediction.nextPrice}</strong></p>
        <p>Confidence: <strong>${prediction.confidence}</strong></p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Stocks detail page script loaded");
    renderStockDetails();
    renderHistoricalData();
    renderPrediction();
});

// Trends Page

function selectDays() {
    const labels = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const month = date.toLocaleDateString("eng-US", { month: "short" });
        const day = date.getDate();
        labels.push(`${month}-${day}`);

    }
    return labels;
}


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: selectDays(),
        datasets: [{
            label: '# of Votes',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            borderWidth: 1
        },
        {
            label: '# of Votes',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 11, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// JAVASCRIPT IMPLEMENTATION FOR C# GRAPHS AND TABLES
async function loadTopPerformers() {
    try {
        const response = await fetch('/api/top-performers'); // REPLACE API IN FUTURE //SEARCH HTTP CONNECTION WITH C#
        const topPerformers = await response.json();

        const tableBody = document.querySelector('#topPerformersTable tbody');
        tableBody.innerHTML = ''; //clear current rows.

        topPerformers.forEach((performer) => {
            const row = `
                <tr>
                    <td>${performer.symbol}</td>
                    <td>${performer.name}</td>
                    <td>${performer.close}</td>
                    <td>${performer.volume}</td>
                    <td>${performer.percentageChange.toFixed(2)}%</td>
                </tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error loading top performers:', error);
    }
}