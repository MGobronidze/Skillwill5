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
// შევქმნათ ქვიზის სექცია
let sectionEl = document.createElement("section");
sectionEl.setAttribute("id","quiz-sec")

// შევქმნათ სექციის სათური
let quizH2El = document.createElement("h2");
let quizTextEl = document.createTextNode("Quizz");

// დავამატოთ სექცია დოკუმენტში
bodyEl.append(sectionEl);

// დავამატოთ სექციის სათაური
quizH2El.append(quizTextEl);
sectionEl.append(quizH2El);

// შევქმნათ ქვიზის მასივი
let quizArr = [ 
    {
        question: "What does HTML stand for?",
        answer: [
            {
                ans: "Hyper Text Markup Language",
                valid: "true"
            },
            {
                ans: "Home Tool Markup Language",
                valid: "false"
            },
            {
                ans: "Hyperlinks and Text Markup Language",
                valid: "false"
            }
        ]
    },

    {
        question: "Who is making the Web standards?",
        answer: [
            {
                ans: "Google",
                valid: "false"
            },
            {
                ans: "Mozilla",
                valid: "false"
            },
            {
                ans: "The World Wide Web Consortium",
                valid: "true"
            }
        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answer: [
            {
                ans: "header",
                valid: "false"
            },
            {
                ans: "h1",
                valid: "true"
            },
            {
                ans: "head",
                valid: "false"
            }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: [
            {
                ans: "<lb>",
                valid: "false"
            },
            {
                ans: "<break>",
                valid: "fasle"
            },
            {
                ans: "<br>",
                valid: "true"
            }
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answer: [
            {
                ans: "<body bg ='yellow'>",
                valid: "false"
            },
            {
                ans: "<background> yellow </background>",
                valid: "fasle"
            },
            {
                ans: "<background style ='background-color: yellow;'>",
                valid: "true"
            }
        ]
     }
]

// შევქმნათ და დავამატოთ ფორმა ქვიზის სექციაში
let quizForm= document.createElement("form");
sectionEl.append(quizForm);

// ქვიზის მასივიდან დავამატოთ კითხვები და სავარაუდო პასუხები ქვიზის ფორმაში
quizArr.forEach( el =>{
    //შევქმნათ სექცია თითოეული კითხვისთვის    
    const secEl =  document.createElement("section");
    
    // კითხვა
    const questionEl = document.createElement("p");
    questionEl.innerText= el.question;

    // დავამატოთ თითოქული კითხვა ფომის სექციაშო
    secEl.append(questionEl);
    quizForm.append(secEl);
        
    // სავარაუდო პასუხი
    const answ = [ans1, ans2, ans3] = [el.answer[0].ans, el.answer[1].ans, el.answer[2].ans];
    const validity =[val1, val2, val3] =[el.answer[0].valid, el.answer[1].valid, el.answer[2].valid];
    answ.forEach(ans => {

        // თითოეული სავარაუდო პასუხისთვის შევქმნათ ინპუტის ველები ატრიბუტებით
        const ansEl = document.createElement("input");
        ansEl.setAttribute("id", ans);
        ansEl.setAttribute("value", ans);
        ansEl.setAttribute("name", "quiz");
        ansEl.setAttribute("type", "radio");

        // თითოეული სავარაუდო პასუხისთვის შევქმნათ ლეიბლები ატრიბუტებით
        const ansLabelEl = document.createElement("label");
        ansLabelEl.innerText=ans;
        ansLabelEl.setAttribute("for", ans);

        // ვადგენთ ინდექსს პასუხების მასივში
        let index = answ.indexOf(ans);
        ansLabelEl.classList.add(validity[index]);

        // დავამატოთ სავარაუდო პასუხები სექციაში;
        secEl.append(ansEl, ansLabelEl);
    })
}
)

