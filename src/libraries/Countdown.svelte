<script lang="ts">
    import type { CountdownType } from "$types/countdown.type";
    export let actions: CountdownType;

    import { onMount } from "svelte";
    import { tweened, type Tweened } from "svelte/motion";

    let time_at_now: number = new Date().getTime();

    let difference: Tweened<number> = tweened(actions.date - time_at_now);
    
    onMount(() => {
        setInterval(() => {
            if ($difference > 0) {
                $difference -= 1000;
            }
        }, 1000);
    });

    $: days = Math.floor($difference / (1000 * 60 * 60 * 24));
    $: hours = Math.floor(($difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    $: minutes = Math.floor(($difference % (1000 * 60 * 60)) / (1000 * 60));
    $: seconds = Math.floor(($difference % (1000 * 60)) / 1000);
</script>

{days} Day {hours} Hour {minutes} Minute {seconds} Second