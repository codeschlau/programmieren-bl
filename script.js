function runCode() {
    var htmlCode = document.getElementById("html-code").value;
    var cssCode = document.getElementById("css-code").value;
    var jsCode = document.getElementById("js-code").value;
    var combinedCode = `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`;
    var iframe = document.getElementById("result");
    
    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(combinedCode);
        iframe.contentDocument.close();
    } catch (error) {
        iframe.contentDocument.open();
        iframe.contentDocument.write("Fehler: " + error.message);
        iframe.contentDocument.close();
    }
}

function downloadHTML() {
    var htmlContent = document.getElementById("html-code").value;
    var blob = new Blob([htmlContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "code_editor_bl.html";
    a.click();
}

function downloadCSS() {
    var cssContent = document.getElementById("css-code").value;
    var blob = new Blob([cssContent], { type: "text/css" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "code_editor_bl.css";
    a.click();
}

function downloadJS() {
    var jsContent = document.getElementById("js-code").value;
    var blob = new Blob([jsContent], { type: "text/javascript" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "code_editor_bl.js";
    a.click();
}

Prism.highlightAll();