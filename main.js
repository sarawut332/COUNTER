// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const result = document.getElementById('num1');

let num1 = 0;

//บวก
function addition() {
    num1 += 1 ;
    updateCounter();
  }

//ลบ
function deletion() {
    if(num1 > 0){
      num1 -= 1;
    }
    updateCounter();
  }

//รีเซ็ตให้กลับไปเป็น 0
  function reset() {
    num1 = 0;
    updateCounter();
  }
  

//ส่งค่ากลับไปแสดงผล
  function updateCounter() {
    // counter.innerText = num1;
    result.innerText = num1;
    
  }
  