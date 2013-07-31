var n = 0
var a = 0
var href = []
var links = document.getElementsByTagName('a')

while (n < links.length) {
    href.push(links[n].href);
    n = n + 1;	
}

while (a < href.length) {
    document.writeln(href[a]);
    a = a + 1;
}


