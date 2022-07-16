<script lang="ts">
    import type { CountdownType } from "$types/countdown.type";
    export let actions: CountdownType;

    import { onMount } from "svelte";
    import { tweened, type Tweened } from "svelte/motion";

    let now_a_day: number = new Date().getTime();

    let difference: Tweened<number> = tweened(actions.date - now_a_day, { duration: 300 });
    
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

<h2 class="mt-1 text-xl 280px:text-[0.97rem] 280px:leading-4 390px:text-lg 768px:text-2xl 820px:text-3xl">
    {days} Day {hours} Hour {minutes} Minute {seconds} Second
</h2>