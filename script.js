const QUESTION = 
 [
        {"question_number" : 1 ,
         "question_body" : "JavaScript is currently the only language that can be used in browsers ",
         "question_answer" : { 
             "answer_1": true,
             "answer_2" : false
         },
         "correct_answer" : true
        } 
        ,
        {"question_number" : 2 ,
            "question_body" : "It is recommended to use var to define a new real number variable in JavaScript. ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           } ,
           {"question_number" : 3,
            "question_body" : "Bydefault, browsers run JavaScript codes after the DOM object is loaded. ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           } 
           ,     {"question_number" : 4 ,
            "question_body" : "Common Gate Interface (CGI) can run a normal C++ program ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           } 
           ,     {"question_number" : 5 ,
            "question_body" : "It is recommended to use the GraphQL framework to communicate with back-end. ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : true
           } 
           ,     {"question_number" : 6 ,
            "question_body" : " We can use JavaScript to add new HTML elements, such as images",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : true
           } ,
           {"question_number" : 7 ,
            "question_body" : "We can use JavaScript to change CSS format for any HTML elements.",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : true
           } ,
           {"question_number" : 8 ,
            "question_body" : " console.log( 'Hello AUN')prints Hello AUN in the HTML page.",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           } ,     {"question_number" : 9 ,
            "question_body" : "We must use derfer. ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           } ,
           {"question_number" : 10,
            "question_body" : "In JavaScript, we must define the function before calling this function. ",
            "question_answer" : { 
                "answer_1": true,
                "answer_2" : false
            },
            "correct_answer" : false
           }     
    ]
    const True_answer=[];

    for(let i=0;i<10;i++){
        True_answer[i]=QUESTION[i].correct_answer;
    }

    const div =  document.getElementById("q");
    const final_answer=[2,2,2,2,2,2,2,2,2,2];
   
    const saved_data =[];
let summm=0;
class exam {
    constructor()
    {
        this.question = [
            new question(div,0),
            new question(div,1),
            new question(div,2),
            new question(div,3),
            new question(div,4),
            new question(div,5),
            new question(div,6),
            new question(div,7),
            new question(div,8),
            new question(div,9)
        ];
        this.total = 0;
        this.change= this.change.bind(this);
        document.addEventListener("radio-change",this.change);

        this.pre = document.getElementById("prev");
        this.next = document.getElementById("next");
        this.counter = document.getElementById("counter");
       this.perv = this.perv.bind(this);
       this._next = this._next.bind(this);
       this.pre.addEventListener("click",this.perv);
      this.next.addEventListener("click",this._next);

     this.sub=document.getElementById('sub');
     this.sumbit=this.sumbit.bind(this);
     this.sub.addEventListener("click",this.sumbit);

     
    }
    

    change(event)
    {


        final_answer[event.detail.q_num]=event.detail.radio_Checked;
        saved_data[event.detail.q_num]={"qestion_number" :event.detail.q_num + 1 , "student_answer" : event.detail.radio_Checked };
        

     };
        
    sumbit(){
     
        for(let i=0;i<final_answer.length;i++){
            if (final_answer[i]==  True_answer[i].toString()){
                summm+=1;
            }
            document.body.innerHTML="";

            swal({
                title: "Exam Done!",
                text: "Your Grade "+summm.toString()+" / 10",
                icon: "success",
                button: "WoW OK",
              });
        }
        
        };

        perv()
    {
  
        let c = Number(this.counter.value);
        if (c > 1)
        {
            document.getElementById(`${c-1}`).classList.add("hidden");

            this.counter.value = `${c-1}`;

            document.getElementById(`${c-2}`).classList.remove("hidden");

        }
    };
     _next()
    {
        
        let c = Number(this.counter.value);
        if (c < 10)
        {
         
        document.getElementById(`${c-1}`).classList.add("hidden");
        c= c+1;
        this.counter.value = `${c}`;
        document.getElementById(`${c-1}`).classList.remove("hidden");
        }
        
    };
    
}


class question{

    constructor(container,index)
    {
        this.container=container;
        this.index = index;
        this.change = this.change.bind(this);

        this.question_container  = document.createElement("div");
        this.question_container.id =`${this.index}` ;
        this.question_container.classList.add("hidden");
    
        this.container.append(this.question_container);

        const p = document.createElement("p");
        p.textContent = QUESTION[this.index].question_body;
        this.question_container.append(p);


         this.radio_true = document.createElement("input");
         this.radio_true.type = "radio";
         let f=this.index+1;
         let asd="answer_"+f;
        this.radio_true.name =asd.toString();
        this.radio_true.id="true";
         this.radio_true.value="true";

         this.label_true = document.createElement("label");
         this.label_true.textContent = "  True";

        this.radio_false = document.createElement("input");
        this.radio_false.type = "radio";
        this.radio_false.id="false";
        this.radio_false.value="false";
        this.radio_false.name=asd.toString();

        this.label_false= document.createElement("label");
         this.label_false.textContent = "  False";

         this.question_container.append(this.radio_true);
         this.question_container.append(this.label_true);
         this.question_container.append(this.radio_false);
         this.question_container.append(this.label_false);

         this.radio_true.addEventListener("change",this.change);
         this.radio_false.addEventListener("change",this.change);
        document.getElementById("0").classList.remove("hidden");
        
    }
    

    change (event) 
    {
        const eventInfo={

            radio_Checked: event.currentTarget.value,
            
            q_num : this.index

        };
        document.dispatchEvent(new CustomEvent( "radio-change", {detail:eventInfo} ));
     

    }


}


ex1 = new exam();

//  console.log(final_answer);

/*

This is The Saved_Data for The Student if The Connection is failed 

*/

 console.log(saved_data);