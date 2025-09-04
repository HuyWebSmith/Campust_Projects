let math = Number(prompt("Nhập vào điểm toán: "));
let literature = Number(prompt("Nhập vào điểm văn: "));
let english = Number(prompt("Nhập vào điểm anh: "));

let trungBinh = (math + literature + english) / 3;

console.log(`Trung bình điểm 3 môn: ${trungBinh.toFixed(2)}` );
