var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Making online proctoring easier')
.pauseFor(700)
.deleteChars(31)
.typeString('Online quiz portal')
.pauseFor(700)
.deleteChars(24)
.typeString('簡単')
.pauseFor(700)
.deleteAll()
.start();