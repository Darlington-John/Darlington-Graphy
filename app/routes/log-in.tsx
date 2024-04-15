import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";



export default function Screen() {
  return (
    <Form method="post">
      <input type="email" name="email" required />
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <button>Sign In</button>
    </Form>
  );
}



export async function action({ request }: ActionFunctionArgs) {
  
  
  
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/features",
  });
}




export async function loader({ request }: LoaderFunctionArgs) {
  
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
}