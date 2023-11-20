class BankAccount
{
    constructor(name, balance)
    {
        this.name = name  // Save variable
        this.balance = balance  // Saves Variable
    }

    deposit(amount)
    {
        return this.balance += amount  // Outputs and save the variable
    }

    withdraw(amount)
    {
        return this.balance -= amount  // Outputs and save the variable
    }

    viewBalance()
    {
        return `Bank Balance: ${this.balance}`
    }
}

var user1 = new BankAccount("User", 100)  // Have to place new before class.
console.log("Variable: ", user1.deposit(50))
console.log("Variable: ", user1.withdraw(25))
console.log("Function", user1.viewBalance())
console.log("Variable: ", user1.balance)

class Coordinate
{
    constructor(x, y)
    {
        this.x = x
        this.y = y
    }

    moveLeft(amount)
    {
        this.x -= amount
    }

    moveRight(amount)
    {
        this.x += amount
    }

    moveUp(amount)
    {
        this.y += amount
    }

    moveDown(amount)
    {
        this.y -= amount
    }

    givePosition()
    {
        return (`${this.x}, ${this.y}`)
    }
}

var character1 = new Coordinate(0, 0)
character1.moveUp(5)  // 0, 5
character1.moveRight(13)  // 13, 5
character1.moveUp(-5)  // 13, 0
character1.moveLeft(3)  // 10, 0
character1.moveDown(5)  // 10, -5
console.log(character1.givePosition())
character1.moveUp(5)  // 10, 0
console.log(character1.givePosition())

class HospitalRecord
{
    constructor(name, surname, age)
    {
        this.name = name
        this.surname = surname
        this.age = age
        this.allergy = Array()
    }

    addAllergy(allergy)
    {
        this.allergy.push(allergy)
        // console.log(this.allergy)
    }

    viewHealthRecord()
    {
        return this.allergy
    }
}

var patient1 = new HospitalRecord("Code", "Example", 26)
for (let i of ["Prawns", "Pea-nuts"]){
    patient1.addAllergy(i)
    console.log(patient1.viewHealthRecord())
}

class combat
{
    constructor(name, health)
    {
        this.name = name
        this.health = health
        this.weapon = "Sword"
        this.arsenal = {"Sword" : 1, "Lance" : 2, "Great-Sword" : 5}
    }

    takeDamage(damage)
    {
        this.health -= damage
        return this.health
    }

    changeWeapon(weapon)
    {
        if (weapon in this.arsenal)
        {
            this.weapon = weapon
            console.log("hello")
        }
    }

    attack()
    {
        return this.arsenal[this.weapon]
    }
}

var character1 = new combat("Warrior", 15)
console.log(character1.takeDamage(5))
console.log(character1.weapon, character1.attack())
character1.changeWeapon("Great-Sword")
console.log(character1.weapon, character1.attack())
