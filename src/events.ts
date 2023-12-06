/* eslint-disable max-classes-per-file */
import { AnalyticsEvent } from "./analytics";

import type {
  ConsentPurposeMarketing,
  ConsentPurposeFunctional,
} from "./analytics";

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

  consentPurpose = "marketing" as ConsentPurposeMarketing;

  eventProperties: {
    petOPK: string;
  };

  observabilityTags = {};

  constructor(eventProperties: { petOPK: string }) {
    this.eventProperties = eventProperties;
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

  consentPurpose = "marketing" as ConsentPurposeMarketing;

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

  consentPurpose = "marketing" as ConsentPurposeMarketing;

  eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
  };

  observabilityTags = {};

  constructor(eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
  }) {
    super({}, {});
    this.eventProperties = eventProperties;
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

  consentPurpose = "functional" as ConsentPurposeFunctional;
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

  consentPurpose = "functional" as ConsentPurposeFunctional;
}
