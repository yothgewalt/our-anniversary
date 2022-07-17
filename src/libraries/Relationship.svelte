<script lang="ts">
    import type { RelationshipType } from "$types/relationship.type";

    import dayjs from "dayjs";
    import RelativeTime from "dayjs/plugin/relativeTime";
    dayjs.extend(RelativeTime);

    export let actions: RelationshipType;

    const time_now: Date = new Date();
    const relationship: dayjs.Dayjs = dayjs(time_now);
    const relationship_years: number = relationship.diff(actions.date, "years");
    const relationship_months: number = relationship.diff(actions.date, "months") % 12;
    const relationship_days: number = relationship.diff(actions.date, "days") % 24;
</script>

{relationship_years} Year {relationship_months} Month {relationship_days} Day