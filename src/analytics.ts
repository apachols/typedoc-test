export abstract class AnalyticsEvent {
  abstract eventName: string;

  abstract consentPurpose: string;

  eventProperties = {};

  observabilityTags = {};

  constructor(
    eventProperties: Record<string, never>,
    observabilityTags: Record<string, never>
  ) {
    this.eventProperties = eventProperties;
    this.observabilityTags = observabilityTags;
  }
}
