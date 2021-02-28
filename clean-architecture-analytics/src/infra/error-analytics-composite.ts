import { Analytics } from "../analytics/analytics";
import { ErrorAnalytics } from "../analytics/error-analytics";

export class ErrorAnalyticsComposite implements ErrorAnalytics {
  constructor(private readonly errorAnalytics: ErrorAnalytics[]) {}
  
  saveError(data: any): void {
    this.errorAnalytics.forEach(e => e.saveError(e));
  }
}