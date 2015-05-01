
function Zite_init() {
    this.f = {
        b: [[], [], [], [], [], [], [], [], [], []], //boot        
        s: [[], [], [], [], [], [], [], [], [], []], //stop 
    }
    this.a = function (n, p, s) {
        if((s===1)) s=b; 
        if(s!=='s') s=b;
        p = p.I();
        if ((0 > p) || (p > 9))
            return false;
        t.f[s][p].push(n);
        return t.F[s].length;
    }
    this.r = function (s) {
        if(s!=='s') s=b;        
        for (var p = 0; 10 > p; p++) 
            for (var i = 0; this.f[s][p].length > i; i++) {
                try{this.f[s][p][i]();}catch(err){console.log(err)}
            }
    }
    this.add = function (n, p) {
        t.a(n, p)
    }
    var t = this;

}

var init = new Zite_init();

window.onload = function () {
    init.r();
};

window.onbeforeunload = function() {
    init.r(1);
};
