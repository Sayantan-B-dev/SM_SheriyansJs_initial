
function generateRandomFileName() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `download-${randomString}.txt`;
}

const fileNameSpan = document.getElementById('file-name');
fileNameSpan.textContent = generateRandomFileName();

const downloadBtn = document.getElementById('download-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('download-percentage');
let interval;

function simulateDownload() {
    let progress = 0;
    progressBar.style.width = '0%';
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + '%';
        progressText.innerText=progress+'%'

        if (progress >= 100) {
            clearInterval(interval);
            downloadBtn.innerText = "Downloaded"
            downloadBtn.style.opacity = 0.5
            fileNameSpan.textContent = generateRandomFileName();
        }
    }, 30);
}

downloadBtn.addEventListener('click', simulateDownload);
