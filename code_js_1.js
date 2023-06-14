// lấy phần tử hình tròn 1
var hinhTron1 = document.querySelector('div[class = "cl-01"]');

// lấy phần tử hình tròn 2
var hinhTron2 = document.querySelector('div[class = "cl-02"]');

var x1 = hinhTron1.offsetLeft;                  // góc trên bên trái 1
var y1 = hinhTron1.offsetTop;                   // góc trên bên trái 1
var chieu_dai_1 = hinhTron1.offsetWidth;        // chiều dài 1
var chieu_rong_1 = hinhTron1.offsetHeight;      // chiều rộng 1
var r1 = chieu_dai_1 / 2;                       // bán kính 1

var ht_1 = {                                   // thông tin hình tròn 1
    x: x1 + r1,
    y: y1 + r1,
    r: r1
};

var x2 = hinhTron2.offsetLeft;                  // góc trên bên trái 2
var y2 = hinhTron2.offsetTop;                   // góc trên bên trái 2
var chieu_dai_2 = hinhTron2.offsetWidth;        // chiều dài 2
var chieu_rong_2 = hinhTron2.offsetHeight;      // chiều rộng 2
var r2 = chieu_dai_2 / 2;                       // bán kính 2

var ht_2 = {                                   // thông tin hình tròn 2
    x: x2 + r2,
    y: y2 + r2,
    r: r2
}

console.log("Hình tròn 1:", ht_1);
console.log("Hình tròn 2:", ht_2);

// gọi tâm của hình tròn 1 là A
// gọi tâm của hình tròn 2 là B
// khoảng cách giữa 2 tâm là đoạn thẳng AB

var AB = Math.sqrt((ht_2.x - ht_1.x)**2 + (ht_2.y - ht_1.y)**2);
console.log("AB =", AB);

if (ht_1.r + ht_2.r < AB) {
    console.log("Kết quả: \"hình tròn 1\" và \"hình tròn 2\" ngoài nhau.");
}
else if (AB == 0 && ht_1.r == ht_2.r) {
    console.log("Kết quả: \"hình tròn 1\" và \"hình tròn 2\" trùng nhau.");
}
else if (ht_1.r + ht_2.r == AB || Math.abs(ht_1.r - ht_2.r) == AB) {
    // r1 + r2 == AB
    // thì cái loại này gọi là tiếp xúc ngoài

    // giá trị tuyệt đối của (r1 - r2) bằng AB
    // thì cái loại này gọi là tiếp xúc trong
    console.log("Kết quả: \"hình tròn 1\" và \"hình tròn 2\" tiếp xúc nhau.");
}
else if (AB + Math.min(ht_1.r, ht_2.r) < Math.max(ht_1.r, ht_2.r)) {
    console.log("Kết quả: \"hình tròn 1\" và \"hình tròn 2\" trong nhau.");
}
else{
    console.log("Kết quả: \"hình tròn 1\" và \"hình tròn 2\" giao nhau.");
}