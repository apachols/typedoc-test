// /* eslint-disable max-classes-per-file */
// import { CONCEPTS } from '@rover/rsdk/concepts';
import type { ConsentPurpose } from "./analytics";
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

  consentPurpose: ConsentPurpose = "performance";

  // concept = CONCEPTS.service_offerings.insurance;

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

  consentPurpose: ConsentPurpose = "performance";

  // concept = CONCEPTS.service_offerings.insurance;

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

  consentPurpose: ConsentPurpose = "performance";

  // concept = CONCEPTS.service_offerings.insurance;

  eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
    petOPK?: string;
  };

  observabilityTags = {};

  constructor(eventProperties: {
    ownerFieldsPrefilled: number;
    petFieldsPrefilled: number;
    petOPK?: string;
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

  consentPurpose: ConsentPurpose = "performance";

  // concept = CONCEPTS.service_offerings.insurance;
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

  consentPurpose: ConsentPurpose = "performance";

  // concept = CONCEPTS.service_offerings.insurance;
}
