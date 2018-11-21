var person = {
    firstName: "chen",
    lastName: "xian",
    id: 123,
    fullName : function()
    {
        //return this.firstName + " " + this.lastName;
        var x = 6;
    }
};

var func = person.fullName;
console.log(person.fullName);
console.log(person.fullName());