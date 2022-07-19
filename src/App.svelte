<script lang="ts">
    import { writable, type Writable } from "svelte/store";
    import { Router, Route, navigate } from "svelte-navigator";

    import Layout from "$components/Layout.svelte";
    import Anniversary from "$pages/Anniversary.svelte";
    import Reached from "$pages/Reached.svelte";;

    import { reach } from "$stores/reach";

    let time_at_now: number = new Date().getTime();
    let anniversary_date: number = new Date(2022, 11, 8).getTime();
    let time_difference: Writable<number> = writable(anniversary_date - time_at_now);

    $: permission = false;
    $: {
        if (permission) {
            navigate("/reached", { replace: true });
        }
    }
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
                on:reach="{() => permission = true}"
            />
        </Route>
        <Route path="/reached">
            <Reached />
        </Route>
    </Layout>
</Router>
