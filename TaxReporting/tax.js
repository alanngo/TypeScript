var Employee = /** @class */ (function () {
    function Employee(name, ssn, income, single) {
        this.name = name;
        this.ssn = ssn;
        this.income = income;
        this.single = single;
        if (income < 0)
            throw new Error("income can't be negative");
    }
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () { return this.name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "SSN", {
        get: function () { return this.ssn; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Income", {
        get: function () { return this.income; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Single", {
        get: function () { return this.single; },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.taxTable = function () {
        if (this.single) {
            if (this.income < 10000)
                return .10;
            if ((this.income >= 10000) && (this.income < 40000))
                return .20;
            if ((this.income >= 40000) && (this.income < 100000))
                return .30;
            if (this.income >= 100000)
                return .40;
        }
        else {
            if (this.income < 15000)
                return .10;
            if ((this.income >= 15000) && (this.income < 45000))
                return .20;
            if ((this.income >= 45000) && (this.income < 150000))
                return .30;
            if (this.income >= 150000)
                return .40;
        }
        throw new Error("check taxTable function");
    };
    Object.defineProperty(Employee.prototype, "AmountOwed", {
        get: function () { return (this.income * this.taxTable()) + this.income; },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emps = [
    new Employee("anusha", 1234, 5500, false),
    new Employee("savaan", 4444, 15500, true),
    new Employee("lyndon", 123334, 999999, true),
    new Employee("smruti", 1212434, 98700, false),
];
emps.forEach(function (e) {
    console.log(e);
    console.log("amount owed: " + e.AmountOwed);
});
