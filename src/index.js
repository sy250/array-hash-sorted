import "./styles.css";

const subtable = [
  { date: "2019-05-10" },
  { date: "2019-01-01" },
  { date: "2019-11-10" },
  { date: "2020-07-20" },
  { date: "2019-01-02" }
];

export let subtableAarraySort = aray => {
  aray.sort((a, b) => {
    const aryA = a.date.split("-");
    const aryB = b.date.split("-");
    const dateA = new Date(aryA[0], aryA[1], aryA[2]);
    const dateB = new Date(aryB[0], aryB[1], aryB[2]);
    return dateB - dateA;
  });
  return aray;
};
// console.log(subtableAarraySort(subtable));

let subtableAarraySort2 = aray => {
  aray.sort((a, b) => {
    // const aryA = a.date.split("-");
    // const aryB = b.date.split("-");
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  });
  return aray;
};
console.log(subtableAarraySort2(subtable));
// function aaa(){}
// bbb = function(){}
let subtableMaxDate = subtable => {
  const MaxDate = new Date(
    Math.max.apply(
      null,
      subtable.map(row => {
        // console.log(row.date);
        return new Date(row.date);
      })
    )
  );
  return MaxDate;
};
console.log(subtableMaxDate(subtable).toLocaleDateString());

let subtableMaxDate2 = subtable => {
  const MaxDate = new Date(
    Math.max(
      ...subtable.map(row => {
        // console.log(row.date);
        return new Date(row.date);
      })
    )
  );
  // console.log(MaxDate);
  return MaxDate;
};
console.log(subtableMaxDate2(subtable).toLocaleDateString());

console.log(Math.max(...[1, 2, 100, 50]));

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <p>${subtable[0].date}</p>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
