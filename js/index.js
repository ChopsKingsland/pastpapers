function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$.getJSON("https://raw.githubusercontent.com/ChopsKingsland/pastpapers/gh-pages/subjects.json", function (data) {
  var list = document.getElementById('papers');

  for (const subj in data) {
    var li = document.createElement("li");
    li.insertAdjacentHTML("beforeend", `<br><br><h1>${capitalizeFirstLetter(subj.replace('-', ' '))}</h1>`);
    list.appendChild(li);
    for (const year in data[subj]) {
        var li = document.createElement("li");
        li.insertAdjacentHTML("beforeend", `<br><h2>${capitalizeFirstLetter(year.replace('-', ' '))}</h2>`);
        list.appendChild(li);
        for (const paper in data[subj][year]) {
            // console.log(data[subj][year][paper]);
            var papername = paper
            var paperURL = data[subj][year][paper]
            // console.log(`<a href="${paperURL}">${papername}</a>`);
            var li = document.createElement("li");
            li.insertAdjacentHTML("beforeend", `<a href="${paperURL}">${papername}</a>`);
            list.appendChild(li);
        }
    }
  }

});
