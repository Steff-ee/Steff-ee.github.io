import { RefObject, useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

/**
 * Modeled off 'react-use' library
 */
export const useClickAway = <E extends Event = Event>(
  refs: Array<RefObject<HTMLElement | null>>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: any) => {
        for (const ref of refs) {
            if (ref.current?.contains(event.target)) {
                return
            }
        }
        
        savedCallback.current(event);
    };
    for (const eventName of events) {
        document.addEventListener(eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handler);
      }
    };
  }, [events, ...refs]);
};