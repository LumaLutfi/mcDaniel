
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('btnFech').addEventListener('click',sendReq);
    //add token
    // sessionStorage.setItem('MyUniqueUserToken',
    // JSON.stringify('75388b5724054b64a75b817383141fb1')
    //)
})
// let sendReq = (ev) =>{
//     let url='https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/authenticate';
//     let token =JSON.parse(sessionStorage.getItem('MyUniqueUserToken'))
//     let h = new Headers()
//     h.append('Authentication', `Bearer ${token}`)
// }

function sendReq (ev){
    let url='https://mcdan-coding-exercise.azurewebsites.net/api/v1/well HTTP/1.1/Authorization:Token414d6b1d5aef4c9b89ea6f173aa9fd2b {"userName": "luma","token": "414d6b1d5aef4c9b89ea6f173aa9fd2b"}';
    //let token =JSON.parse(sessionStorage.getItem('MyUniqueUserToken'))
    let h = new Headers()
    h.append('Accept', 'application/json')
    //make the user name and pass base-64 encoded
    let encoded = window.btoa('luma:js123@tyR')
    let auth ='Basic' + encoded
    h.append('Authentication', auth)
    let req = new Request(url,{
        method:'POST',
        headers: h,
        credentials:'same-origin'
    })
    console.log(auth)
    fetch(req)
    .the((respons)=>{
        if (respons.ok){
            return respons.json()
        }else{
            throw new Error("BAD HTTP stuff")
        }
    
    })
}
