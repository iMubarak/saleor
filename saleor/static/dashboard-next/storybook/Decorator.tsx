import React from "react";

import { Provider as DateProvider } from "../components/Date/DateContext";
import { MessageManager } from "../components/messages";
import ThemeProvider from "../components/Theme";
import { TimezoneProvider } from "../components/Timezone";

import SduiThemeProvider from "@ui/ThemeProvider";

export const Decorator = storyFn => (
  <DateProvider value={+new Date("2018-08-07T14:30:44+00:00")}>
    <TimezoneProvider value="America/New_York">
      <SduiThemeProvider>
        <ThemeProvider isDefaultDark={false}>
          <MessageManager>
            <div
              style={{
                padding: 24
              }}
            >
              {storyFn()}
            </div>
          </MessageManager>
        </ThemeProvider>
      </SduiThemeProvider>
    </TimezoneProvider>
  </DateProvider>
);
export default Decorator;
