<script lang="ts">
    import type { ImageType } from "$types/image.type";

    import { onMount, createEventDispatcher } from "svelte";

    export let actions: ImageType;
    let image_loaded: boolean = false;
    let image_failed: boolean = false;
    let image_loading: boolean = false;

    const dispatch = createEventDispatcher();

    onMount(() => {
        const imageObject: HTMLImageElement = new Image;
        imageObject.src = actions.src;
        image_loading = true;

        imageObject.onload = () => {
            image_loading = false;
            image_loaded = true;
        }
        
        imageObject.onerror = () => {
            image_loading = false;
            image_failed = true;
            dispatch("event");
        }

        if (image_loading) {
            dispatch("event");
        }
    });
</script>

{#if image_loaded}
    <img src={actions.src} alt={actions.alt} class={actions.class} />
{:else if image_failed}
    <div class="{actions.classForState} animate-pulse rounded-lg bg-[#646464]"></div>
{:else if image_loading}
    <div class="{actions.classForState} animate-pulse rounded-lg bg-[#646464]"></div>
{/if}