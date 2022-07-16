<script lang="ts">
    import type { AnniversaryType } from "$types/anniversary.type";

    import Container from "$libraries/Container.svelte";
    import PartyPopper from "$assets/party_popper.png";
    import Countdown from "$libraries/Countdown.svelte";

    export let actions: AnniversaryType;
</script>

<Container>
    <div class="anniversary_box__anniversary_class">
        <a href={actions.repository}>
            <img src={PartyPopper} alt="party popper our anniversary" class="party_popper__anniversary_class" />
        </a>
        <span class="space_void__anniversary_class">
            <h1 class="title__anniversary_class">Our Anniversary</h1>
            <Countdown actions={ {date: actions.date} }
            />
        </span>
        <span class="space_void__anniversary_class">
            <p class="description__anniversary_class">
                This is my couple's anniversary countdown website, between
                <a href="/">
                    <b class="male_named__anniversary_class default_transition__anniversary_class">{actions.male}</b>
                </a>
                and
                <a href="/">
                    <b class="female_named__anniversary_class default_transition__anniversary_class">{actions.female}</b>
                </a>
                .
            </p>
            <p class="repository_guideline__aniversary_class">Click on the Party Popper to visit our Github repository for looking my code that build the website.</p>
        </span>
    </div>
</Container>

<style>
    .default_transition__anniversary_class {
        @apply transition duration-150 ease-in-out;
    }

    .anniversary_box__anniversary_class {
        @apply w-full h-full flex flex-col space-y-12 select-none justify-center items-center 280px:space-y-7;
    }

    .party_popper__anniversary_class {
        @apply h-24 w-24 will-change-auto hover:drop-shadow-party-popper 280px:h-20 280px:w-20 280px:drop-shadow-party-popper 912px:drop-shadow-none;
    }

    .title__anniversary_class {
        @apply font-bold text-3xl 280px:text-2xl 280px:mt-3 390px:text-[1.6rem] 768px:text-3xl 768px:mt-5 820px:text-4xl;
    }

    .space_void__anniversary_class {
        @apply text-center space-y-4 912px:space-y-6
    }

    .description__anniversary_class {
        @apply text-base 280px:text-[0.86rem] 280px:leading-4 360px:text-[1.1rem] 360px:leading-6 390px:text-[1.2rem] 768px:text-[1.5rem] 768px:leading-8 820px:text-[1.6rem] 912px:text-[2rem] 912px:leading-10;
    }

    .male_named__anniversary_class {
        @apply text-[#22c55e] hover:text-[#16a34a];
    }

    .female_named__anniversary_class {
        @apply text-[#d946ef] hover:text-[#c026d3];
    }

    .repository_guideline__aniversary_class {
        @apply text-[#888888] text-2xl 280px:text-[0.70rem] 280px:leading-4 360px:text-[0.80rem] 390px:text-[0.93rem] 390px:leading-5 820px:text-[1rem] 912px:text-[1.1rem];
    }
</style>