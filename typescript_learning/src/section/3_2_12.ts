type Pizza = {
    addAnchovies: () => void;
    addVegies: () => void;
}

function addDeliciousFish(pizza: Pizza): void {
    pizza.addAnchovies();
}

function createPizza(type: string): Pizza {
    if (type === '1') {
        return {
            addAnchovies: () => {},
            addVegies: () => {}
        }
    } else {
        //return null; // null is not Pizza
        return {
            addAnchovies: () => {},
            addVegies: () => {}
        }
    }
}

let pizza: Pizza = createPizza('2');

addDeliciousFish(pizza);