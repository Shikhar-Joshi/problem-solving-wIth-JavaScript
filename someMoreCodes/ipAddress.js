Question Link: https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
    // You can use a combination of split and join. It's a one-liner solution.
    let i = 0;
    let res = '';
    while(i < address.length) {
        res += address[i] == '.' ? '[.]' : address[i]
        i++
    }
    return res;
};
