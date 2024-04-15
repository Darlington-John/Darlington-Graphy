import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";

export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
    new FormStrategy(async ({ form }) => {
      let email = form.get("email");
      let password = form.get("password");
      let user = await login(email, password);
      
      
      
      return user;
    }),
    
    
    "user-pass"
  );