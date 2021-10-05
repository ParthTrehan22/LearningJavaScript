var name = 'Foo';

var obj = {
    name:'Bar',
    func: function(){
        console.log(this.name + " 1"); //Bar
        console.log(this+ " -- 7");
        var that = this; //here this this refers to the obj vala this.
        console.log(that+ " -- 9");
        var name = 'Zee';
        (function() {
            console.log(that.name + " 2"); // Bar
            console.log(that+ " -- 13"); 
            console.log(this.name + " 3"); // Foo
            console.log(this+ " -- 15"); // Window object
            console.log(name + " 4"); // Zee
            console.log(this+ " -- 17"); // Window object
            this.name = name;
        })()
        console.log(this+ " -- 20");
        console.log(this.name + " 5"); // Bar
    }
};
obj.func();
console.log(this+ " -- 25"); // Window object
console.log(name + " 6"); // Zee
// var name = "Parth";
// (function() {
//     console.log(name);    
// })()