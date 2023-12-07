/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //half added implementation
    //when b=0 , it means there is no carry and we can return a
    while(b!=0){
        let carry=(a&b)<<1;
        a=a^b;
        b=carry;
    }
    return a;
};