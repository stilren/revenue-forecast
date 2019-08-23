import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { churnA, getData } from "./Churn";
import { number } from "prop-types";
type stackData = {
  x: string;
  y: number;
};
it("calculates graph data", () => {
  const numberOfMonths = 12;
  const cohorts = [
    { name: "A", montlyUser: 100, churn: 0.3 },
    { name: "B", montlyUser: 50, churn: 0.1 }
  ];
  var cohortFuncs = cohorts.map(c => ({
    name: c.name,
    func: getData(c.montlyUser, numberOfMonths, c.churn)
  }));
  let resfin: stackData[][];
  let res = new Array(numberOfMonths).fill(0);
  let test = cohortFuncs.map((c, i) =>
    c.func.map((_, j) => ({ x: j, y: c.func[j] }))
  );
  // let resfin = res.map((_, i) =>
  //   cohortFuncs.map(c => ({ x: c.name, y: c.func[i] }))
  // );
  const tempData = [
    [{ x: "a", y: 2 }, { x: "b", y: 3 }],
    [{ x: "a", y: 1 }, { x: "b", y: 4 }],
    [{ x: "a", y: 3 }, { x: "b", y: 2 }]
  ];
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
