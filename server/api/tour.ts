import {DateTime} from "luxon";
import {defineEventHandler} from "h3";

export default defineEventHandler((event) => {
    return [
        {
            location: "Berlin, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-01-05"),
            id: "berlin1",
        },
        {
            location: "Berlin, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-01-06"),
            id: "berlin2",
        },
        {
            location: "Helsinki, Finland",
            tickets: "#",
            date: DateTime.fromISO("2023-01-08"),
            id: "helsinki1",
        },
        {
            location: "Stockholm, Sweden",
            tickets: "#",
            date: DateTime.fromISO("2023-01-09"),
            id: "stockholm1",
        },
        {
            location: "Stuttgart, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-01-12"),
            id: "stuttgart1",
        },
        {
            location: "Zurich, Switzerland",
            tickets: "#",
            date: DateTime.fromISO("2023-01-13"),
            id: "zurich1",
        }
    ]
})

