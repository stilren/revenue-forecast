import { Cohort } from "./App";

export function churnA(x: number, fallOff: number): number {
  return x * (1 - fallOff / 100);
}

export function getData(
  montlyUserGrowth: number,
  numberOfMonths: number,
  fallOff: number
): number[] {
  let array = new Array(numberOfMonths);
  for (let i = 0; i < numberOfMonths; i++) {
    array[i] = new Array(numberOfMonths).fill(0);
  }
  for (let i = 0; i < numberOfMonths; i++) {
    array[i][i] = montlyUserGrowth;
  }
  for (let i = 0; i < numberOfMonths; i++) {
    for (let j = 0; j < numberOfMonths; j++) {
      if (j !== 0) {
        array[i][j] =
          array[i][j - 1] !== 0
            ? churnA(array[i][j - 1], fallOff)
            : array[i][j];
      }
    }
  }
  var sum = (r: number[], a: number[]) => r.map((b, i) => a[i] + b);
  return array.reduce(sum);
}

export function getStackData(
  cohorts: Cohort[],
  numberOfMonths: number
): { x: string; y: number }[][] {
  var cohortFuncs = cohorts.map(c => ({
    name: c.name,
    func: getData(c.montlyUser, numberOfMonths, c.churn)
  }));
  let res = cohortFuncs.map((c, i) =>
    c.func.map((_, j) => ({ x: j.toString(), y: c.func[j] }))
  );
  return res;
}
