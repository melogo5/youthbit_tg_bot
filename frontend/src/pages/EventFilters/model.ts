import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

export const $eventFilters = createStore({});

export const eventFiltersForm = createForm();

export const eventFiltersFormSubmit = createEvent<any>();

const filtersFx = createEffect((values: any) => console.log(values));
// const filtersFx = createEffect((values: any) => api("login", values));

sample({
    clock: eventFiltersFormSubmit,
    source: eventFiltersForm.$values,
    fn: (source, clock) => source,
    target: filtersFx
});

// sample({
//     clock: filtersFx.doneData,
//     // fn: data => data
//     target: $filters
// });