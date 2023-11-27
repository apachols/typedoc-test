type EventProperty = string | number;

export interface AnalyticsEvent {
  eventName: string;
  eventProperties: Record<string, EventProperty>;
}

export interface PerformanceAnalyticsEvent extends AnalyticsEvent {}
export interface FunctionalAnalyticsEvent extends AnalyticsEvent {}
export interface StrictlyNecessaryAnalyticsEvent extends AnalyticsEvent {}
export interface MarketingNecessaryAnalyticsEvent extends AnalyticsEvent {}
