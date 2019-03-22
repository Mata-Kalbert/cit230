var section = document.getElementById("townsinfo");
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var towns = request.response;
    populate(towns);
    }

    function populate(jsonObj) {
        var towndetails = jsonObj['towns'];

        for (var i = 0; i < towndetails.length; i++ ) {
            if (towndetails[i].name === 'Fish Haven' || towndetails[i].name === 'Preston' || towndetails[i].name === 'Soda Springs') {
            var myArticle = document.createElement('article');
            myArticle.className = "column";
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var image = document.createElement('img');
        

            myH2.textContent = towndetails[i].name;
            myH3.textContent = towndetails[i].motto;
            myPara1.textContent = 'Year Founded: ' + towndetails[i].yearFounded;
            myPara2.textContent = 'Population: ' + towndetails[i].currentPopulation;
            myPara3.textContent = 'Annual Rain Fall: ' + towndetails[i].averageRainfall;

            if (towndetails[i].name === 'Fish Haven')
                image.setAttribute('src', 'images/fishhaven.jpg');
                image.setAttribute('alt', 'Town of Fish Haven');
            if (towndetails[i].name === 'Preston')
                image.setAttribute('src', 'images/preston.jpg');
                image.setAttribute('alt', 'Town of Preston');
            if (towndetails[i].name === 'Soda Springs')
                image.setAttribute('src','images/sodasprings.jpg');
                image.setAttribute('alt', 'Town of Soda Springs');
        
            myArticle.appendChild(myH2);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(image);

            section.appendChild(myArticle);
            }
        }
    }