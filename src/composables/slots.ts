import { useSlots } from 'vue';

/**
 * @param name slot name
 * @returns `true` or `false`
 */
export function useHasSlotContent(name: string = 'default') {
  const slots = useSlots();
  return !!slots[name];
}
