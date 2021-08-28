// Example Code Run Test
//============================================

const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

console.log(userEmail)