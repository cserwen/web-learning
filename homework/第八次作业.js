let price = [3500,15000,25000,2200,2300,800];
let shopName = ["AK47——二西莫夫","AWP——巨龙传说","M4A4——咆哮","usp——枪响人亡","格洛克18型——渐变之色","沙漠之鹰——炽烈之炎"];
let shopNumber = [0,0,0,0,0,0];

function checkShop(i,name) {
    let item = document.getElementsByName(name);
    if (item[0].checked){
        shopNumber[i] = 1;
    }else {
        shopNumber[i] = 0;
    }

}

function car() {
    let shopArray = "";
    let flag = 0;
    for (let i = 0; i < 6; i++) {
        if (shopNumber[i] == 1){
            flag++;
            shopArray = shopArray + flag + "-" + shopName[i] + "\n";
        }
    }
    if (flag == 0){
        alert("您没有选购商品！");
    }else {
        alert(shopArray);
    }
}

function checkOut() {
    let flag = 0;
    let total = 0;
    for (let i = 0; i < 6; i++) {
        if (shopNumber[i] == 1){
            flag++;
            total+=price[i];
        }
    }

    if (flag == 0){
        alert("您没有选购商品！");
    }else {
        alert("你所选购的"+flag+"件商品，总价为"+total+"元\n请去支付");
    }
}

function clearAll() {
    for (let i = 0; i < 6; i++) {
        let item = document.getElementsByName("shop"+i.toString());
        shopNumber[i] = 0;
        item[0].checked = false;
    }
}

