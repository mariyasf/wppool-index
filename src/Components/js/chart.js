function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

const labels = ['', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July']
const datay = [
    {
        label: 'WPPOOL',
        data: generateRandomData(10, -10, 100),
        borderWidth: 2,
        borderColor: '#FC714D',
        backgroundColor: '#FC714D'
    },
    {
        label: 'Google',
        data: generateRandomData(10, -10, 100),
        borderWidth: 2,
        borderColor: '#615DE3',
        backgroundColor: '#615DE3'
    },
    {
        label: 'Microsoft',
        data: generateRandomData(10, -10, 100),
        borderWidth: 2,
        borderColor: '#7CA63A',
        backgroundColor: '#7CA63A'
    },
    {
        label: 'Twitter',
        data: generateRandomData(10, -10, 100),
        borderWidth: 2,
        borderColor: '#6F34A1',
        backgroundColor: '#6F34A1'
    },
];

const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: datay,
    },
    options: {
        legend: { display: false },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});
