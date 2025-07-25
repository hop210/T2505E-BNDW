// LUCKY NUMBER

var luckyNumber = parseInt(Math.random() * 100); 

var guess = prompt("Hãy nhập số bạn dự đoán (0 đến 99):");
guess = parseInt(guess);

var money = prompt("Nhập số tiền bạn muốn đầu tư:");
money = parseFloat(money);

if (guess === luckyNumber) {
    var prize = money * 70;
    alert("🎉 Chúc mừng! Bạn đã trúng số! Bạn nhận được " + prize.toLocaleString() + " VNĐ!");
} else {
    alert("😢 Rất tiếc! Bạn đã không trúng. Số may mắn là: " + luckyNumber);
}
