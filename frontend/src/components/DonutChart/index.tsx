import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart  
            options={{ ...options, labels: mockData.labels}} //vamos buscar os dados todos do options e passamos assim tambem o eixo x
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
