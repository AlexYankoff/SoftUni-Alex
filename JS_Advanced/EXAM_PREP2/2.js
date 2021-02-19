class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};

    }
    get budget () {
        return this._budget
    }

    set budget(value) {
        if(value<0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value;
    }
    shopping(product) {
        
        let prod = product[0];
        let price = Number(product[1])

        if (this.budget< price) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(prod);
        this.budget -=price
        return `You have successfully bought ${prod}!`
        

    }

    recipes(recipe) {
        const requiredProd = recipe.productsList;
        for (let p of requiredProd) {
            if (!this.products.includes(p)) {
                throw new Error ("We do not have this product")
            }
        let recipeName = recipe.recipeName
        let productList = recipe.productsList
        let objPrd = {}
        objPrd[recipeName] = productList
        
        this.dishes.push(recipe)
               
        return `${recipe.recipeName} has been successfully cooked!`
        }



    }
    inviteGuests(name, dish) {
        
        if(this.dishes.some(d =>d.recipename == dish)== false){
            throw new Error("We do not have this dish")
        }
        
        if(name in this.guests) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish
        
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        result = []
        let dish;
        for (let key in this.guests) {
            dish = this.guests[key]
            products = this.dishes[dish].productsList.join(', ');
            result.push(`${key} will eat ${dish}, which consists of ${dish}`) 
            
        }
        return result.join('\n');
        
    }
  }

  let dinner = new ChristmasDinner(300);

  dinner.shopping(['Salt', 1]);
  dinner.shopping(['Beans', 3]);
  dinner.shopping(['Cabbage', 4]);
  dinner.shopping(['Rice', 2]);
  dinner.shopping(['Savory', 1]);
  dinner.shopping(['Peppers', 1]);
  dinner.shopping(['Fruits', 40]);
  dinner.shopping(['Honey', 10]);
  
  dinner.recipes({
      recipeName: 'Oshav',
      productsList: ['Fruits', 'Honey']
  });
  dinner.recipes({
      recipeName: 'Folded cabbage leaves filled with rice',
      productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
  });
  dinner.recipes({
      recipeName: 'Peppers filled with beans',
      productsList: ['Beans', 'Peppers', 'Salt']
  });
  
  dinner.inviteGuests('Ivan', 'Oshav');
  dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
  dinner.inviteGuests('Georgi', 'Peppers filled with beans');
  
  console.log(dinner.showAttendance());
  