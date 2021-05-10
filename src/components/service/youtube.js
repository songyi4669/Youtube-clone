class Youtube{
    constructor(key) {
        this.key = key;
        this.RequestOptions = {
         method: 'GET',
         redirect: 'follow'
};
    }

    mostPopular() {
        return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBnG1HJ2t1RsCIW-56x9Rj3KV333ufSw0Q",
            this.getRequestOptions
        )
      .then(response => response.json())
      .then(result => (result.items))
    }
    
    search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=AIzaSyBnG1HJ2t1RsCIW-56x9Rj3KV333ufSw0Q`,
             this.getRequestOptions
        )
            .then(response => response.json())
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId }))
            );
    }
}

export default Youtube;