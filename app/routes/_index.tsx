
import Navbar from "~/components/navbar";
import favicon from '~/assets/images/favicon.png'
import type { LinksFunction  } from "@remix-run/node";
import GetStarted from "~/components/sections/getStarted";
import AdminSection from "~/components/sections/admin";
import TrustedUsersSection from "~/components/sections/trustedUsers";
import UnifyDataSection from "~/components/sections/unifyData";
import UseCasesSection from "~/components/sections/useCases";
import SaveToGraphySection from "~/components/sections/saveToGraphy";
import Footer from "~/components/footer";
import Overlay from "~/components/overlay";
export const links: LinksFunction = () => {
  return [

    { rel: 'icon', href: favicon ,
  type: 'image/png'},
  ]
}

export default function Index() {

    return <div>
        <div  >
<Navbar/>
<Overlay/>
        <GetStarted/>
        <AdminSection/>
        <TrustedUsersSection/>
        <UnifyDataSection/>
        <UseCasesSection cindy=" "/>
        <SaveToGraphySection/>
        <Footer/>
        </div>
    </div>
}

