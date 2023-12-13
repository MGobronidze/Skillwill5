// დავალება 1
// შევქმნათ ღილაკი და დივი და მივანიჭოთ id ატრიბუტები; 
let buttonEl = document.createElement("button");
buttonEl.setAttribute("id","button-1");
let divEl = document.createElement("div");
divEl.setAttribute("id","div-1");

let bodyEl = document.body;

// დავამატოთ ღილაკი და დივი ბადი ელემენტში
bodyEl.append(divEl,buttonEl);

// შევქმნათ ტექსტური ელემენტი;
let textEl = document.createTextNode("Click the Button")

// დავამატოთ ტექსტური ელემენტი დივ ელემენტში;
divEl.append(textEl);

// ღილაკზე დაჭერის შემთხვევაში დავმალოთ და გამოვაჩინოთ დივ ელემენტი
buttonEl.onclick=function(){
    divEl.classList.toggle('remove')   
}


// დავალება 2
let divEl2= document.createElement("div");
divEl2.setAttribute("id","card");

let h2El = document.createElement("h2");
let textEl2 = document.createTextNode("Gandalf");
h2El.append(textEl2);

let  aEl =  document.createElement('a');
aEl.setAttribute("href","#");
aEl.setAttribute("target","blank");
let textElA = document.createTextNode("Go to Profile");
aEl.append(textElA)

divEl2.append(h2El,aEl)

bodyEl.append(divEl2);


// დავალება 3
let sectionEl = document.createElement("section");
sectionEl.setAttribute("id","quiz-sec")
let quizH2El = document.createElement("h2");
let quizTextEl = document.createTextNode("Quizz");
let quizPEl1 = document.createElement("P");
let quizTextElp1 = document.createTextNode("question 1");


bodyEl.append(sectionEl);
quizH2El.append(quizTextEl);
quizPEl1.append(quizTextElp1)
sectionEl.append(quizH2El, quizPEl1);


