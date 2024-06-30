Vue.component('author-info', {
    props: ['profile'],
    template: `
        <div class="author-info" v-if="profile" :class="{ visible: profile }">
            <h3>{{ profile.name }}</h3>
            <p><strong>Foodie Level:</strong> {{ profile.level }}</p>
            <p><strong>Bio:</strong> <br>{{ profile.bio }}</p>
            <button @click="closeProfile">Close</button>
        </div>
    `,
    methods: {
        closeProfile() {
            this.$emit('close-profile');
        }
    }
});