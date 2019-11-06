/**
 * Created by ricky on 2019/10/10.
 */
/*
 setTimeout(function(){
 console.log("第一个异步回调了！")
 setTimeout(function(){
 console.log("第二个异步回调了！")
 setTimeout(function(){
 console.log("第三个异步回调了！")
 setTimeout(function(){
 console.log("第四个异步回调了！")
 setTimeout(function(){
 console.log("第五个异步回调了！")
 },1000);
 },1000);
 },1000);
 },1000);
 },1000);
 */
/*function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "finish");
  });
}*/

/*
timeout(2000)
  .then(value => {
    console.log("第一层" + value);
    return timeout(2000);
  })
  .then(value => {
    console.log("第二层" + value);
    return timeout(2000);
  })
  .then(value => {
    console.log("第三层" + value);
    return timeout(2000);
  })
  .then(value => {
    console.log("第四层" + value);
    return timeout(2000);
  })
  .then(value => {
    console.log("第五层" + value);
    return timeout(2000);
  })
  .catch(err => {
    console.log(err);
  });



async function asyncTimeSys(){
  await timeout(1000);
  console.log("第一层异步结束！")
  await timeout(1000);
  console.log("第二层异步结束！")
  await timeout(1000);
  console.log("第三层异步结束！")
  await timeout(1000);
  console.log("第四层异步结束！")
  await timeout(1000);
  console.log("第五层异步结束！")
  return "all finish";
}
asyncTimeSys().then((value)=>{
  console.log(value);
});
*/
/*async function timeout() {
  return 'hello world'
}
// console.log(timeout());
timeout().then(function (result) {
  console.log(result)
})
console.log('虽然在后面，但是我先执行');*/

// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 * num)
    }, 2000);
  })
}

async function testResult() {
  let result = await doubleAfter2seconds(30);
  console.log(result);
}
testResult();
