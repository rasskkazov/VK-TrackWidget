import { RouterProvider } from "react-router-dom";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { router } from "./router/Router";

import "./App.scss";

export const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot mode="partial">
          <RouterProvider router={router} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
