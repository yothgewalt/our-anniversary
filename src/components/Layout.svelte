<script lang="ts">
    import Container from "$libraries/Container.svelte";
</script>

<main class="initialize__anniversary_layout">
    <Container>
        <slot></slot>
    </Container>
</main>

<style>
    .initialize__anniversary_layout {
        @apply w-screen h-screen;
    }
</style>