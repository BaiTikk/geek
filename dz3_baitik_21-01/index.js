// const Numbers = (num1, num2) => {
//     if (num1 < num2) alert(num1)
//     else alert (num2)
// }
// Numbers(9,10)

// const use = prompt ('введите что либо:').trim()
// const width = (width1) => {
//     return alert('длина: ' + width1.length)
// }
// width(use)

function calculator(a=Number (prompt("введите первое число")),
                    b=Number (prompt("введите второе число")),
                    c=Number (prompt("введите третье число")),
                    d=Number (prompt("выберите след действие : 1.умножение 2.деление 3.вычиттание 4.сложение"))){
    if (d===1){
        var aaa=a*b*c;
        alert(aaa);
    }
    else if (d===2){
        var bbb=a/b/c;
        alert(bbb);
    }
    else if (d===3){
        var ccc=a-b-c;
        alert(ccc);
    }
    else if (d===4){
        var eee=a+b+c;
        alert(eee);
    }
    else {
        alert('error')
    }
}
calculator()