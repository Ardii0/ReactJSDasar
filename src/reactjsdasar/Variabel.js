import React from "react";

//Const
// const harga = 3000;
// harga = 3000;

//Var
// var harga = 20000;
// if (true) {
//   var harga = 30000;
// }

//Let
let harga = 20000;
if (true) {
  let harga = 40000;
}
let Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};

export default Variabel;
