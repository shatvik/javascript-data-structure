//Making object function
var stack = function(){
    this.count=0;
    this.storage={};
    this.push=function(value){
        this.storage[this.count]=value;
        this.count++;
        
    }
    this.pop=function(){
        if(this.count===0)
        {
            return undefined;
        }
        this.count--;
        var val = this.storage[this.count];
        delete this.storage[this.count];
        return val;
    }
    this.top=function(){
        return this.storage[this.count-1];
    }
    this.size=function(){
        return this.count;
    }
}
// Making Stack Object
var st = new stack();
st.push("my");
st.push("name");
st.push("is");
st.push("shatvik");
console.log("Size = "+st.size());
console.log("Top element = "+st.top());
st.pop();
console.log("Size = "+st.size());
console.log("Top element = "+st.top());
st.pop();
console.log("Size = "+st.size());
console.log("Top element = "+st.top());
st.pop();
console.log("Size = "+st.size());
console.log("Top element = "+st.top());
st.pop();

