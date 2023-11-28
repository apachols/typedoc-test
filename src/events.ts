/* eslint-disable max-classes-per-file */
import type { AnalyticsEvent } from "./analytics";

export class PetInsurancePetSelectorClick implements AnalyticsEvent {
  eventName = "pet-insurance-pet-selector-click";

  consentPurpose = "marketing";

  eventProperties: {
    petOPK: string;
  };

  observabilityTags = {};

  constructor(
    eventProperties: { petOPK: string },
    observabilityTags: Record<string, never>
  ) {
    this.eventProperties = eventProperties;
    this.observabilityTags = observabilityTags;
  }
}

export class PetInsuranceCtaShown implements AnalyticsEvent {
  eventName = "pet-insurance-cta-shown";

  consentPurpose = "performance";

  eventProperties: {
    personId: string;
    platform: string;
    ctaSource: string;
  };

  observabilityTags: {
    ctaSource: string;
  };

  constructor(
    eventProperties: { personId: string; platform: string; ctaSource: string },
    observabilityTags: {
      ctaSource: string;
    }
  ) {
    this.eventProperties = eventProperties;
    this.observabilityTags = observabilityTags;
  }
}

export interface PetInsuranceFletchWidgetShown extends AnalyticsEvent {
  eventName: "pet-insurance-fletch-widget-shown";
  eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
  };
  observabilityTags: Record<string, never>;
}

export interface PetInsuranceFletchLoggedOutView extends AnalyticsEvent {
  eventName: "pet-insurance-fletch-logged-out-view";
  eventProperties: Record<string, never>;
  observabilityTags: Record<string, never>;
}

export interface PetInsurancePetSelectorView extends AnalyticsEvent {
  eventName: "pet-insurance-pet-selector-view";
  eventProperties: Record<string, never>;
  observabilityTags: Record<string, never>;
}
