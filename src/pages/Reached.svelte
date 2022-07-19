<script lang="ts">
import { navigate } from "svelte-navigator";

    import { reach } from "./../stores/reach";

    let congratulation: string = "";
    if ($reach) {
        congratulation = "Congratulations!";
    } else {
        navigate("/", { replace: true });
    }
</script>

{congratulation}