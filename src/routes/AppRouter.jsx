import { LayoutPage, HomePage } from "pages";
import UserPage from "pages/UserPage/UserPage";

import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "utils/history";

const AppRouter = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path=":userName" element={<UserPage />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default AppRouter;
