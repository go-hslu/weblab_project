import { TrainCasePipe } from "./train-case.pipe";

describe("TrainCasePipe", () => {
    it("create an instance", () => {
        const pipe = new TrainCasePipe();
        expect(pipe).toBeTruthy();
    });

    it("transforms 'Angular' to 'angular'", () => {
        const pipe = new TrainCasePipe();
        expect(pipe.transform("Angular")).toBe("angular");
    });

    it("transforms 'TypesScript' to 'typescript'", () => {
        const pipe = new TrainCasePipe();
        expect(pipe.transform("TypesScript")).toBe("typescript");
    });

    it("transforms 'GitHub Copilot' to 'github-copilot'", () => {
        const pipe = new TrainCasePipe();
        expect(pipe.transform("GitHub Copilot")).toBe("github-copilot");
    });

    it("transforms '  GitHub Copilot ' to 'github-copilot'", () => {
        const pipe = new TrainCasePipe();
        expect(pipe.transform("  GitHub Copilot ")).toBe("github-copilot");
    });

    it("transforms 'GitHub Copilot & Pages' to 'github-copilot-pages'", () => {
        const pipe = new TrainCasePipe();
        expect(pipe.transform("GitHub Copilot & Pages")).toBe("github-copilot-pages");
    });
});
