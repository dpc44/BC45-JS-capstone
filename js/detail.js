window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);

    //call api load lên giao diện
    (async function () {
        try{
            var res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
                method: 'GET',
            });

            var sanPham = res.data.content;
            console.log(sanPham);
            var content = '';

            content =
            `
            <div class="img-product">
                <img src="${sanPham.image}" alt="">
            </div>
            <div class="detail-product"     >
                <h3 class="name-detail">${sanPham.name}</h3>
                <p class="description-detail">${sanPham.description}</p>
                <p style="color:greenyellow; font-size: 20px; font-weight: 600;" class="my-4">Available Size</p>
                <div class="size-list" id="size">
                    
                </div>
                <p class="price">${sanPham.price}$</p>
                <div class="quantity">
                    <button id="giamNumber" onclick="soLuong(this)">-</button>
                    <p class="number-quantity">0</p>
                    <button id="tangNumber" onclick="soLuong(this)">+</button>
                </div>
                <button class="buttonCart">Add to Cart</button>
            </div>
            
            
            
            
            
            `

            document.querySelector('#detail-table').innerHTML = content;
            var mangSize = sanPham.size;
            for(var i = 0; i< mangSize.length; i++){
                var size = mangSize[i];
                if(i == 0 ){
                    document.querySelector('#size').innerHTML +=`<button class="btn-size active" onclick="test()" >${size}</button>`;
                }else{
                    document.querySelector('#size').innerHTML +=`<button class="btn-size" onclick="test()">${size}</button>`;
                }
            }
            

        }catch(err){
            console.log(err);
        }
    })();


    (async function () {
        try {
            var res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: 'GET',
            });
    
            var mangSanPham = res.data.content;
            var content = '';
            var rand = Math.floor(Math.random() * mangSanPham.length)
            for (var index = rand; index < mangSanPham.length; index++) {
                var sanPham = mangSanPham[index];
                content +=
                    `
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                          <img class="card-img-top" src="${sanPham.image}" alt="">
                          <div class="card-body">
                            <h4 class="card-title product-name">${sanPham.name}</h4>
                            <p class="card-text short-description">${sanPham.shortDescription}</p>
                          </div>
                          <div class="card-footer">
                            <div class="row">
                                <div class="col-6 button-outlook ">
                                    <a href="./detail.html?productid=${sanPham.id}">Buy now</a>
                                </div>
                                <div class="col-6 ">
                                    <p class="price" >${sanPham.price}</p>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                
                
                `
            }
            document.querySelector('#productList').innerHTML = content;
    
            
        }
        catch (err) {
            console.log(err);
        }
    
    })();

}


function soLuong(button) {
    var current = +document.querySelector('.number-quantity').innerHTML;
    // var money = +document.querySelector('.price').innerHTML;


    if (button.id === 'tangNumber') {
        current = current + 1;
    } else if (button.id === 'giamNumber') {
        if (current === 0) {
            current = current
        } else {
            current = current - 1
        }
    }
    console.log(current);
    document.querySelector('.number-quantity').innerHTML = current;
    // document.querySelector('.price').innerHTML = current*money;
}
function test(){
    var btns = document.querySelectorAll(".btn-size");
    for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }
}
}



