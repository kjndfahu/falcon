export function copyCode(text: string): void {
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log("Copied to clipboard:", text);
            })
            .catch((err) => {
                console.error("Failed to copy text to clipboard:", err);
                fallbackCopyToClipboard(text);
            });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text: string): void {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        
        // Make the textarea hidden but keep it in the page
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        
        try {
            document.execCommand('copy');
            console.log("Fallback: Copied to clipboard:", text);
        } catch (err) {
            console.error("Fallback: Failed to copy text to clipboard:", err);
        }
        
        document.body.removeChild(textarea);
    } catch (err) {
        console.error("Could not copy text:", err);
    }
}
