<script lang="ts">
    import Layout from "$components/Layout.svelte";
    import Anniversary from "$components/Anniversary.svelte";

    let anniversary_date: number = new Date(2022, 11, 8, 0, 0, 0, 0).getTime();
</script>

<Layout>
    <Anniversary actions={
            {
                date: anniversary_date,
                male: "Yongyuth Chuankhuntod",
                female: "Thanatcha Wongsomsri",
                repository: "https://github.com/Yothgewalt/our-anniversary"
            }
        } 
    />
</Layout>