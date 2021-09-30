function lunchitem() {
    var b1 = document.getElementById("tot")
    var arr = document.getElementById("myLunch")
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }

    document.write(total)
}


function dinneritem() {
    var b1 = document.getElementById("tot")
    var val = document.getElementById("myDinner").value;
    var total1 = 0;
    for (var i = 0; i < val.length; i++) {
        if (parseInt(val[i].value))
            total1 += parseInt(val[i].value);
    }

    document.write(total1)
}


function giftitem() {
    var b1 = document.getElementById("tot")
    var val2 = document.getElementById("myGift");
    var total2 = 0;
    for (var i = 0; i < val2.length; i++) {
        if (parseInt(val2[i].value))
            total2 += parseInt(val2[i].value);
    }

    document.write(total2)
}