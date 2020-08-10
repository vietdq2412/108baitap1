function average() {
    let inputPhys = prompt("nhap diem vat ly: ");
    let inputchemi = prompt("nhap diem vat ly: ");
    let inputBiol = prompt("nhap diem vat ly: ");

    let phys = parseInt(inputPhys);
    let chemi = parseInt(inputchemi);
    let bio = parseInt(inputBiol);

    let avg = phys + chemi + bio;

    document.getElementById("avg").innerHTML = "diem trung binh: " + avg;
}

function tempe() {
    let cel = prompt("nhap độ C: ");

    let fah = 9 * cel / 5 + 32;

    document.getElementById("tempe").innerHTML = "Độ F: " + fah;
}

function area() {
    let radius = prompt("nhạp bán kính: ");
    let area = radius * radius * 3.14;
    let perimeter = radius * 2 * 3.14;

    document.getElementById("area").innerHTML = "Diện tích hình tròn: " + area + "<br>chu vi: " + perimeter;
}