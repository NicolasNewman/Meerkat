import Meerkat from '../index';

test('File IO', () => {
    expect(new Meerkat('__test__/ioTest.kat').execute()).toBe('ONE\nTWO');
})