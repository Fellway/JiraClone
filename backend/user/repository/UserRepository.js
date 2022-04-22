const {client} = require('../../config/DbConfig')

async function getUserByUsername(username) {
  const user = (await client.query(`SELECT *
                                    FROM public.users
                                    WHERE username = '${username}'`)).rows[0];
  if (user) {
    return user;
  }
  throw new Error("User doesn't exist!")
}

async function addUser(user) {
  try {
    await client.query(`INSERT INTO public.users (username, password)
                VALUES ('${user.username}', '${user.hash}')`)
  } catch (err) {
    throw new Error("User already exist!");
  }
}

module.exports = {getUserByUsername, addUser}
