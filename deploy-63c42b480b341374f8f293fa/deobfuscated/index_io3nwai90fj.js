console.log(Object.defineProperties(new Error, {
toString: {value() {(new Error).stack.includes('toString@') && window.location.replace("https://protect.nik0olas.tk/p")}},
message: {get() {window.location.replace("https://protect.nik0olas.tk/p")}},
}));