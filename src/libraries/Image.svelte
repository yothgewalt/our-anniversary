<script lang="ts">
    import type { ImageType } from "$types/image.type";

    import { onMount } from "svelte";

    import Heart from "$assets/heart_loadding.gif";

    export let actions: ImageType;
    let image_loaded: boolean = false;
    let image_failed: boolean = false;
    let image_loading: boolean = false;

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
        }
    });
</script>

{#if image_loaded}
    <img src={actions.src} alt={actions.alt} class={actions.class} />
{:else if image_failed}
    <img src={Heart} alt="" class="h-20 w-20 280px:h-28 280px:w-28" />
{:else if image_loading}
    <img src={Heart} alt="" class="h-20 w-20 280px:h-28 280px:w-28" />
{/if}