function FormatChartData(data) {
  // Group data based on type
  const groupedData = data?.reduce((acc, data) => {
    if (!acc[data?.type]) {
      acc[data?.type] = [];
    }
    acc[data?.type].push({ label: data?.category, y: data?.value });
    return acc;
  }, {});

  // Convert grouped data to array
  const dataSeries = Object.keys(groupedData).map((type) => ({
    type: "column",
    name: type,
    showInLegend: true,
    yValueFormatString: "#0.##",
    dataPoints: groupedData[type],
  }));
  return dataSeries;
}

export default FormatChartData;
