// Create an application that takes an ARRAY of user OBJECTS and render them in a unordered list <ul></ul>

const users = [
  {
    id: 0,
    name: "kev",
    age: 28,
    canDrink: true,
  },
  {
    id: 1,
    name: "sal",
    age: 18,
    canDrink: true,
  },
  {
    id: 2,
    name: " bill",
    age: 12,
    canDrink: false,
  },
];

//  console.log('first user', users[0])
const isAdult = function (user) {
  if (user.age >= 18) {
    return user;
  } else {
    return 'not an adult';
  }
};

for (let i = 0; i < users.length; i++) {
    
  const userBoolean = isAdult(users[i]);

  console.log("our users age", users[i].age, userBoolean);
}



console.log("loaded main.js =====>");
document.body.append("This is loading from main.js");
