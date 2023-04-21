
document.querySelector('#frmRegister').onsubmit = function (event){
    event.preventDefault();
    // Input
    var user = new User();

    user.email = document.querySelector('#email').value;
    user.name = document.querySelector('#name').value;
    user.password = document.querySelector('#password').value;
    user.phone = document.querySelector('#phone').value;
    if(document.querySelector('#male').checked){
        user.gender = document.querySelector('#male').value;
    }else{
        user.gender = document.querySelector('#female').value;
    }
    console.log(user);

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user 
    })

    promise.then(function(ketqua){
        console.log(ketqua);

    })

    promise.catch(function(err){
        console.log(err);
    })

}