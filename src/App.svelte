<script lang="ts">
    import { Router, Route, navigate } from "svelte-navigator";
    
    import Layout from "$components/Layout.svelte";
    import Anniversary from "$pages/Anniversary.svelte";

    let anniversary_date: number = new Date(2022, 11, 8).getTime();
</script>

<Router primary={false}>
    <Layout>
        <Route path="/">
            <Anniversary actions={
                    {
                        date: anniversary_date,
                        male: "Yongyuth Chuankhuntod",
                        female: "Thanatcha Wongsomsri",
                        repository: "https://github.com/Yothgewalt/our-anniversary"
                    }
                }
                on:reach="{() => console.log("NEXT_MERGE")}"
            />
        </Route>
    </Layout>
</Router>
