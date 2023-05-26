import React, { useState } from "react";

const Javascripts = () => {
  //Write a program that asks the user for a number n and prints the sum of the numbers 1 to n          += (+)
  const [value, setValue] = useState("");

  let sum = 0;
  for (let i = 1; i <= value; i++) {
    //v 6
    sum += i;
    //i 1, 2, 3, 4, 5, 6
    //s 1, 3, 6, 10, 15, 21
    // console.log(sum)
  }

  // Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
  let a = 1;
  let n = 3;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    a += i;
    if (a % 3 == 0 || a % 5 == 0) {
      result = a;
    }
  }


  // Write a program that prints a multiplication table for numbers up to 12.
  let table = [];

  for (let j = 1; j <= 5; j++) {
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr className="border">
          <td>{j}</td>
          <td> x </td>
          <td>{i}</td>
          <td>=</td>
          <td>{j * i}</td>
        </tr>
      );
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value ? "Sum is " + sum : ""}</p>
      {/* {value ? <table className="border">{table}</table> : " "} */}
      <p>{"Multiple of 3 and 5 is: " + result}</p>
      <table className="border">{table}</table>
    </div>
  );
};

export default Javascripts;
