var localizacao = document.getElementById("localizacao");

function buscar() {
    location.href = "saopaulo.html";

    /*if (localizacao.value == "São Paulo") {
        location.href = "saopaulo.html"
    }*/

    // const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";



}



let divImg = document.getElementById("images");

function carregar() {
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72", {
        method: 'get'
    })
        .then(res => res.json())
        .then(dados => {
            console.log(dados)

            const locais = dados.map(dados => {

                console.log(dados.photo[1])
                //let data = Object.entries(dados)

                    
                divImg.innerHTML += `
                        <div class="card mb-3" style="max-width: 540px;">
                              <div class="row no-gutters">
                                  <div  class="col-md-5">
                                      <img src=${dados.photo}  class="card-img" alt="...">
                                  </div>
                                  <div class="col-md-7">
                                      <div class="card-body">
                                          <h5 class="card-title">${dados.property_type}</h5>
                                          <p class="card-text">${dados.name}</p>
                                          <p class="card-text"><small class="text-muted"> Preço R$ ${dados.price},00</small></p>
                                      </div>
                                  </div>
                              </div>
                          </div>`

                    












            })

        })




}




