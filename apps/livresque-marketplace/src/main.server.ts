import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Angular 21 SSR expects a default-exported bootstrap(context) function.
// Accept the context argument and pass it through to bootstrapApplication.
export default function bootstrap(context?: unknown) {
  // Third argument is the SSR BootstrapContext; pass it if provided.
  // config already includes provideServerRendering().
  // @ts-expect-error: context type is provided by Angular SSR at runtime.
  return bootstrapApplication(App, config, context);
}

