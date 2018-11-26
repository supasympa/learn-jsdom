import * as jsdom from 'jsdom';
import { JsDomLib } from '../src/JsDomLib';
import { expect } from './support';

describe('testing with JSDOM', () => {
    before(() => {
        const { JSDOM } = jsdom;

        const dom = new JSDOM(``, {
            runScripts: 'dangerously',
            url: 'http://localhost',
        });

        (global as any).window = dom.window;
        (global as any).document = (global as any).window.document;
        (global as any).CustomEvent = dom.window.CustomEvent;
    });

    after(() => {
        (global as any).window = undefined;
        (global as any).document = undefined;
        (global as any).CustomEvent = undefined;
    });

    it('should work', () => {
        const jlib = new JsDomLib();
        const store = {
            calls: 0,
            value: null,
        };

        const spy = (e: any) => {
            store.calls = store.calls + 1;
            store.value = e;
        };
        jlib.addTracker(spy);
        expect(store.calls).to.equal(0);
        jlib.track();
        expect(store.calls).to.equal(1);
        // @ts-ignore;
        expect(store.value.detail).to.deep.equal({
            message: 'hazcheeseburger',
        });
    });
});
