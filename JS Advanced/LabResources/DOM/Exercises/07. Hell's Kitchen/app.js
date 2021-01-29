function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let bestSalaryP = document.querySelector('#bestRestaurant p');
   let bestWorkersP = document.querySelector('#workers p');

   function onClick () {
      let arr = JSON.parse(input.value); // input to matrix
      
      let restaurants = {}

      arr.forEach(element => { // element = 1 restaurant from array
         const tokens = element.split(' - '); //split each restaurant to name and rest
         const name = tokens[0] // restaurant name
         const workersArr = tokens[1].split(', '); //split to string worker with salary (splited by space)
         let workers = [];


         for (let worker of workersArr) { // worker = 1 worker from worker for current restaurant 
            const workerToken = worker.split(' ');
            workers.push({
               name: workerToken[0],
               salary: Number(workerToken[1])})
         }
         if (restaurants[name] !== undefined) {// ако го има събира новите и старите работници
            workers = workers.concat( restaurants[name].workers);
                             
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum +worker.salary, 0)/workers.length;
         
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
         
      })
      
      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary>bestRestaurantSalary)
         bestRestaurant = {
            name,
            workers: restaurants[name].workers,
            bestSalary: restaurants[name].bestSalary,
            averageSalary: restaurants[name].averageSalary
         }
         bestRestaurantSalary = restaurants[name].averageSalary
      }
      bestSalaryP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      

      let workersToPrint = ''; 
      for( let w of bestRestaurant.workers) {
         workersToPrint+=`Name: ${w.name} With Salary: ${w.salary} `
      } 
      
   
      bestWorkersP.textContent = workersToPrint;
   }
       
}