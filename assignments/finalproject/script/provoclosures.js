var section = document.getElementById("provoclosures");
            var requestURL = 'https://raw.githubusercontent.com/kalbert83/kalbert83.github.io/master/temples.json?token=AsSKrFY7_tgRVHEvhU2V-nBtAbHt_ivfks5cuhGhwA%3D%3D';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();

            request.onload = function() {
            var templeclosures = request.response;
            populate(templeclosures);
            

            function populate(templeclosures) {
                var closures = templeclosures['temples'];
                for (var i = 0; i < closures.length; i++ ) {
                    if (closures[i].name === 'Provo City Temple') {
                        var article = document.createElement("article");
                        var list = document.createElement("ul");
                        var closureslist = closures[i].closures;

                        for (var x = 0; x < closureslist.length; x++) {
                            var listItem = document.createElement("li");
                            listItem.textContent = closureslist[x];
                            list.appendChild(listItem);
                        }

                        article.appendChild(list);
                        section.appendChild(article);
                    }
                }
            }
            }