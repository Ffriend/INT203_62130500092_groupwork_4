const app = {
    data() {
        return {
            photos: [
                { image: 'images/1.jpg', name: 'Shahmirzad, Iran', done: false, zoom: false },
                { image: 'images/2.jpg', name: 'Merveilles, France', done: false, zoom: false },
                { image: 'images/3.jpg', name: 'Moena, Italy', done: false, zoom: false },
                { image: 'images/4.jpg', name: 'Rye, United States', done: false, zoom: false },
                { image: 'images/5.jpg', name: 'Big Sur, United States', done: false, zoom: false },
                { image: 'images/6.jpg', name: 'Silver, United States', done: false, zoom: false }
            ],
            searchButton: true,
            searchBox: false,
            searchInput: '',
            noPhoto: false,
            id: 0,
            show: false
        }
    },
    methods: {
        clickHeart(index) {
            this.photos[index].done = !this.photos[index].done
        },
        clickSearch() {
            this.searchBox = !this.searchBox;
            this.searchButton = !this.searchButton;
            this.searchInput = '';
        },
        clickBigPic(index) {
            this.show = true;
            this.id = index;
        },
        closeBigPic() {
            this.show = false;
        }
    },
    computed: {
        countPic() {
            return this.photos.filter(t => !t.false).length
        },
        searchPhotos() {
            return this.photos.filter(items => { return items.name.toLowerCase().includes(this.searchInput.toLowerCase()) });
        }
    }
}
Vue.createApp(app).mount('#app')