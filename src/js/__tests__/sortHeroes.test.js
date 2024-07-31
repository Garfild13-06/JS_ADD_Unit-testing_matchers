const { sortHeroesByHealth } = require('../sortHeroes');

test('should sort heroes by health in descending order', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    const result = sortHeroesByHealth(input);
    expect(result).toEqual(expected); // Используем toEqual для глубокого сравнения
});

test('should handle an empty array', () => {
    const input = [];
    const expected = [];
    const result = sortHeroesByHealth(input);
    expect(result).toEqual(expected);
});

test('should handle array with one hero', () => {
    const input = [{ name: 'маг', health: 100 }];
    const expected = [{ name: 'маг', health: 100 }];
    const result = sortHeroesByHealth(input);
    expect(result).toEqual(expected);
});
