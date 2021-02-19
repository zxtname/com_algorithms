//排序算法
let arr = [6, 9, 3, 4, 6, 5, 1];
//sort
// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>b-a));

//手动排序
// let f1=array=>{
//   if(array instanceof Array){
//     for (let index = 0,len=array.length; index < len-1; index++) {
//       for (let j = index+1; j <len ; j++) {
//         if(array[index]>array[j]){
//           // let temp=array[j];
//           // array[j]=array[index];
//           // array[index]=temp; 
//           //利用es6结构赋值
//           [array[index],array[j]]=[array[j],array[index]] ;       
//         }      
//       }

//     }
//   }
// }
// f1(arr)
// console.log(arr)
//冒泡算法
// 声明一个变量，作为标志位
// 如果某次循环完后，没有任何两数进行交换，就将标志位设置为 true，表示排序完成

// let f2=array=>{
//   if(array instanceof Array){    
//     for (let index = 0,len=array.length; index < len-1; index++) {
//       let flag=true;
//       for (let j = 0; j <len-index-1 ; j++) {
//         if(array[j]>array[j+1]){
//           [array[j],array[j+1]]=[array[j+1],array[j]];
//           flag=false;       
//         }      
//       }
//       if(flag) break;      
//     }
//   }
// }
// f2(arr)
// console.log(arr)
//插入排序
// let f3=(array)=>{
//   for (let out = 1,len=array.length; out < array.length; out++) {
//     let _in = out,temp=array[out]
//     // for (; _in>0&&array[_in-1]>temp; _in--){
//     //   array[_in]=array[_in-1];     
//     // }
//     while(_in>0&&array[_in-1]>temp){
//       array[_in]=array[_in-1]; 
//       _in--;
//     }
//     array[_in]=temp;    
//   }
// }
// f3(arr)
//快速排序算法
//分组
let a = [6, 9, 3, 4, 6, 5, 1];
let doPartition=( left, right, pivot)=> {
        
  let leftPre=left-1;
  let rightPre=right;
  let temp;
  
  let temp1;
  
  while(true) {
      
    while(leftPre<right && a[++leftPre]<pivot) {
        ;
    }
    
    while(rightPre>0 && a[--rightPre]>pivot) {
        ;
    }
      
    if(leftPre>=rightPre) {
        break;
    }else {
        
        temp=a[leftPre];
        a[leftPre]=a[rightPre];
        a[rightPre]=temp;

    }          
    
  }
  
   temp1 =a[leftPre];    
  a[leftPre]=a[right];
  a[right]=temp1;      
  return leftPre; 
}


//下边是主要算法的简化代码， 理解简化代码后还要对其进行精益求精
let quickSort = (left, right) => {        
    if(right-left<=0)
        return;
    else {
        
        let pivot=a[right];
        let partition=doPartition(left,right,pivot);        
        quickSort(left,partition-1);
        quickSort(partition+1,right);
    }    
}

quickSort(0,a.length-1)
console.log(a);
// console.log(partition(arr))
// console.log(arr)