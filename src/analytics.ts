type EventProperty = string | number;

type ObservabilityTag = string | number;

export interface AnalyticsEvent {
  eventName: string;
  consentPurpose: string;
  eventProperties: Record<string, EventProperty>;
  observabilityTags: Record<string, ObservabilityTag>;
}
