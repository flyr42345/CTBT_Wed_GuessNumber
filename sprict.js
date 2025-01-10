// 搜尋指定元素("搜尋的元素");
// document.querySelector
const tip = document.querySelector(".tip");
tip.textContent = "請輸入1 ~ 100 內的數字";

let answer = Math.random() * 100 + 1;
answer = Math.floor(answer);
console.log("答案:",answer);
let min = 1,max =100;

// 取得按鈕
document.querySelector("#ok").addEventListener('click',function() {
    console.log("點擊確認按鈕");
    let number = document.querySelector("#number").value;
    console.log(number);

    if(number == answer){
        tip.textContent = "恭喜猜對!"
    }
    
    else if(number > answer) {
        tip.textContent = `請輸入${min} ~ ${number} 內的數字`;
        max = number;
    }
    else{
        tip.textContent = `請輸入 ${number} ~ ${max} 內的數字`;
        min = number;
    }
});
