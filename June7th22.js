/* Write a function that returns the name of the winner in a fight between two fighters. Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <=0. 
Each fighter will be a fighter object/instance. See the Fighter class below. Both health and damagePerAttack will be intergers larger than 0. you can mutate the Fighter objects. 
    declare_winner(Fighter('Lew',10,20), Fighter('Harry', 5,4) )
    Lew attacks Harry; Harry now has 3 health
    Harry attacks Lew; Lew now has 6 health
P: will be given interger greater than 0.
R: return the winner of two given fighters.
E: declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
P: i am given an object of Fighter; conditional statement if F1 < F2, F2 wins; else F1 wins; object has 2 params name, health, attack for other player; write equation for health from F1 - damagePerAttack from F2. */

function Fighter(name, health, damagePerAttack) {
    this.name = name,
    this.health = health,
    this. damagePerAttack = damagePerAttack,
    this.toString = function () {return this.name;}
}

function declareWinner(fighter1, fighter2, firstAttacher) {
    let faceOff1 = Math.ceil( fighter1.health / fighter2.damagePerAttack);
   let faceOff2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
   if(faceOff1 < faceOff2) {
       return fighter2.name;
   }else if(faceOff2 < faceOff1){
       return fighter1.name;
   }else {
     return firstAttacker;
   }
}