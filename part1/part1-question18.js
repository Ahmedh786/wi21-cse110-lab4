for (let p in statistics) {
  if ((p[0] == 'r') || (statistics[p] % 2 != 0)) {
  console.log(statistics[p]);
  }
}
