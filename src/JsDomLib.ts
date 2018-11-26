export class JsDomLib {
    public static polyfill() {
        if (typeof (window as any).CustomEvent === 'function') {
            return false;
        }

        function CustomEvent( event: any, params: any ) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            const evt = window.document.createEvent( 'CustomEvent' );
            evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        }

        CustomEvent.prototype = (window as any).Event.prototype;
        (window as any).CustomEvent = CustomEvent;

        return CustomEvent;
    }

    public track() {
        (window as any).dispatchEvent(new CustomEvent('track', {
            detail: {
                message: 'hazcheeseburger',
            },
        }));
    }

    public addTracker(fn: (e: any) => void) {
        (window as any).addEventListener('track', fn);
    }
}
