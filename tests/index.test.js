const D = require('../src/index.js');

describe('D Library', () => {

    describe('Properties', () => {
        const date = new D(2023, 4, 6); // May 6, 2023

        test('year', () => {
            expect(date.year).toBe(2023);
        });

        test('yr', () => {
            expect(date.yr).toBe('23');
        });

        test('month', () => {
            expect(date.month).toBe('May');
        });

        test('mon', () => {
            expect(date.mon).toBe('May');
        });

        test('day', () => {
            expect(date.day).toBe('Saturday');
        });

        test('dy', () => {
            expect(date.dy).toBe('Sat');
        });

        test('date', () => {
            expect(date.date).toBe(6);
        });

        test('hours', () => {
            expect(date.hours).toBe(0);
        });

        test('mins', () => {
            expect(date.mins).toBe(0);
        });

        test('secs', () => {
            expect(date.secs).toBe(0);
        });
    });

    describe('Methods', () => {
        const date = new D(2023, 4, 6);

        test('getOrdinal', () => {
            expect(date.getOrdinal(1)).toBe('1st');
            expect(date.getOrdinal(22)).toBe('22nd');
            expect(date.getOrdinal(33)).toBe('33rd');
            expect(date.getOrdinal(44)).toBe('44th');
        });

        test('format', () => {
            expect(date.format('Y-M-D')).toBe('2023-May-06');
            expect(date.format('M D, Y')).toBe('May 06, 2023');
            expect(date.format('L, m #')).toBe('Saturday, May 6th');
        });

        test('when', () => {
            const currentDate = new Date(); 
            const diff = date._date - currentDate;

            if (diff === 0) {
                expect(date.when()).toBe('now');
            } else if (diff > 0) {
                expect(date.when()).toContain('from now');
            } else {
                expect(date.when()).toContain('ago');
            }
        });
    });
});
