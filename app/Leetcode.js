var numJewelsInStones = function (J, S) {

    var j = J.split('');
    var s = S.split('');
    var result = 0;
    for (var i = 0; i < j.length; ++i) {
        for (var k = 0; k < s.length; ++k) {
            if (j[i] == s[k])
                ++result;
        }
    }

    return result;
};


var hammingDistance = function (x, y) {
    var z = x ^ y;
    z = z.toString(2);
    var n = 0;
    for (i = 0; i < z.length; i++) {
        if (z.charAt(i) == '1') {
            n++;
        }
    }
    return n;
};

var HResult = hammingDistance(4, 14);
console.log(HResult);