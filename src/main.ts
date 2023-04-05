

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err_0) => {
    console.clear();
    console.error(err_0);
  });
