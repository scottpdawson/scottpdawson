<div id="container"></div>

<script>

Highcharts.chart('container', {
    chart: {
        type: 'column',
        height: 200,
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value: %b %e}'
        },
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.category: %B %e}: {point.y}'
    },
    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Words'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 3,
        }
    },
    series: [{
        name: 'Words Written',
        data: [
{%- for recap in writingRecap -%}
  {
    x : {{ recap.date | momentUnix }},
    y : {{ recap.y }},
  }
{% if not loop.last %},{% else %}{% endif %}
{%- endfor -%}
]
    }]
});

</script>

