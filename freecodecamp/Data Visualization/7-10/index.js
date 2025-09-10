<style>
  .bar {
    width: 25px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select('body')
      .selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', d => d + 'px'); // altura dinâmica com base nos dados
  </script>
</body>
