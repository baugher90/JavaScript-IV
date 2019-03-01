/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//---------------------------------------------------------------------------------------------
class GameObject {
    constructor(att) {
        this.createdAt = att.createdAt;
        this.dimensions = att.dimensions;

    }
    destroy() {
        return `${this.name} has been destroyed.`;
    }
  }
//--------------------------------------------------------------------------------------------- 
  class CharacterStats extends GameObject {
    constructor(att) {
      super(att);
      this.healthPoints = att.healthPoints;
      this.name = att.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
  }
//--------------------------------------------------------------------------------------------- 
  class Humanoid extends CharacterStats {
    constructor(att) {
      super(att); 
      this.team = att.team;
      this.weapons = att.weapons;
      this.languages = att.languages;
    }
   
    greet() {
        return `${this.name} offers a greeting in ${
            this.languages[Math.floor(Math.random() * this.languages.length)]}.`;
    }
    
    normalAttack(target) {
        let damage = Math.floor(Math.random() * (this.healthPoints / 3));

        target.healthPoints -= damage;
        console.log(
          `${this.name} attacks ${target.name} with ${this.weapons[Math.floor(Math.random() * this.weapons.length)]
          } inflicting ${damage} damage to ${target.name}'s health!`
        );
        if (target.healthPoints <= 0) {
          console.log(`${target.name} recieved a critical hit! ${target.destroy()}`);
        } else {
          console.log(`${target.name} continues to fight!`);
        }
    }
  }
//---------------------------------------------------------------------------------------------
  class SuperHumanoid extends Humanoid {
    constructor(att) {
      super(att); 
      this.team = att.team;
      this.weapons = att.weapons;
      this.languages = att.languages;
    }
    
    superAttack() {
        let damage = Math.floor(Math.random() * (this.healthPoints / 2));

        target.healthPoints -= damage;
        console.log(
          `${this.name} attacks ${target.name} with ${this.weapons[Math.floor(Math.random() * this.weapons.length)]
          } inflicting ${damage} damage to ${target.name}'s health!`
        );
        if (target.healthPoints <= 0) {
          console.log(`${target.name} recieved a critical hit! ${target.destroy()}`);
        } else {
          console.log(`${target.name} is still standing!`);
        }
    }
  }
//---------------------------------------------------------------------------------------------
  class Villain extends SuperHumanoid {
    constructor(att) {
      super(att); 
      this.harrass = att.harrass;
      this.darkMagic = att.darkMagic;
    }
   
    taunt() {
        return `${this.name} offers a greeting in ${
            this.languages[Math.floor(Math.random() * this.languages.length)]}.`;
    }
    
    specialAttack(target) {
        let damage = Math.floor(Math.random() * (this.healthPoints / 3));

        target.healthPoints -= damage;
        console.log(
          `${this.name} hits ${target.name} using ${this.darkMagic[Math.floor(Math.random() * this.darkMagic.length)]} inflicting ${damage} damage to ${target.name}'s health!`
        );
        if (target.healthPoints <= 0) {
          console.log(`${target.name} recieved a critical hit!${target.destroy()}`);
        } else {
          console.log(`${target.name} continues to fight!`);
        }
    }
  };
//---------------------------------------------------------------------------------------------
  class Hero extends SuperHumanoid {
    constructor(att) {
      super(att); 
      this.perseverance = att.perseverance;
    }
   
    greet() {
        return `${this.name} offers a greeting in ${
            this.languages[Math.floor(Math.random() * this.languages.length)]}.`;
    }
    
    specialAttack(target) {
        let health = Math.floor(Math.random() * (this.healthPoints / 3));
        this.healthPoints += health;
        if (this.healthPoints >= 20) {
          console.log(`${this.name}: I'm feeling stronger than ever!`);
        }

        let damage = Math.floor(Math.random() * (this.healthPoints / 3));
        target.healthPoints -= damage;
        console.log(
          `${this.name} hits ${target.name} using ${this.weapons[Math.floor(Math.random() * this.weapons.length)]} inflicting ${damage} damage to ${target.name}'s health!`
        );
        if (target.healthPoints <= 0) {
          console.log(`${target.name} recieved a critical hit!${target.destroy()}`);
        } else {
          console.log(`${target.name} continues to fight!`);
        }
      };
  }
//---------------------------------------------------------------------------------------------
const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 25,
    name: 'Mortas',
    team: 'Mortagar',
    weapons: ['Bone Sword','Deamon Dagger','Soul Cleaver',],
    languages: ['Black Speech','Common Tongue'],
    harrass: ['Die you fool!','Foolish human this will be the end of you!','Fooliukh shara avhiuk liwo be avhe mubarum ro lat!'],
    darkMagic: ['Blood magic','Soul Sacrifice','Torture']
  });
//---------------------------------------------------------------------------------------------
const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: 'Sir Garnet',
    team: 'The Round Table',
    weapons: ['Short Sword','Shield','Long Bow'],
    languages: ['Common Tongue','Elvish'],
    perseverance: ['Is that the best you can do!','Is that all!',"You'll have to do better than that"]
  });
//---------------------------------------------------------------------------------------------
function battle(hero,villain) {
    let winner = "";
    //If no winner then battle
    while (!winner) {
      let attacker = "";
      let defender = "";
      //--Determining who the attacker is
      let attDef = Math.floor(Math.random() * 2);
      if (attDef === 0) {
        attacker = hero;
        defender = villain;
      } else {
        attacker = villain;
        defender = hero;
      }
      //--Determining which attack to use
      let normSpec = Math.floor(Math.random() * 2);
      if (normSpec === 0) {
        attacker.normalAttack(defender);
      } else {
        attacker.specialAttack(defender);
      }
      //--checking health to see if we have a winner
      if (defender.healthPoints <= 0) {
        winner = attacker;
      }
    }
    //--If winner is hero console log hero victory 
    if (winner === hero) {
      console.log(
        `${hero.name} has defeated the Great Orc ${villain.name}!`
      );
    //--If winner is villain console log villain victory  
    } else {
      console.log(
        `${villain.name} defeated ${hero.name}! There are dark days ahead...`
      );
    }
  }
  
//battle(hero,villain);//
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------