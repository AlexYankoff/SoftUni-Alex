class Company {
    constructor() {
        this.company = {}
        
    }

    addEmployee(username, Salary, Position, Department){
        if (!this.company[Department]) {
            this.company[Department] = [] 
        } 
            
        this.company[Department].push({username, Salary, Position})

        
            
            
            
    }
        
    bestDepartment() {
        //calc avg salary for Each department
        for (let dep in this.company) {
            let avg = 0
            for (let empl of this.company[dep]) {
                avg+=empl.Salary
            }
            avg = avg/this.company[dep].length
            this.company[dep]["avgSalary"]= avg
                     
            this.company[dep].sort((a,b) =>a.Salary -b.Salary)

            
            //console.log(this.company[dep].avgSalary)
            
            



        }
        let bestSalary = 0
        let bestDep
        for (let dep in this.company) {
            
            if(this.company[dep].avgSalary>bestSalary) {
                bestDep = dep
                bestSalary = this.company[dep].avgSalary
                
            }
        

        }
        
    }
}




let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c.bestDepartment());
c.bestDepartment()


