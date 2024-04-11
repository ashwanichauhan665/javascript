const employee = {
    claculatetax(){
        console.log("This is a function")
    },
    calculate2 : function(){
        console.log("This is a function")
    },

}
//employee.claculatetax()

class parent{
    constructor(){
        console.log("Tjis is a parent constructor");
    }
    patient(){
        console.log("This is a function of parent class");
    }
}
class child extends parent {
    constructor(){
        super();
        console.log("This is a constructor of child class");
    }
    patient(){
        super.patient();{

            console.log("This is a function of chlild class");
        }
    }
}
let objchild = new child();
objchild.patient();
