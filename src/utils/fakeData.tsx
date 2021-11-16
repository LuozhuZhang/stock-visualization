
// Generate data
function randomData() {
  return Math.round(Math.round(1000 + Math.random() * 1000) / 10); // Math.round return nearest integer
}

// Generate date
function daysAgo(days:number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

// Generate fake stock
export function fakeStock(name:string) {
  const today = randomData();
  const yesterday = randomData();
  const change = Math.round((1000 * (today - yesterday)) / yesterday) / 10;
  return {
    name,
    today,
    change,
    data: [
      { x: daysAgo(4), y: randomData() },
      { x: daysAgo(3), y: randomData() },
      { x: daysAgo(2), y: randomData() },
      { x: daysAgo(1), y: yesterday },
      { x: daysAgo(0), y: today },
    ],
  };
}
