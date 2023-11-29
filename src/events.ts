/* eslint-disable max-classes-per-file */
import { AnalyticsEvent } from "./analytics";

/**
 * &nbsp;
 *
 * # Description
 *
 * Fires when the pet selector is clicked on the pet insurance page.
 *
 * &nbsp;
 */
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

/**
 * &nbsp;
 *
 * # Description
 *
 * Fires when the Pet Insurance CTA is shown
 *
 * &nbsp;
 */
export class PetInsuranceCtaShown extends AnalyticsEvent {
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
    super({}, {});
    this.eventProperties = eventProperties;
    this.observabilityTags = observabilityTags;
  }
}

/**
 * &nbsp;
 *
 * # Description
 *
 * Fires when the Fletch widget is shown
 *
 * &nbsp;
 */
export class PetInsuranceFletchWidgetShown extends AnalyticsEvent {
  eventName = "pet-insurance-fletch-widget-shown";

  consentPurpose = "marketing";

  eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
  };

  observabilityTags = {};

  constructor(
    eventProperties: {
      ownerFieldsPrefilled: number;
      petFieldsPrefilled: number;
    },
    observabilityTags: Record<string, never>
  ) {
    super({}, {});
    this.eventProperties = eventProperties;
    this.observabilityTags = observabilityTags;
  }
}

/**
 * &nbsp;
 *
 * # Description
 *
 * Fires when the pet insurance page renders for a logged out user
 *
 * &nbsp;
 */
export class PetInsuranceFletchLoggedOutView extends AnalyticsEvent {
  eventName = "pet-insurance-fletch-logged-out-view";

  consentPurpose = "functional";
}

/**
 * &nbsp;
 *
 * # Description
 *
 * Fires when a user sees the pet selector on the pet insurance page
 *
 * &nbsp;
 */
export class PetInsurancePetSelectorView extends AnalyticsEvent {
  eventName = "pet-insurance-pet-selector-view";

  consentPurpose = "strictly-necessary";
}
