$(document).ready(function () {
    jQuery(document).ready(function () {
        jQuery('#news-slider').slippry()
    });
})

new Chart(document.getElementById("Chart"), {
    type: 'line',
    data: {
        labels: [15, 16, 17, 18, 19, 20],
        datasets: [{
                data: [4.590, 4.6246, 4.6588, 4.6455, 4.6842, 4.7088, 4.71, 4.7165],
                label: "USD",
                borderColor: "#3e95cd",
                backgroundColor: "#3e95cd",
                fill: false
        }, {
                data: [5.690, 5.6246, 5.7588, 5.7455, 5.6542, 5.6088, 5.5512, 5.5360],
                label: "EURO",
                borderColor: "#a03c3c",
                backgroundColor: "#a03c3c",
                fill: false
        }, {
                data: [6.590, 6.6246, 6.6588, 6.5455, 6.4842, 6.4088, 6.35, 6.3165],
                label: "POUND",
                borderColor: "#3cba9f",
                backgroundColor: "#3cba9f",
                fill: false
        }
                  ]
    },
    options: {
        title: {
            display: true,
            text: 'Exchange Chart'
        }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["USD", "EURO", "BTC"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#a03c3c", "#3cba9f"],
            data: [2478, 5267, 734]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Most Valued Currencies of This Week'
        }
    }
});
