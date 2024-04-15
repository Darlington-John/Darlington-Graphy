// import SignInForm from "~/components/Forms/signIn";
// import { json } from "@remix-run/node";
// import { createToken, verifyPassword } from "~/components/auth-helpers";
// export const loader = async ({ request }) => {
//   if (request.method === 'POST') {
//     const data = new URLSearchParams(await request.text());
//     const username = data.get('username');
//     const password = data.get('password');

//     // Mocked user data - replace this with data from your database
//     const user = {
//       username: 'testuser',
//       hashedPassword: '$2b$10$Nek7T08nltUp3Qltg1KlGO5nGWoAyf2UJUDbJWU8LZZpUItVKuJfa', // Password: testpassword
//     };

//     // Verify user credentials
//     const isValid = await verifyPassword(password, user.hashedPassword);

//     if (isValid) {
//       // Create a token for the user
//       const token = createToken(username);

//       // Set the token in the response cookie
//       return json({ token }, { headers: { 'Set-Cookie': `token=${token}; Path=/; HttpOnly` } });
//     } else {
//       return json({ error: 'Invalid username or password' }, { status: 401 });
//     }
//   }

//   return json({ error: 'Method not allowed' }, { status: 405 });
// };
// export const SignInPage = () => {
//   return (
//     <div>

//       <h2>Sign In</h2>
// <SignInForm/>
//     </div>
//   );
// };