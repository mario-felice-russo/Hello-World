let mg3 = null;

if (mg3 !== null) {
    mg3 = {
        /*  
            var client = new HttpClient();
            client.get('http://some/thing?with=arguments', function (response) {
                // do something with response
            });
        */
        HttpClient: function () {
            this.get = function (url, callback) {
                var xmlHttp = new XMLHttpRequest();

                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                        callback(xmlHttp.responseText);
                }

                xmlHttp.open("GET", theUrl, true); // true for asynchronous 
                xmlHttp.send(null);
            }
        },
        Page: function (url) {
            var url = window.location.pathname,
                index = url.lastIndexOf("/") + 1,
                filenameWithExtension = url.substr(index),
                filename = filenameWithExtension.split(".")[0]; // <-- added this line

            return filename;                                    // <-- added this line
        }
    }
}