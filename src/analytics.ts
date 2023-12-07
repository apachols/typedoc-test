// import type { Concept } from '@rover/rsdk/concepts';

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

  // abstract concept: Concept;

  eventProperties: Record<string, unknown> = {};

  observabilityTags: Record<string, unknown> = {};

  constructor(
    eventProperties?: Record<string, unknown>,
    observabilityTags?: Record<string, unknown>
  ) {
    this.eventProperties = eventProperties || {};
    this.observabilityTags = observabilityTags || {};
  }
}
