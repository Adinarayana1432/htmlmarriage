
function myName(){

    var name = "John Doe";

    function getName(){
        return name;
    }
    function setName(neName){
        name = newName;

    }
    return {getName, setName};
}

const naam = myName();

console.log(naam.getName());