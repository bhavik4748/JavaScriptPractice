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