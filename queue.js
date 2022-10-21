//implementing queue
var queue = function(){
    collection = [];
    this.push = function(value){
        collection.push(value);
    };
    this.pop = function(value){
        collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.end = function(){
        return collection[collection.length-1];
    };
    this.size = function(){
      return collection.length;  
    };
    this.empty = function(){
      return (collection.length===0);  
    };
    this.show = function(){
        return collection;
    };
}

// making queue object

var qu = new queue();
qu.push(1)
qu.push(2)
qu.push(3)
qu.push(4)
console.log(qu.show())
console.log(qu.front())
console.log(qu.end())
console.log(qu.size())
console.log(qu.empty())
qu.pop()
qu.pop()
console.log(qu.show());
