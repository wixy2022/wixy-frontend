import { Route, Switch } from "react-router-dom";

import { AppHeader } from "./cmps/app-header";
import { UserMsg } from "./cmps/user-msg";
import { Home } from "./pages/home";

export function App() {

  return (
    <div className="app main-layout">
      <AppHeader />
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>

      <UserMsg />
    </div>
  );
}