<template>
    <navbar />
    <main>
        <RouterView />
    </main>
    <my-footer />
</template>
<script>
import Navbar from "@/components/UI/Navbar.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
    components: {
        Navbar, MyFooter
    }
}
</script>
