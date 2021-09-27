console.clear()
                    // object datatye
var granturismo={
    name:"maserati", manufacturer:{
        add: "italy",
        cost: "200K USD"
    }
}

console.log(granturismo.name)
console.log(granturismo.manufacturer.cost)
                
                   //aray datatype
var name1=['harey','harish','billie','muskin']
console.log(name1[2])
name1[2]='jack'
console.log(name1)

//push and pop
var x= name1.push('harry')
console.log(name1)
var y=name1.pop()
console.log(y)
console.log(name1)

//splice
name1.splice(2,0,'jaden','mike')   //1st:position, 2nd: no. of items to be deleted 3rd and so on are added items
console.log(name1)
name1.splice(3,2)
console.log(name1)

//concat
var name2=['kiley', 'laura', 'dani']
var name3= name1.concat(name2)
console.log(name3)

// sort and reverse
name1.sort()
console.log(name1)
name1.reverse()
console.log(name1)