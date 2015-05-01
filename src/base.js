

function I(s) {
    return document.getElementById(s);
}
function Is(s) {
    return d(s).style;
}
function Iv(s) {
    return d(s).value;
}
function IV(s, v) {
    d(s).value = v;
}
function Ii(s) {
    return d(s).innerHTML;
}
function II(s, v) {
    d(s).innerHTML = v.T();
}
function IA(s, f, v){
    v = v  || "click"; 
    d(s).addEventListener(v, f, false);
}


String.prototype.S=function(){
    return this.toString();
}

String.prototype.I=function(){
    return parseInt(this);
}

String.prototype.P=function(){
    return parseInt(this).toString();
}

String.prototype.R=function(a, b){
    return this.replace(a,b);
}

Number.prototype.S=function(){
    return this.toString();
}

Number.prototype.I=function(){
    return parseInt(this);
}

Number.prototype.P=function(){
    return  parseInt(this).toString();
}

Array.prototype.P=function(p){
    this.push(p);
    return this;
}

