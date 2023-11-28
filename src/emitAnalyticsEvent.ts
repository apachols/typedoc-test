/* eslint-disable @typescript-eslint/no-unused-vars */
import type { EventName, EventProperties, ObservabilityTags } from "./index";

export default function emitAnalyticsEvent<T extends EventName>(
  eventName: T,
  eventProperties: EventProperties<T> = {} as EventProperties<T>,
  observabilityTags: ObservabilityTags<T> = {} as ObservabilityTags<T>
): void {
  // Currently does nothing!
  // No reason we couldn't eventually send Analytics Events from the SSR server as well
}
