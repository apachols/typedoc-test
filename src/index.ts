type EventProperty = string | number;

type ObservabilityTag = string | number;

interface AnalyticsEvent {
  eventName: string;
  eventProperties: Record<string, EventProperty>;
}
