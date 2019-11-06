/**
 * Created by ricky on 2019/10/21.
 */
import axios from 'axios';
let baseUrl =  process.env.NODE_ENV==='development'?'/api':'http://localhost:3000'
function axiosGet(url,myParam){
  /*myParam = {
    'userId': vm.loginForm.user,
    'createDt': new Date()
  }*/

  var p = new Promise(function (reslove,reject) {
      axios.get(baseUrl+url,myParam).then(function (res) {
        reslove(res.data)
      }).catch(function (e) {
        reject(e)
      })
  })
  return p
}


/*function axiosPost(url,myParam){
  var p = new Promise(function (resovle,reject) {
    axios.post(url,myParam).then(function (res) {
      resolve(res.data)
    }).catch(function (e) {
      reject(e)
    })
  })
  return p
}*/
//通用请求
function axiosPost(url,myParam){
  var p = new Promise(function (reslove,reject) {
    axios.post({
      methods:'post',
      url:baseUrl+url,
      data:myParam

    }).then(function (res) {
      reslove(res.data)
    }).catch(function (e) {
      reject(e)
    })
  })
  return p
}

export {
  axiosGet,
  axiosPost,

}
