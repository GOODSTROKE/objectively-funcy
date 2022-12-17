// Your code here.

// GET FIRST NAME VALUE

// * `getFirstName` - returns the value of the firstName property of the given person object
//   * `getFirstName({firstName: 'Alley', lastName: 'Harmon'}) // -> 'Alley'`
//   * `getFirstName({firstName: 'Lika', lastName: 'Arri'}) // -> 'Lika'`

const getFirstName = function(person) {
  return person.firstName
}
// GET LAST NAME VALUE

// * `getLastName` - returns the value of the lastName property of the given person object
//   * `getLastName({firstName: 'Alley', lastName: 'Harmon'}) // -> 'Harmon'`
//   * `getLastName({firstName: 'Lika', lastName: 'Arri'}) // -> 'Arri'`

const getLastName = function(person) {
  return person.lastName
}
// GET FULL NAME 

// * `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object
//   * `getFullName({firstName: 'Alley', lastName: 'Harmon'}) // -> 'Alley Harmon'`
//   * `getFullName({firstName: 'Lika', lastName: 'Arri'}) // -> 'Lika Arri'`

const getFullName = function(person) {
  return `${person.firstName} ${person.lastName}`
}
// SET FIRST NAME

// * `setFirstName` - changes the value of the firstName property of the given person object to the given value
//   * `setFirstName({firstName: 'Alley', lastName: 'Harmon'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Harmon'}`
//   * `setFirstName({firstName: 'Lika', lastName: 'Arri'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Arri'}`


const setFirstName = function(person,newName) {
  person.firstName = newName
  return person
}
// SET AGE

// * `setAge` - changes the value of the age property of the given person object to the given value
//   * `setAge({firstName: 'Alley', lastName: 'Harmon', age: 39}, 45) // -> {firstName: 'Alley', lastName: 'Harmon', age: 45}`
//   * `setAge({firstName: 'Lika', lastName: 'Arri', age: 29}, 35) // -> {firstName: 'Lika', lastName: 'Arri', age: 35}`


const setAge= function(person,age) {
  person['age'] = age
  return person
}
// GIVE BIRTHDAY


// * `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property
//   * `giveBirthday({firstName: 'Alley', lastName: 'Harmon', age: 39}) // -> {firstName: 'Alley', lastName: 'Harmon', age: 40}`
//   * `giveBirthday({firstName: 'Lika', lastName: 'Arri', age: 29}) // -> {firstName: 'Arri', lastName: 'Arri', age: 30}`
//   * `giveBirthday({firstName: 'Baby', lastName: 'Harmon'}) // -> {firstName: 'Baby', lastName: 'Harmon', age: 1}`

const giveBirthday = function(person) {
  // //if age prop is not in obj
  // if(person['age'] === undefined) {
  //   //set age prop with value of one
  //   person['age'] = 1
  // } else {
  //   //increase the person age by one
  //   person.age += 1
  // }
  return person['age'] === undefined ? person['age'] = 1 : person.age += 1
}
// MARRY

// * `marry` - sets the marital status of both given people to `true` and sets each person's `spouseName` property to be the full name of the other

// ```
// const person1 = {firstName: 'Alley', lastName: 'Harmon', married: false}
// const person2 = {firstName: 'Lika', lastName: 'Arri', married: false}
// marry(person1, person2)
// console.log(person1) // -> {firstName: 'Alley', lastName: 'Harmon', married: true, spouseName: 'Lika Arri'}
// console.log(person2) // -> {firstName: 'Lika', lastName: 'Arri', married: true, spouseName: 'Alley Harmon'}
// ```

const marry= function(person1,person2) {
  person1.married = true
  person2.married = true
  person1['spouseName'] = `${person2.firstName} ${person2.lastName}`
  person2['spouseName'] = `${person1.firstName} ${person1.lastName}`
  return person1 , person2
}
// DIVORCE

// * `divorce` - changes the marital status to `false` and removes the `spouseName` property from both given people
// ```
// const person1 = {firstName: 'Alley', lastName: 'Harmon', married: true, spouseName: 'Lika Arri'}
// const person2 = {firstName: 'Lika', lastName: 'Arri', married: true, spouseName: 'Alley Harmon'}
// divorce(person1, person2);
// console.log(person1) // -> {firstName: 'Alley', lastName: 'Harmon', married: false} 
// console.log(person2) // -> {firstName: 'Lika', lastName: 'Arri', married: false}
// ```

const divorce= function(person1,person2) {
  person1.married = false
  person2.married = false
  delete person2['spouseName']
  delete person1['spouseName']
  
  return person1 , person2
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}