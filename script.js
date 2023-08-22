document.addEventListener("DOMContentLoaded", () => {
    const videoUrlInput = document.getElementById("videoUrl");
    const downloadBtn = document.getElementById("downloadBtn");
    const thumbnailImg = document.getElementById("thumbnailImg");

    downloadBtn.addEventListener("click", async () => {
        const videoUrl = videoUrlInput.value;
        const videoId = getVideoId(videoUrl);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        try {
            const response = await fetch(thumbnailUrl);
            if (response.ok) {
                thumbnailImg.src = thumbnailUrl;
            } else {
                console.error("Failed to fetch thumbnail");
            }
        } catch (error) {
            console.error("Error fetching thumbnail:", error);
        }
    });

    function getVideoId(url) {
        const regex = /(?:v=|\/embed\/|\/v\/|\.be\/|\/e\/|watch\?v=|&v=|watch\?feature=player_embedded&v=)([^#\&\?]*).*/;
        const match = url.match(regex);
        return match && match[1].length === 11 ? match[1] : null;
    }
});
