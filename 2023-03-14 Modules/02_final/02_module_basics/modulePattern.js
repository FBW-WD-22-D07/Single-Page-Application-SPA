const myModule = (function () {
    // Private variables and functions
    var counter = 0;
    function increment() {
        counter++;
    }
    // Public interface
    return {
        getCounter: function () {
            return counter;
        },
        setCounter: function (value) {
            counter = value;
        },
        addOne: function () {
            increment();
        },
    };
})();

myModule.setCounter(1);
myModule.addOne();
console.log(myModule.getCounter());
