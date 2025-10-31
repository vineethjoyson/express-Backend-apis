// 1. Find a single user matching the query
const user = await User.findOne({ username: "john" });

// 2. Find a user by their MongoDB _id
const userById = await User.findById("64e1a2b3c4d5e6f7a8b9c0d1");

// 3. Find all users (optionally with a filter)
const allUsers = await User.find(); // all users
const allUserSorted= User.find().sort({name: 1})// 1 or -1 based o what alphabetic or reverse alpahabetic
const filteredUsers = await User.find({ username: /john/i }); // users with 'john' in username

// 4. Create and save a new user (shortcut)
const newUser = await User.create({
  username: "alice",
  password: "password123",
});

// 5. Save a user instance to the database (two-step)
const userInstance = new User({ username: "bob", password: "password456" });
await userInstance.save();

// 6. Update a single user matching the filter
await User.updateOne({ username: "alice" }, { password: "newpassword" });

// 7. Delete a single user matching the filter
await User.deleteOne({ username: "bob" });

// 8. Find a user by ID and update them
await User.findByIdAndUpdate("64e1a2b3c4d5e6f7a8b9c0d1", {
  password: "updatedpassword",
});

// 9. Find a user by ID and delete them
await User.findByIdAndDelete("64e1a2b3c4d5e6f7a8b9c0d1");

//

const users = await User.find({ age: { $gt: 5 } });
console.log(users);
🔍 Explanation:
User.find() → fetches documents from the collection

{ age: { $gt: 5 } } → means “where age > 5”

🧠 Common Comparison Operators
Operator	Meaning	Example	SQL Equivalent
$eq	Equal	{ age: { $eq: 25 } }	age = 25
$ne	Not equal	{ age: { $ne: 25 } }	age != 25
$gt	Greater than	{ age: { $gt: 25 } }	age > 25
$gte	Greater than or equal	{ age: { $gte: 25 } }	age >= 25
$lt	Less than	{ age: { $lt: 25 } }	age < 25
$lte	Less than or equal	{ age: { $lte: 25 } }	age <= 25
