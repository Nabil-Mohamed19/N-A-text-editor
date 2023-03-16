let outPut = document.getElementById("outPut");
function writeCode(){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let doc =`
    <html>

    <style>${css}</style>

    <body>
    ${html}
    <script>${js}</script>
    </body>
    </html>
    `
    outPut.srcdoc=doc
}