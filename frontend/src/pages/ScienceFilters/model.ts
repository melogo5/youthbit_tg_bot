import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

export const $scienceFilters = createStore({});

export const scienceFiltersForm = createForm();

export const scienceFiltersFormSubmit = createEvent<any>();

const filtersFx = createEffect((values: any) => console.log(values));
// const filtersFx = createEffect((values: any) => api("login", values));

sample({
    clock: scienceFiltersFormSubmit,
    source: scienceFiltersForm.$values,
    fn: (source, clock) => source,
    target: filtersFx
});

// sample({
//     clock: filtersFx.doneData,
//     // fn: data => data
//     target: $filters
// });