// const jsonData = require('subjects.json');

fetch("./subjects.json")
.then(response => {
    var meJSON = response.json();
    document.getElementById('test').innerHTML = meJSON['biology-8461'];
//    return response.json();
})
// .then(jsondata => console.log(jsondata));

