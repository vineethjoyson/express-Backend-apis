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
