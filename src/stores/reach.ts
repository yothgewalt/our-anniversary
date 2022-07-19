import { writable } from "svelte/store";

export const reach = writable<boolean>(localStorage.getItem("reach") === "true");
reach.subscribe((value) => localStorage.setItem("reach", String(value)));