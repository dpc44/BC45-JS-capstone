(async function () {
    try {
        var res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
        });

        var mangSanPham = res.data.content;
        var content = '';
        for (var index = 0; index < mangSanPham.length; index++) {
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

        console.log('gọi api thành công !');
    }
    catch (err) {
        console.log(err);
    }

})();
