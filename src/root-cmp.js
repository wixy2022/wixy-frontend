import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { AppHeader } from "./cmps/app-header";
// import { AppFooter } from "./cmps/app-footer";
import { UserMsg } from "./cmps/user-msg";
import { Editor } from "./pages/editor";
import { Home } from "./pages/home";

export function App() {
const [pageClass,setPageClass] = useState('')
console.log(pageClass)




  return (
    <div className={`main-app ${pageClass}`}>
      <AppHeader />

      <main className="app">
        <Switch>
          {/* <Route path="/Editor" component={()=><Editor />} /> */}
          <Route path="/Editor" component={()=><Editor setPageClass={setPageClass}/>} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      {/* <AppFooter /> */}
      <UserMsg />
    </div>
  )
}