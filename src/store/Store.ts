import { readable, writable } from "svelte/store";

export const user = writable({
  total_load: { Watts: false, VA: true, kVA: false },
  operating_voltage: { first: false, second: true, third: false },
});
