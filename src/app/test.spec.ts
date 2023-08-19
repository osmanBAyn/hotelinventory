import { calculator } from "./testservice";
describe('testservice', () => {
    it('should add two numbers', () => {
        const calc = new calculator();
        const result = calc.add(1, 2);
        expect(result).toBe(3);
    });
    it('should subtract two numbers', () => {
        const calc = new calculator();
        const result = calc.subtract(1, 2);
        expect(result).toBe(-1);
    });
});