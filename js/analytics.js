// Mock data for charts
const dailySalesData = [100, 15000, 20000, 25000, 30000, 35000, 50000];
const monthlySalesData = [300000, 320000, 350000, 370000, 400000, 420000, 450000, 470000, 500000, 520000, 550000, 570000];
const yearlySalesData = [3500000, 3700000, 4000000, 4200000, 4500000];
const inventoryData = [100, 80, 60, 40, 20];
const bestSellingItemsData = [90, 80, 70, 60, 50];
const mostProfitableItemsData = [100, 120, 140, 160, 180];
const customerSentimentsData = [70, 20, 10]; // Positive, Neutral, Negative
const salesByZipCodeData = [200, 300, 400, 500, 600];

// Colors for charts
const colors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)'
];

// Chart options with animation
const chartOptions = {
    responsive: true,
    animation: {
        duration: 2000,
        easing: 'easeInOutBounce'
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Store chart instances
let chartInstances = {};

// Function to create charts
function createCharts() {
    // Destroy existing charts if they exist
    Object.values(chartInstances).forEach(chart => chart.destroy());

    // Daily Sales Chart
    const dailySalesCtx = document.getElementById('dailySalesChart').getContext('2d');
    chartInstances.dailySalesChart = new Chart(dailySalesCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Daily Sales',
                data: dailySalesData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: chartOptions
    });

    // Monthly Sales Chart
    const monthlySalesCtx = document.getElementById('monthlySalesChart').getContext('2d');
    chartInstances.monthlySalesChart = new Chart(monthlySalesCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Sales',
                data: monthlySalesData,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    // Yearly Sales Chart
    const yearlySalesCtx = document.getElementById('yearlySalesChart').getContext('2d');
    chartInstances.yearlySalesChart = new Chart(yearlySalesCtx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Yearly Sales',
                data: yearlySalesData,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: chartOptions
    });

    // Inventory Chart
    const inventoryCtx = document.getElementById('inventoryChart').getContext('2d');
    chartInstances.inventoryChart = new Chart(inventoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Rice', 'Wheat', 'Spices', 'Vegetables', 'Meat'],
            datasets: [{
                label: 'Inventory',
                data: inventoryData,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    // Best Selling Items Chart
    const bestSellingItemsCtx = document.getElementById('bestSellingItemsChart').getContext('2d');
    chartInstances.bestSellingItemsChart = new Chart(bestSellingItemsCtx, {
        type: 'bar',
        data: {
            labels: ['Samosa', 'Butter Chicken', 'Paneer Tikka', 'Biryani', 'Dosa'],
            datasets: [{
                label: 'Best Selling Items',
                data: bestSellingItemsData,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    // Most Profitable Items Chart
    const mostProfitableItemsCtx = document.getElementById('mostProfitableItemsChart').getContext('2d');
    chartInstances.mostProfitableItemsChart = new Chart(mostProfitableItemsCtx, {
        type: 'bar',
        data: {
            labels: ['Butter Chicken', 'Paneer Tikka', 'Biryani', 'Dosa', 'Samosa'],
            datasets: [{
                label: 'Most Profitable Items',
                data: mostProfitableItemsData,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    // Customer Sentiments Chart
    const customerSentimentsCtx = document.getElementById('customerSentimentsChart').getContext('2d');
    chartInstances.customerSentimentsChart = new Chart(customerSentimentsCtx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                label: 'Customer Sentiments',
                data: customerSentimentsData,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    // Sales by Zip Code Chart
    const salesByZipCodeCtx = document.getElementById('salesByZipCodeChart').getContext('2d');
    chartInstances.salesByZipCodeChart = new Chart(salesByZipCodeCtx, {
        type: 'bar',
        data: {
            labels: ['98101 (Seattle)', '98102 (Seattle)', '98103 (Seattle)', '98104 (Seattle)', '98105 (Seattle)'],
            datasets: [{
                label: 'Sales by Zip Code',
                data: salesByZipCodeData,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: chartOptions
    });
}

// Intersection Observer to reload charts on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createCharts();
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('.chart-container').forEach(container => {
    observer.observe(container);
});