$(document).ready(function(){
    $("button").click(function(){
        html2canvas(document.body, {
            onrendered: function(canvas) {
                document.body.appendChild(canvas);
                Canvas2Image.saveAsPNG(canvas);
            }
        });
    })
})