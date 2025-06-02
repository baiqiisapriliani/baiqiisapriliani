document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('donutChart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
      datasets: [{
        data: [25, 25, 25, 25],
        backgroundColor: [
          '#4F7CFB',   // DBL Bank
          '#F87171',   // BRC Bank
          '#4FD1C5',   // ABM Bank
          '#FBBF24'    // MCP Bank
        ],
        borderWidth: 0,
        offset: [20, 20, 20, 20] // <<< ini bikin efek “keluar”
      }]
    },
    options: {
      cutout: '50%', // seberapa tebal donatnya
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              let value = context.parsed || 0;
              return `${label}: ${value}%`;
            }
          }
        }
      }
    }
  });
});
