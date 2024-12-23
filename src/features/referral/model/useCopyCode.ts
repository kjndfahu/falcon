export function copyCode(text: string): void {
    if (!navigator.clipboard) {
        console.error("Clipboard API not supported");
        return;
    }

    navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log("Copied to clipboard:", text);
        })
        .catch((err) => {
            console.error("Failed to copy text to clipboard:", err);
        });
}
