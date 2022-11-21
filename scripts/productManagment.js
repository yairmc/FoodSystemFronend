let products = [];
let preparedArea = document.querySelector("#preparedArea");
let packageArea = document.querySelector("#packageArea");
document.addEventListener("DOMContentLoaded", async () => {
    await fetchProducts();
    loadProductsInHtml(products);
});

const fetchProducts = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token-food"));
        const response = await fetch("http://localhost:3001/products",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        products = await response.json();
        
    } catch (error) {
        console.log(error);
    }
};

const loadProductsInHtml = (productList)=>{
    const prepareds = productList.filter(product=>product.type==="Prepared");
    const packageds = productList.filter(product=>product.type==="Packaged");
    packageArea.innerHTML="";
    preparedArea.innerHTML="";
    prepareds.forEach(product=>{
        const {id, name, basePrice, cost,stock, taxes} = product;
        const tr = document.createElement("tr");
        tr.classList.add("rowProduct")
        tr.id = id;
        const tdName = document.createElement("td");
        const tdBasePrice = document.createElement("td");
        const tdCost = document.createElement("td");
        const tdTaxes = document.createElement("td");
        const tdStock = document.createElement("td");
        tdName.textContent = name;
        tdBasePrice.textContent = basePrice;
        tdCost.textContent = cost;
        tdTaxes.textContent = taxes;
        tdStock.textContent = stock;
        tr.appendChild(tdName);
        tr.appendChild(tdBasePrice);
        tr.appendChild(tdCost);
        tr.appendChild(tdTaxes);
        tr.appendChild(tdStock);
        preparedArea.appendChild(tr);
    })
    packageds.forEach(product=>{
        const {id, name, basePrice, cost,stock, taxes} = product;
        const tr = document.createElement("tr");
        tr.classList.add("rowProduct")
        tr.id = id;
        const tdName = document.createElement("td");
        const tdBasePrice = document.createElement("td");
        const tdCost = document.createElement("td");
        const tdTaxes = document.createElement("td");
        const tdStock = document.createElement("td");
        tdName.textContent = name;
        tdBasePrice.textContent = basePrice;
        tdCost.textContent = cost;
        tdTaxes.textContent = taxes;
        tdStock.textContent = stock;
        tr.appendChild(tdName);
        tr.appendChild(tdBasePrice);
        tr.appendChild(tdCost);
        tr.appendChild(tdTaxes);
        tr.appendChild(tdStock);
        packageArea.appendChild(tr);
    })
}


