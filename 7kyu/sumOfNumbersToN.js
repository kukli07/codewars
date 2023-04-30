const SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        // Input Validation
        if (count < 0) return `${count}<0`;
        if (count === 0) return "0=0";

        // Logic
        let sum = 0;
        const str = [];

        for (let i = 0; i <= count; i++) {
            sum += i;
            str.push(i);
        }

        return `${str.join("+")} = ${sum}`;
    };

    return SequenceSum;
})();
