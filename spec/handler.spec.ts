import { handler } from '../src/handler';
import { expect } from './support';
import mockLambdaContext from './support/mockLambdaContext';

describe('A handler', () => {
    it('should work', () => {
        const fakeEvent = {};

        return expect(handler(fakeEvent, mockLambdaContext(), () => void(0))).to.eventually.equal('Hello From Aws Lambda!');
    });
});
