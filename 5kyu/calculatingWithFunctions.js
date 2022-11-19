function zero(cb) {
    return cb ? Math.floor(eval(`0${cb}`)) : 0;
}
function one(cb) {
    return cb ? Math.floor(eval(`1${cb}`)) : 1;
}
function two(cb) {
    return cb ? Math.floor(eval(`2${cb}`)) : 2;
}
function three(cb) {
    return cb ? Math.floor(eval(`3${cb}`)) : 3;
}
function four(cb) {
    return cb ? Math.floor(eval(`4${cb}`)) : 4;
}
function five(cb) {
    return cb ? Math.floor(eval(`5${cb}`)) : 5;
}
function six(cb) {
    return cb ? Math.floor(eval(`6${cb}`)) : 6;
}
function seven(cb) {
    return cb ? Math.floor(eval(`7${cb}`)) : 7;
}
function eight(cb) {
    return cb ? Math.floor(eval(`8${cb}`)) : 8;
}
function nine(cb) {
    return cb ? Math.floor(eval(`9${cb}`)) : 9;
}

function plus(numCb) {
    return `+${numCb}`;
}
function minus(numCb) {
    return `-${numCb}`;
}
function times(numCb) {
    return `*${numCb}`;
}
function dividedBy(numCb) {
    return `/${numCb}`;
}

// So hacky. Why did I not get the idea to return another function inside
// the operator? :( The top solution is so clean!
