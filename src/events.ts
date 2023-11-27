import type { PerformanceAnalyticsEvent } from "./analytics";
import type { FunctionalAnalyticsEvent } from "./analytics";
import type { StrictlyNecessaryAnalyticsEvent } from "./analytics";
import type { MarketingAnalyticsEvent } from "./analytics";

export interface PetInsuranceFletchWidgetShown
  extends PerformanceAnalyticsEvent {
  eventName: "pet-insurance-fletch-widget-shown";
  eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
  };
  observabilityTags: Record<string, never>;
}

export interface PetInsuranceFletchLoggedOutView
  extends FunctionalAnalyticsEvent {
  eventName: "pet-insurance-fletch-logged-out-view";
  eventProperties: Record<string, never>;
  observabilityTags: Record<string, never>;
}

export interface PetInsurancePetSelectorView
  extends StrictlyNecessaryAnalyticsEvent {
  eventName: "pet-insurance-pet-selector-view";
  eventProperties: Record<string, never>;
  observabilityTags: Record<string, never>;
}

export interface PetInsurancePetSelectorClick extends MarketingAnalyticsEvent {
  eventName: "pet-insurance-pet-selector-click";
  eventProperties: {
    petOPK: string;
  };
  observabilityTags: Record<string, never>;
}

export interface PetInsuranceCtaShown extends PerformanceAnalyticsEvent {
  eventName: "pet-insurance-cta-shown";
  eventProperties: {
    personId: string;
    platform: string;
    ctaSource: string;
  };
  observabilityTags: {
    ctaSource: string;
  };
}
