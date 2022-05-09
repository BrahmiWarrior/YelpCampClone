// var names = "sai prasad"
// var age = "24"
// var job = "im preparing for a job right"

// var message = "hi, my name is "   +  names  +  " and  i am" +  age

// console.log(message)


// var myAccountBalance= 1000
// var newGame=1500
// var gameCoupon=700

// if (newGame <=myAccountBalance){
//     myAccountBalance-=newGame;
//     console.log("we just bought some new Game");
//     console.log("account Balance:"+ myAccountBalance)
    



// }else if (newGame-gameCoupon<=myAccountBalance){ 
//     console.log("we just bought some new Game wiht a gameCoupon");
//     myAccountBalance-newGame-gameCoupon;
//     console.log("account Balance:"+ myAccountBalance);



// } else{

//     console.log("sorry your Purchase Is Incomeplete beacuse you dont have account balance");
// }


// var titan1=50;
// var titan2=100;
// var titan3=150;
// var attackTitan=true;
// if (titan1 > titan2 && titan1 > titan3 && !attackTitan){
// console.log("titan 1 is powerful!");

// }else if (titan2 > titan1 && titan2 > titan3 && attackTitan){
//     console.log("titan 2 is powerful!");

    
// } else if (titan3 > titan1 && titan3 > titan2 || attackTitan){
//     console.log("titan 3 is powerful!");
// }

// var students    = [ "colossal", "attack titan", "beast titan"];

// var weakstudent = [];

// weakstudent.push(students[0]);
// console.log(weakstudent)

// var index= weakstudent.indexOf("colossal");
// console.log(weakstudent);
// if (index > -1) {
//     weakstudent.splice(index,1 );

//     console.log(index);



// }


// var fighters= ["tanjiro", "eren", "levi", "mikasa", "armin", "attack titan","beast titan", "sai titan",];

// for (var index=0; index < fighters.length; index++){
    

//     console.log(fighters[index]);
// }

    

// function total (glasses,bottles){
//     return glasses+bottles

// }



// var total1 = total(10,780)

// console.log(total1);
// var total2 =total(8347,89348)

// console.log(total2);


// function total (glasses,bottles){
//     return glasses+bottles

// }    

// var totalresult =[]
// totalresult.push=(total(7323232,72323235));
// totalresult.push=(total(323234,82323234));

// console.log(totalresult);


// var bankbalance= 5000


// function maketranscation(priceofproduct){
//     if (priceofproduct<=bankbalance) {
//         bankbalance-=priceofproduct;
//         console.log("your purchase is sucessful");
//     } else{
//         console.log("your purchase is unsucceful due to ne dhantlo balance ledhu ra lafoot");
        
//     }
// }

// maketranscation(1000);
// console.log(bankbalance);
// maketranscation(1500);
// maketranscation(20);
// maketranscation(230);
// maketranscation(50200);




 var students=[];


function student(first,last,age) {
    this.firstName= first;
    this.lastName=last;
    this.age=age;
    this.greeting=function() {
        return "HI,I'M"+ this.firstName+"and i'm"+ this.age+ "years old";
    };
}

var s1= new student("sai","eren", 24);
console.log(s1);
console.log(s1.greeting());

students.push(new student("akhil","sadhu",23));
students.push(new student("sanjay","sahoo",24));
students.push(new student("virat","kohli",24));




for (var index=0; index<students.length; index++)  {

    console.log(students[index]);
}




// var student0 = {
//     firstName:"sai",
//     lastName: "prasad",
//         age:  23, 
//         greeting:function() {
//             return "HI,I'M"+ this.firstName+"and i'm"+ this.age+ "years old"
            
//         }
       

//     };

// console.log(student0.greeting());

// // creates a new empty object
    // var student1= new Object();
    // student1.firstName="eren";
    // student1.lastName="yeager";
    // student1.age=22;



    // var student2={};
    // student2.firstName="levi";
    // student2.lastName="ackerman";
    // student2.age=30;
    
    
    // var students=[];
    // students.push(student0);
    // students.push(student1);
    // students.push(student2);


    // for (var index=0; index<students.length; index++)  {

    //     console.log(students[index]);
    // }


    

