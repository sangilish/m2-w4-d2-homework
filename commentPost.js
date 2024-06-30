Vue.component('comment-post', {
    props: ['author', 'date', 'reply', 'content', 'profile'],
    template: `
        <div class="post">
            <img v-bind:src="profile.image" alt="Profile Picture" class="profile-pic" @click="showProfile">
            <span class="author">{{ author }}</span> — 
            <span class="date">{{ date }}</span>
            <span class="reply">{{ reply }}</span>
            <p>{{ content }}</p>
        </div>
    `,
    methods: {
        showProfile() {
            this.$emit('show-profile', this.profile);
        }
    }
});