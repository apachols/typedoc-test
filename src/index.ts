import type { AnalyticsEvent } from "./analytics";
import type { PetInsuranceFletchWidgetShown } from "./events";
import type { PetInsuranceFletchLoggedOutView } from "./events";
import type { PetInsurancePetSelectorView } from "./events";
import type { PetInsurancePetSelectorClick } from "./events";
import type { PetInsuranceCtaShown } from "./events";

/* All members of the MetricEventMap need to extend AnalyticsEvent */

type MetricEventMapType = Record<string, AnalyticsEvent>;

/* Add all Event types to MetricEventMap, which restricts what can be fired by emitAnalyticsEvent */

interface MetricEventMap extends MetricEventMapType {
  "pet-insurance-fletch-widget-shown": PetInsuranceFletchWidgetShown;
  "pet-insurance-fletch-logged-out-view": PetInsuranceFletchLoggedOutView;
  "pet-insurance-pet-selector-view": PetInsurancePetSelectorView;
  "pet-insurance-pet-selector-click": PetInsurancePetSelectorClick;
  "pet-insurance-cta-shown": PetInsuranceCtaShown;
}

export type EventName = keyof MetricEventMap;

export type EventProperties<T extends EventName> =
  T extends keyof MetricEventMap
    ? MetricEventMap[T] extends { eventProperties: infer P }
      ? P
      : never
    : never;

export type ObservabilityTags<T extends EventName> =
  T extends keyof MetricEventMap
    ? MetricEventMap[T] extends { observabilityTags: infer P }
      ? P
      : never
    : never;
