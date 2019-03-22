let events = document.getElementById("events");
    let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    let event = request.response;
    populate(event);
    

    function populate(event) {
        let townEvents = event['towns'];
        for (let i = 0; i < townEvents.length; i++) {
            if (townEvents[i].name === 'Fish Haven') {
                let article = document.createElement("article");
                let ul = document.createElement("ul");
                let eventsUl = townEvents[i].events;

                for (let c = 0; c < eventsUl.length; c++) {
                    let ulItems = document.createElement("li");
                    ulItems.textContent = eventsUl[c];
                    ul.appendChild(ulItems);

                }
                article.appendChild(ul);
                events.appendChild(article);
            }

                
        }
        }
    }