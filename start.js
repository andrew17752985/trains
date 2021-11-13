//console.log(train);
const train = [...Array(100).keys()].map(item => {
    return {
        weight: Math.trunc((Math.random() * (21 - 16) + 16))
    };
});
console.log(train);