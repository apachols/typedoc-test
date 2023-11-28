import type { AnalyticsEvent } from "./analytics";
import type {
  PetInsuranceFletchLoggedOutView,
  PetInsuranceFletchWidgetShown,
  PetInsurancePetSelectorView,
} from "./events";
import { PetInsuranceCtaShown, PetInsurancePetSelectorClick } from "./events";

export { default as emitAnalyticsEvent } from "./emitAnalyticsEvent";

/* All members of the AnalyticsEventMap need to extend AnalyticsEvent */

type AnalyticsEventMapType = Record<string, AnalyticsEvent>;

/* Add all Event types to AnalyticsEventMap, which restricts what can be fired by emitAnalyticsEvent */

export interface AnalyticsEventMap extends AnalyticsEventMapType {
  "pet-insurance-fletch-widget-shown": PetInsuranceFletchWidgetShown;
  "pet-insurance-fletch-logged-out-view": PetInsuranceFletchLoggedOutView;
  "pet-insurance-pet-selector-view": PetInsurancePetSelectorView;
  "pet-insurance-pet-selector-click": PetInsurancePetSelectorClick;
  "pet-insurance-cta-shown": PetInsuranceCtaShown;
}

export const buildAnalyticsEvent = <T extends EventName>(
  eventName: T,
  eventProperties: EventProperties<T> = {} as EventProperties<T>,
  observabilityTags: ObservabilityTags<T> = {} as ObservabilityTags<T>
): AnalyticsEvent => {
  if (eventName === "pet-insurance-pet-selector-click") {
    return new PetInsurancePetSelectorClick(
      eventProperties as EventProperties<"pet-insurance-pet-selector-click">,
      observabilityTags as ObservabilityTags<"pet-insurance-pet-selector-click">
    );
  }
  if (eventName === "pet-insurance-cta-shown") {
    return new PetInsuranceCtaShown(
      eventProperties as EventProperties<"pet-insurance-cta-shown">,
      observabilityTags as ObservabilityTags<"pet-insurance-cta-shown">
    );
  }
  throw new Error("Missing Event Type in buildAnalyticsEvent");
};

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
