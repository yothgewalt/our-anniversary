<script lang="ts">
    import type { CountdownType } from "$types/countdown.type";
    export let actions: CountdownType;

    import { onMount, createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import { writable, type Writable } from "svelte/store";

    let time_at_now: number = new Date().getTime();
    let time_difference: Writable<number> = writable(actions.date - time_at_now);
    
    onMount(() => {
        setInterval(() => {
            if ($time_difference > 0) {
                $time_difference -= 1000;
            }
        }, 1000);
    });

    $: days = Math.floor($time_difference / (1000 * 60 * 60 * 24));
    $: hours = Math.floor(($time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    $: minutes = Math.floor(($time_difference % (1000 * 60 * 60)) / (1000 * 60));
    $: seconds = Math.floor(($time_difference % (1000 * 60)) / 1000);
    $: {
        if ($time_difference <= 0) {
            dispatch("completed");
        }
    }
</script>

{#if $time_difference > 0}
    {days} Day {hours} Hour {minutes} Minute {seconds} Second
{:else}
    Finally it's our anniversary.
{/if}