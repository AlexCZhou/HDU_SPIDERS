var mainTableNode = document.getElementById("mainTable");

fetch("http://127.0.0.1:8080",{
    method: "get",
    mode: "cors"
})
.then(function (r) {
    return r.json()
}).then(function (data) {
    // console.log(data);
    var htmlstr=``;
    data.forEach(element => {
        htmlstr+=`<tr"><td>${element.Pro_ID}</td><td>${element.Title}</td><td>${element.Tags}</td><td>${element.Ratio}</td></tr>`;
    });
    mainTableNode.innerHTML+=htmlstr;
});