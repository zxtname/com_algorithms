//斐波那契数

//递归算法
// let count=0
// let f1=n=>{
//   if(n==1||n==2){  
//     return 1
//   }
//   count++
//   return f1(n-1)+f1(n-2)
// }
// console.log(f1(8),count)

// let count=0
// let f3=(n,a1=1,a2=1)=>
// {
//   if(n==1) return a1;
//   if(n==2) return a2;
//   count++
//   return f3(n-1,a2,a1+a2)
// }
// console.log(f3(8),count)

// let count=0
// let f4=(n,map={})=>{  
//   if(n==1||n==2){
//     return 1
//   }
//   if(map[n]) return map[n];
//   map[n]=f4(n-1,map)+f4(n-2,map);
//   // console.log()
//   count++
//   return map[n];  
// }

// console.log(f4(8),count)
// 循环算法
// let f2=n=>{
//   let a1=1,a2=1;
//   for (let index = 0; index < n-2; index++) {
//     //先交换后赋值
//     a1=a2-a1;
//     a2=a2-a1;
//     a1=a1+a2;
//     a2=a1+a2;   
//   }
//   return a2;
// }
// console.log(f2(8))

