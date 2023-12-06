export type ConsentPurposeFunctional = "functional";

export type ConsentPurposePerformance = "performance";

export type ConsentPurposeMarketing = "marketing";

export type ConsentPurposeStrictlyNecessary = "strictly-necessary";

export type ConsentPurpose =
  | ConsentPurposeFunctional
  | ConsentPurposePerformance
  | ConsentPurposeMarketing
  | ConsentPurposeStrictlyNecessary;

export abstract class AnalyticsEvent {
  abstract eventName: string;

  abstract consentPurpose: ConsentPurpose;

  eventProperties = {};

  observabilityTags = {};

  constructor(
    eventProperties?: Record<string, never>,
    observabilityTags?: Record<string, never>
  ) {
    this.eventProperties = eventProperties || {};
    this.observabilityTags = observabilityTags || {};
  }
}
