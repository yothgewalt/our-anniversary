<script lang="ts">
    import type { AnniversaryType } from "$types/anniversary.type";

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import Container from "$components/Container.svelte";
    import Countdown from "$libraries/Countdown.svelte";
    import Image from "$libraries/Image.svelte";

    import PartyPopper from "$assets/party_popper.png";
    import LayeredSteps from "$assets/layered_steps.png";
    import Relationship from "$libraries/Relationship.svelte";

    export let actions: AnniversaryType;
    
    let imageProceedEvent: boolean = false;
    $: countdownCompleted = false;
    $: {
        if (countdownCompleted) {
            console.log("Countdown Completed")
            dispatch("reach");
        }
    }
</script>

<Container>
    <div class="anniversary_box__anniversary_class">
        <a href={actions.repository}>
            <Image actions={
                    {
                        src: PartyPopper,
                        alt: "party popper our anniversary",
                        class: "h-20 w-20 will-change-auto hover:drop-shadow-party-popper 280px:h-24 280px:w-24 280px:drop-shadow-party-popper 912px:drop-shadow-none",
                        classForState: "h-20 w-20 280px:h-24 280px:w-24"
                    } 
                }
            />
        </a>
        <div class="space_void__anniversary_class">
            <h1 class="title__anniversary_class">Our Anniversary</h1>
            <h2 class="countdown__anniversary_class">
                <Countdown actions={ {date: actions.date} } on:completed="{() => countdownCompleted = true}" />
            </h2>
        </div>
        <div class="space_void__anniversary_class">
            <p class="description__anniversary_class">
                This is my couple's anniversary countdown website, between
                <a href="https://web.facebook.com/yongyuth.chuankhuntod/">
                    <b class="male_named__anniversary_class default_transition__anniversary_class">{actions.male}</b>
                </a>
                and
                <a href="https://web.facebook.com/profile.php?id=100074083756389">
                    <b class="female_named__anniversary_class default_transition__anniversary_class">{actions.female}</b>
                </a>
                .
            </p>
            <div class="relationship_group__anniversary_class group">
                <Image actions={
                        {
                            src: LayeredSteps,
                            alt: "layered steps for relationship timer",
                            class: "w-[900px] h-[100px] rounded-xl 280px:h-[140px] 360px:h-[160px] 390px:h-[170px] 768px:h-[270px] 820px:h-[290px] 912px:h-[400px]",
                            classForState: "w-[900px] h-[100px] 280px:h-[140px] 360px:h-[160px] 390px:h-[170px] 768px:h-[270px] 820px:h-[290px] 912px:h-[400px]"
                        }
                    }
                    on:event="{() => imageProceedEvent = true}"
                />
                {#if imageProceedEvent}
                    <div class="relationship_detail__anniversary_class">
                        <h1 class="relationship_text_group__anniversary_class">
                            <p class="relationship_text_description__anniversary_class">
                                During the relationship We have been together for
                            </p>
                            <Relationship actions={ {date: new Date(2020, 11, 8)} } />
                        </h1>
                    </div>
                {/if}
            </div>
            <p class="repository_guideline__aniversary_class">Click on the Party Popper to visit our Github repository for looking my code that build the website.</p>
        </div>
    </div>
</Container>

<style>
    .default_transition__anniversary_class {
        @apply transition duration-150 ease-in-out;
    }

    .anniversary_box__anniversary_class {
        @apply w-full h-full flex flex-col space-y-12 select-none justify-center items-center 280px:space-y-7;
    }

    .title__anniversary_class {
        @apply font-bold text-3xl 280px:text-2xl 280px:mt-3 390px:text-[1.6rem] 768px:text-3xl 768px:mt-5 820px:text-4xl;
    }

    .countdown__anniversary_class {
        @apply mt-1 animate-pulse text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe] 280px:text-[0.97rem] 280px:leading-4 390px:text-lg 768px:text-2xl 820px:text-3xl;
    }

    .space_void__anniversary_class {
        @apply text-center space-y-4 912px:space-y-6
    }

    .description__anniversary_class {
        @apply text-base 280px:text-[0.83rem] 280px:leading-4 360px:text-[1.09rem] 360px:leading-6 390px:text-[1.18rem] 768px:text-[1.5rem] 768px:leading-8 820px:text-[1.6rem] 912px:text-[2rem] 912px:leading-10;
    }

    .male_named__anniversary_class {
        @apply text-[#22c55e] hover:text-[#16a34a];
    }

    .female_named__anniversary_class {
        @apply text-[#d946ef] hover:text-[#c026d3];
    }
    
    .relationship_group__anniversary_class {
        @apply relative flex justify-center items-center;
    }

    .relationship_detail__anniversary_class {
        @apply absolute top-5 inline-flex items-center 360px:top-4 768px:top-10 912px:top-16;
    }

    .relationship_text_group__anniversary_class {
        @apply font-bold text-6xl drop-shadow text-yellow-300 280px:text-lg 360px:text-xl 390px:text-2xl 768px:text-4xl 820px:text-5xl 912px:text-6xl;
    }

    .relationship_text_description__anniversary_class {
        @apply mb-0 font-medium text-[0.67rem] drop-shadow-none text-[#ffffff] 360px:text-[0.85rem] 390px:text-[0.94rem] 768px:text-[1.5rem] 820px:text-[1.85rem] 820px:mb-5 912px:text-3xl;
    }

    .repository_guideline__aniversary_class {
        @apply text-[#888888] text-2xl 280px:text-[0.65rem] 280px:leading-4 360px:text-[0.80rem] 390px:text-[0.93rem] 390px:leading-5 820px:text-[1rem] 912px:text-[1.2rem];
    }
</style>