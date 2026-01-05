const ship = function (name){
    //initialize Variables
    let length;
    let damage= 0;
    
            if(name == "Carrier")  length = 5;
            if(name =="Battleship") length = 4;
            if(name == "Destroyer") length =3;
            if(name == "Submarine") length =2;
            if(name == "Patrol") length = 1;

    function hit(){
        //if all the boat length is not hit the hit can increase :)
        if(damage < length){
            damage++;
        }
    }

    function isSunk(){
        //if hit has equaled the amount of length then the boat has sunk 
        if(damage === length){
            return true;
        }
        else{
            return false;
        }
    }

    function getDamage(){
        return damage;
    }

    function getLength(){
        return length;
    }

    return {getDamage, hit, isSunk, getLength};
    
}
module.exports = ship;
