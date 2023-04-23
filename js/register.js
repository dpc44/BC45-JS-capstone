
document.querySelector('#frmRegister').onsubmit = function (event){
    event.preventDefault();
    // Input
    var user = new User();

    user.email = document.querySelector('#email').value;
    user.name = document.querySelector('#name').value;
    user.password = document.querySelector('#password').value;
    user.phone = document.querySelector('#phone').value;
    user.passwordConfirm = document.querySelector('#passwordConfirm').value;
    if(document.querySelector('#male').checked){
        user.gender = document.querySelector('#male').value;
    }else{
        user.gender = document.querySelector('#female').value;
    }
    
    // Validation
    var valid = validationForm(user);

    if (!valid) {
        return;
    }
    console.log(user);

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user 
    })

    promise.then(function(ketqua){
        alert('Thành công register');
        console.log(ketqua);

    })

    promise.catch(function(err){
        alert('Thất Bại register ', err);
        console.log(err);
    })

}


function validationForm(user){
    var valid = true;
    // console.log("validationFormm = ", user);
    // dinh dang email + chu +  so + password

    valid = valid & kiemTraEmail(user.email, 'Email') & kiemTraPassword(user.password, 'Password', 6, 10) 
    & kiemTraPassword(user.passwordConfirm, 'PasswordConfirm', 6, 10) 
    & kiemTraPasswordConfirm(user.passwordConfirm, user.password, 'PasswordConfirm')
    & kiemTraKyTu(user.name, 'Name') & kiemTraSo(user.phone, 'Phone');
        
    
    return valid;
}