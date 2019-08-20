
function multiplyTable(left, right) {
    var output = "";
   var valid = isValid(left,right);
   if(!valid){
      return valid;
   }
   var multiplyArray = generateMultiplyArray(left,right);
   output = printMultiplyTable(multiplyArray);
   return output;
}

function isValid(left,right){
    return left<right && left>=1&&left<=1000&&right>=1&&right<=1000;
    
}

function generateMultiplyArray(left,right){
    var result = [];
    for(var i = left;i<=right;i++){
        result[i-left]= []; 
        for(var j = left;j<=i;j++){
            result[i-left][j-left] = j+"*"+i+"="+i*j;
        }
    }
    return result;

}

function printMultiplyTable(multiplyArray){ 
    var output = "";
    for(var i=0;i<multiplyArray.length;i++){
        for(j=0;j<multiplyArray[i].length;j++){
            output = output+multiplyArray[i][j]+" ";
        }
        output += "\n";
    }
    return output;
}

module.exports = {
    isValid,
    multiplyTable,
    generateMultiplyArray,
    printMultiplyTable
}
