
//计算字符中最长字符串的长度
let tStr="jjklabcjefgh";

let count=0;
let getLongStrLen=(str)=>{
  var max =0;
    for(let i=0,len=str.length;i<len&&(len-i)>max;i++){
      for (let j = len ; (j-i)> 0&&(j-i)>max; j--) {
        let str1=str.substring(i,j)
        count++; 
        let strLen=str1.length;       
        if(strLen===[...new Set(str1)].length){ 
          if(strLen>max){
            max=str1.length 
            console.log(str1,max) ;      
          }        
          break;
        }
      }
    }
    console.log("result",max)
    return max;
}

getLongStrLen(tStr)
console.log("resultCount",count)