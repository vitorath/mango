import { LogStrategy } from "../analytics/log-strategy";
import { ActionLog } from "../analytics/action-log";
import { ErrorLog } from "../analytics/error-log";
import { ScreenLog } from "../analytics/screen-log";
import { LoginView } from "../presentation/login-view";
import { SentryAdapter } from "../infra/sentry-adapter";
import { FirebaseAdapter } from "../infra/firebase-adapter";
import { ErrorAnalyticsComposite } from "../infra/error-analytics-composite";
import { MongoAnalyticsRepository } from "../infra/mongo-analytics-repo";
import { LogglyAdapter } from "../infra/loggy-adapter";

export const makeLoginView = (): LoginView => {
  const errorAnalyticsComposite =  new ErrorAnalyticsComposite([
    new SentryAdapter(),
    new LogglyAdapter(),
    new MongoAnalyticsRepository()
  ])
  const firebaseAdapter = new FirebaseAdapter();
  const errorLog = new ErrorLog(errorAnalyticsComposite);
  const actionLog = new ActionLog(firebaseAdapter);
  const screenLog = new ScreenLog(firebaseAdapter);
  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog)
  return new LoginView(logStrategy);
}