//implemention PriorityQueue---->
var priorityQueue = function(){
    var collection = [];
    this.show = function(){
        return collection;
    };
    this.push = function(element){
        if(this.empty()){
            collection.push(element);
        }else{
            var flag = false;
            for(var i=0;i<collection.length;i++)
            {
                if(element[1]<collection[i][1]){
                    collection.splice(i,0,element);
                    flag=true;
                    break;
                }
            }
            if(!flag)
            {
                collection.push(element);
            }
        }
    };
    this.pop = function(){
        collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.end = function(){
        return collection[collection.length-1];
    };
    this.size = function(){
        collection.length;
    };
    this.empty = function(){
        return (collection.length===0);
    };
}
//creating priorityQueue
var pr = new priorityQueue();
pr.push(["hello",3]);
pr.push(["world",1]);
pr.push(["again!",2]);
console.log(pr.show());
pr.pop();
console.log(pr.front());
console.log(pr.end());
pr.pop();
console.log(pr.end());
