import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Templates } from './pages/templates.jsx'
import { AppHeader } from "./cmps/app-header";
import { Login } from './pages/login.jsx'
import { UserMsg } from "./cmps/user-msg";
import { Editor } from "./pages/editor";
import { Publish } from "./pages/publish";
import { Home } from "./pages/home";
import { MySites } from "./pages/my-sites.jsx";


export function App() {
  const [pageClass, setPageClass] = useState('')
  return (
    <div className={`main-app ${pageClass}`}>
      <AppHeader setPageClass={setPageClass} pageClass={pageClass}  />

      <main className="app">
        <Switch>
          <Route path="/templates" component={Templates} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Login} />
          <Route path="/my-sites" component={MySites} />
          <Route path="/editor" component={() => <Editor setPageClass={setPageClass} />} />
          <Route path="/publish" component={() => <Publish  pageClass={pageClass} setPageClass={setPageClass}/>} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <UserMsg/>
    </div>
  )

}