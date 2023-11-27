import type { AnalyticsEvent } from "./analytics";
import type { PetInsuranceFletchWidgetShown } from "./events";
import type { PetInsuranceFletchLoggedOutView } from "./events";
import type { PetInsurancePetSelectorView } from "./events";
import type { PetInsurancePetSelectorClick } from "./events";
import type { PetInsuranceCtaShown } from "./events";

/* All members of the AnalyticsEventMap need to extend AnalyticsEvent */

type AnalyticsEventMapType = Record<string, AnalyticsEvent>;

/* Add all Event types to AnalyticsEventMap, which restricts what can be fired by emitAnalyticsEvent */

interface AnalyticsEventMap extends AnalyticsEventMapType {
  "pet-insurance-fletch-widget-shown": PetInsuranceFletchWidgetShown;
  "pet-insurance-fletch-logged-out-view": PetInsuranceFletchLoggedOutView;
  "pet-insurance-pet-selector-view": PetInsurancePetSelectorView;
  "pet-insurance-pet-selector-click": PetInsurancePetSelectorClick;
  "pet-insurance-cta-shown": PetInsuranceCtaShown;
}

export type EventName = keyof AnalyticsEventMap;

export type EventProperties<T extends EventName> =
  T extends keyof AnalyticsEventMap
    ? AnalyticsEventMap[T] extends { eventProperties: infer P }
      ? P
      : never
    : never;

export type ObservabilityTags<T extends EventName> =
  T extends keyof AnalyticsEventMap
    ? AnalyticsEventMap[T] extends { observabilityTags: infer P }
      ? P
      : never
    : never;
