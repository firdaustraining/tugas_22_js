let kalimat = "Saya ingin belajar bersama";
let test = kalimat.split(" ");
test.forEach(function (item, index) {
  console.log("Item : " + item + " " + "index ke : " + index);
});
