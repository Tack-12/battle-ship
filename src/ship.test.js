//initialization to make the test non repetative
const Ship = module.require('./ship.js');
const ship1 = new Ship("Submarine");
ship1.hit();
ship1.hit();

//Checking the initialization with the valid length
test("SHIP Length" , ()=>{
    expect(Ship("Carrier").length).toBe(5);
});

//Checking the damage taken by the Ship
test("Ship Hit", ()=>{
   expect(ship1.getDamage()).toBe(2);
});

//Checking if the ship is sunk
test("Is Sunk?", ()=>{
   expect(ship1.isSunk()).toBe(true);
})

