class Question {
    constructor () {
        this.Input = createInput("Enter Your Name");
        this.Button = createButton("Submit");
        this.Answer = createInput("Enter Your Answer")
    }
    display() {
        var Title = createElement("h2");
        Title.html("Welcome To My Quiz")
        Title.position(150, 200);
        this.Input.Position(100,100);
        this.Button.Position(200,200);
        this.Answer.Position(300,300);
        var Question = createElement("h2")
        Question.html("");
        Question.position(500,500)
        var O1 = createElement("h2")
        O1.html("");
        O1.position(600,600);
        var O1 = createElement("h2")
        O2.html("");
        O2.position(600,600);
        var O3 = createElement("h2")
        O3.html("");
        O3.position(600,600);
        var O4 = createElement("h2")
        O4.html("");
        O4.position(600,600);

        this.Button.mousePressed (()=>{
            this.Input.hide();
            this.Answer.hide();
            player.name= this.Input.value();
            player.answer = this.Answer.value();
            playerCount += 1;
            player.Index = playerCount;
            player.updateCount(playerCount);
            player.update();
        })
    }
}