const sumAll = function(a,b) {
    if(a<0 || b<0) return "ERROR";
    if(Number.isInteger(a) && Number.isInteger(b)){ 
        let sum = 0;
        let start = Math.min(a,b);
        let end = Math.max(a,b);
        //if(a>b) [a,b] = [b,a]
        while(start<=end){
            sum += start;
            start++;
        }
        return sum;
    }
    else return "ERROR";


};

// Do not edit below this line
module.exports = sumAll;
