/**
 * Created by Admin on 2017/8/8.
 */
'use strict';

var a = {
    b() {
        console.log(this);
    },
    c: ()=> {
        console.log(this);
    }
};

a.b();
a.c();