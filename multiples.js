function multiples(){
    var total = 0;
    var value = 1000;
for (var i = 0; i <= value; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        total += i;
    }
}
alert(total); }
