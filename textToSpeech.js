
const Max = require('max-api');
const say = require('say');

var voice = null;
var speech = 'test';




Max.addHandler("bang", () => {
    //speak();
    Max.outlet('bang');
});




Max.addHandler("voice", (msg) => {
    voice = msg;
});

Max.addHandler("speech", (msg) => {
    speech = msg;
    Max.outlet('tts.wav');

    setTimeout(() => {

        speak();


    }, "500")


});


function speak() {
    //say.speak('I am talking', voice)
    say.export(speech, voice, 1, 'tts.wav', (err) => {
        if (err) {
            return console.error(err)
        }

        console.log('Text has been saved to tts.wav.')
    });


    setTimeout(() => {

        Max.outlet('bang');

    }, "500")
}