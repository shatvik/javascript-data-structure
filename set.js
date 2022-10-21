//creating set object function
var set = function(){
    var collection = [];
    
    this.contain = function(element){
        return (collection.indexOf(element) == 1);
    };
    
    this.show = function(){
        return collection;
    };
    
    this.insert = function(element){
        if(!this.contain(element))
        {
            collection.push(element);
            return true;
        }
        return false;
    };
    
    this.erase = function(element){
        if(this.contain(element))
        {
            var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    
    this.size = function(){
        return collection.length;
    };
    
    this.union = function(otherSet){
        var unionSet = new set();
        var firstSet = this.show();
        var secondSet = otherSet.show();
        
        firstSet.forEach(function(value){
            unionSet.insert(value);
        });
        secondSet.forEach(function(value){
            unionSet.insert(value);
        });
        return unionSet;
    };
    
    this.intersection = function(otherSet){
        var intersectionSet = new set();
        var firstSet = this.show();
        
        firstSet.forEach(function(value){
            if(otherSet.contain(value)){
                intersectionSet.insert(value);
            }
        });
        return intersectionSet;
    };
    
    this.difference = function(otherSet){
        var diffSet = new set();
        var firstSet = this.show();
        
        firstSet.forEach(function(value){
            if(!otherSet.contain(value)){
                diffSet.insert(value);
            }
        });
        return diffSet;
    };
    
    this.subset = function(otherSet){
        var firstSet = this.show();
        return firstSet.every(function(value){
            return otherSet.contain(value);
        });
    };
}
//making set objects
var mySet = new set();
mySet.insert("a");
mySet.insert("b");
mySet.insert("c");
mySet.insert("d");
console.log(mySet.show());
var set2 = new set();
set2.insert("a");
console.log(mySet.size());
console.log(mySet.contain("b"));
console.log(mySet.erase("b"));
console.log(mySet.contain("b"));
console.log(mySet.show());
