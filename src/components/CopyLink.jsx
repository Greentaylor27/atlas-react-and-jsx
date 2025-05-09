export default function CopyLink({ link }) {
    function copyToClipBoard() {
        navigator.clipboard.writeText(link)
            .then(() => {
                console.log('Link copied to clipboard');
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err);
            })
    }

    return (
        <img src="src/assets/copy.svg" alt="Copy Link" onClick={copyToClipBoard} />
    )

}
