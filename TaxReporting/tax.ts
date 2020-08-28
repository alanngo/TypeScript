class Employee
{
    public constructor
    (
        private name: string, 
        private ssn: number, 
        private income: number,
        private single: boolean
    )
    {if (income<0) throw new Error("income can't be negative");}

    public get Name() {return this.name;}
    public get SSN() {return this.ssn;}
    public get Income() {return this.income;}
    public get Single() {return this.single;}
    
    private taxTable()
    {
        if (this.single)
        {
            if (this.income<10000) return .10;
            if ((this.income>=10000) && (this.income<40000)) return .20;
            if ((this.income>=40000) && (this.income<100000)) return .30;
            if (this.income>=100000) return .40;
        }
        else
        {
            if (this.income<15000) return .10;
            if ((this.income>=15000) && (this.income<45000)) return .20;
            if ((this.income>=45000) && (this.income<150000)) return .30;
            if (this.income>=150000) return .40;
        }
        throw new Error("check taxTable function")
    }

    public get AmountOwed(){ return (this.income *this.taxTable()) + this.income;}
}

let emps = 
[
    new Employee("anusha", 1234, 5500, false),
    new Employee("savaan", 4444, 15500, true),
    new Employee("lyndon", 123334, 999999, true),
    new Employee("smruti", 1212434, 98700, false),
];
emps.forEach
(
    e =>
    {
        console.log(e);
        console.log("amount owed: "+e.AmountOwed);
    }
);