import {DateTime} from "luxon";
import {defineEventHandler} from "h3";

export default defineEventHandler(() => {
    return [
        {
            location: "Berlin, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-03-05").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-01-01T00:00:00Z").toISO(),
            id: "berlin1",
        },
        {
            location: "Berlin, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-03-06").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-01-01T00:00:00Z").toISO(),
            id: "berlin2",
        },
        {
            location: "Helsinki, Finland",
            tickets: "#",
            date: DateTime.fromISO("2023-03-08").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-01-01T00:00:00Z").toISO(),
            id: "helsinki1",
        },
        {
            location: "Stockholm, Sweden",
            tickets: "#",
            date: DateTime.fromISO("2023-03-09").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-01-15T13:00:00Z").toISO(),
            id: "stockholm1",
        },
        {
            location: "Stuttgart, Germany",
            tickets: "#",
            date: DateTime.fromISO("2023-03-16").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-01-17T13:00:00Z").toISO(),
            id: "stuttgart1",
        },
        {
            location: "Zurich, Switzerland",
            tickets: "#",
            date: DateTime.fromISO("2023-04-16").toISODate(),
            ticketSaleStart: DateTime.fromISO("2023-02-14T18:00:00Z").toISO(),
            id: "zurich1",
        }
    ]
})

