if (false) {
    javascript:(function(){
        var headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
        if (headers.length) {
            var container = document.createElement('div');
            container.style = 'background-color:white;border:1px solid black;color:black;display:inline-block;font-size:16px;left:0;line-height:1.5;max-height:calc(100% - 1em);margin:0.5em;max-width:calc(100% - 1em);overflow-y:scroll;padding:0.5em 1.6em 0.5em 1em;position:fixed;top:0;z-index:9999;';

            var closeButton = document.createElement('button');
            closeButton.style = 'background-color:#eee;border:none;cursor:pointer;font-weight:700;line-height:1.8;padding:0 0.6em;position:absolute;right:0;top:0;';
            closeButton.type = 'button';
            closeButton.textContent = 'x';
            closeButton.onclick = function(event) {
                this.parentNode.remove();
            };
            container.appendChild(closeButton);

            var list = document.createElement('ol');
            list.style = 'list-style-position:inside;list-style-type:disc;margin:0;padding:0;';
            for (var i = 0, length = headers.length; i < length; i++) {
                var header = headers[i];
                var headersLevel = parseInt(header.tagName.substring(1, 2));
                var levelText = '&ndash;'.repeat(headersLevel);
                var headerText = header.tagName + ': ' + header.textContent;

                var listItem = document.createElement('li');
                listItem.innerHTML = levelText;
                if (header.id) {
                    var headerLink = document.createElement('a');
                    headerLink.style = 'color:#0043eb;text-decoration:underline;';
                    headerLink.innerHTML = headerText;
                    headerLink.href = '#' + header.id;
                    listItem.appendChild(headerLink);
                } else {
                    listItem.innerHTML = listItem.innerHTML.concat(headerText);
                }
                list.appendChild(listItem);
            }
            container.appendChild(list);
            document.body.appendChild(container);
        }
    })();
}
