class Youtube{
    constructor(key) {
        this.key = key;
        this.RequestOptions = {
         method: 'GET',
         redirect: 'follow'
};
    }

    async mostPopular() {
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBnG1HJ2t1RsCIW-56x9Rj3KV333ufSw0Q",
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return (result_1.items);
    }
    
    async search(query) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=AIzaSyBnG1HJ2t1RsCIW-56x9Rj3KV333ufSw0Q`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;