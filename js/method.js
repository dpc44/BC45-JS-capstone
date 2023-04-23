function kiemTraEmail(value,name){
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexEmail.test(value)){
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}

function kiemTraSo(value,name){
    var regexNumber =/^[0-9]+$/;
    if(regexNumber.test(value)){
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}

function kiemTraKyTu(value,name){
    var regexLetter =/^[A-Z a-z]+$/;
    if(regexLetter.test(value)){
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}


function kiemTraPassword(value,name, minLength, maxLength){
    
    var regexPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{2,}$/;
    if(value.trim().length < minLength || value.trim().length>maxLength){
        document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ ! độ dài từ ${minLength} - ${maxLength}`;
        return false;
    }
    else{
        if(regexPassword.test(value)){
            document.querySelector(`#error-regex-${name}`).innerHTML = '';
            return true;
        }
        document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ ! chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`;
        return false;
    }
    
}

function kiemTraPasswordConfirm(value1, value2, name){
    if(value1 != value2){
        document.querySelector(`#error-match-${name}`).innerHTML = `${name} không giống !`;
        return false;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = '';
    return true;
}