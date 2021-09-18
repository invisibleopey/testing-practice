const analyze = function analyze(array) {
  return {
    length: array.length,
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
  };
};

function getAverage(array) {
  const sum = array.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  return sum / array.length;
}
export { analyze };
