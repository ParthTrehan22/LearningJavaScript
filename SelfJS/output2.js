function showHelp(help) {
    console.log(help);
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        {'id':'email', 'help':'Your email address'},
        {'id':'name', 'help':'Your full name'},
        {'id':'age', 'help':'Your age'}
    ];
    for(var i = 0; i < helpText.length; i++){
        var item = helpText[i];
        var text = item.help;
        document.getElementById(item.id).onfocus = function(){
            console.log("On focus triggered.");
            showHelp(text);
        }
    }
}
setupHelp();