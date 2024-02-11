export function trainCaseTransform(content: string): string {
    return content.trim()
        .replace(/\s/g, "-") // Replace whitespaces ' ' with '-'
        .replace(/[^a-z0-9\-]/gi, "") // Remove non alpha-numerical
        .replace(/-+/g, "-") // Trim to single '-'
        .toLowerCase();
}
