Number.prototype.NWD = function(a, b){
    return b ? this.NWD(b, a%b) : a ;
    }
    var n = new Number();
    n.NWD(2,4);