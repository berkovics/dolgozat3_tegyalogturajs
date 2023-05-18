// app.spec.js
// Berkovics Gellért, 2023-05-18, Szoft I/1/N
// https://github.com/berkovics/dolgozat3_tegyalogturajs.git

describe("Sablon sikertelen", () => {
    it('40 versenyzők és 15 célbaértek, silertelen 25', () => {
        let act = getUnsuccessCount(40, 15);
        expect(act).toBe(25)
    });
    it('62 versenyzők és 11 célbaértek, silertelen 51', () => {
        let act = getUnsuccessCount(62, 11);
        expect(act).toBe(51)
    });
})

describe("Sablon sikertelen százalék", () => {
    it('40 versenyzők és 15 célbaértek, silertelen százalék 37.5', () => {
        let act = getUnsuccessPercent(40, 15);
        expect(act).toBeCloseTo(37.5)
    });
    it('62 versenyzők és 11 célbaértek, silertelen százalék 17.741935483870968', () => {
        let act = getUnsuccessPercent(62, 11);
        expect(act).toBeCloseTo(17.741935483870968)
    });
})