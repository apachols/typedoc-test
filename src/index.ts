import type { AnalyticsEvent } from "./analytics";
import {
  PetInsuranceCtaShown,
  PetInsuranceFletchLoggedOutView,
  PetInsuranceFletchWidgetShown,
  PetInsurancePetSelectorClick,
  PetInsurancePetSelectorView,
} from "./events";

export { default as emitAnalyticsEvent } from "./emitAnalyticsEvent";

/* All members of the AnalyticsEventMap need to extend AnalyticsEvent */

type AnalyticsEventMapType = Record<string, AnalyticsEvent>;

/* 1. Add all Event types to AnalyticsEventMap, which restricts what can be fired by emitAnalyticsEvent */

export interface AnalyticsEventMap extends AnalyticsEventMapType {
  "pet-insurance-fletch-widget-shown": PetInsuranceFletchWidgetShown;
  "pet-insurance-fletch-logged-out-view": PetInsuranceFletchLoggedOutView;
  "pet-insurance-pet-selector-view": PetInsurancePetSelectorView;
  "pet-insurance-pet-selector-click": PetInsurancePetSelectorClick;
  "pet-insurance-cta-shown": PetInsuranceCtaShown;
}

/* 2. Add all Event types eventClassMap, which buildAnalyticsEvent uses
      to build the correct class, which provides config'd properties at runtime
*/

const eventClassMap = {
  "pet-insurance-fletch-widget-shown": PetInsuranceFletchWidgetShown,
  "pet-insurance-fletch-logged-out-view": PetInsuranceFletchLoggedOutView,
  "pet-insurance-pet-selector-view": PetInsurancePetSelectorView,
  "pet-insurance-pet-selector-click": PetInsurancePetSelectorClick,
  "pet-insurance-cta-shown": PetInsuranceCtaShown,
};

export const buildAnalyticsEvent = <T extends EventName>(
  eventName: T,
  eventProperties: EventProperties<T> = {} as EventProperties<T>,
  observabilityTags: ObservabilityTags<T> = {} as ObservabilityTags<T>
): AnalyticsEvent => {
  let eventObject = null;

  Object.keys(eventClassMap).forEach((key) => {
    const EventClass = eventClassMap[key];
    if (eventName === key) {
      eventObject = new EventClass(
        eventProperties as EventProperties<typeof eventName>,
        observabilityTags as ObservabilityTags<typeof eventName>
      );
    }
  });

  if (eventObject != null) {
    return eventObject;
  }

  throw new Error(`Missing Event Type in buildAnalyticsEvent: ${eventName}`);
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
