# Inheritance-in-Javascript
##Apply inheritance in Javascript
Write a method repeatify(n) that repeat n times a string object.
For example:

```
console.log('hello'.repeatify(3));
```
will produce:
```
hellohellohello
```

Example of inheritance in Javascrip:

```
var o = {
    a: 2,
    m: function(b){
        return this.a + 1;
    }
};

console.log(o.m());

var p = Object.create(o);

p.a = 12; 
console.log(p.m());

```

