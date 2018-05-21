const genId = (len)=>{
    let id = '';
    for (let i = 0; i < len; i++) {
        id+=String.fromCharCode(33 + Math.floor(Math.random() * Math.floor(93)));
    }
    return id;
};
console.log(genId(3));

//export default genId;