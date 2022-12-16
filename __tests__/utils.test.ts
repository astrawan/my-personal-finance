import { CurrencyNumberFormat } from '../src/utils';

describe('utils', () => {
  it('CurrencyNumberFormat', () => {
    let num = CurrencyNumberFormat.format(5539630);
    expect(num).toBe('$5,539,630.00');

    num = CurrencyNumberFormat.format(5539630.5);
    expect(num).toBe('$5,539,630.50');

    num = CurrencyNumberFormat.format(2748);
    expect(num).toBe('$2,748.00');

    num = CurrencyNumberFormat.format(2748.5);
    expect(num).toBe('$2,748.50');

    num = CurrencyNumberFormat.format(143);
    expect(num).toBe('$143.00');

    num = CurrencyNumberFormat.format(143.5);
    expect(num).toBe('$143.50');
  });
});
