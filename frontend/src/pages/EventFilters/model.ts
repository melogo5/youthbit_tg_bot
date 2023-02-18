import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

export const $filters = createStore({});

export const filtersForm = createForm();

export const filtersFormSubmit = createEvent<any>();

const filtersFx = createEffect((values: any) => console.log(values));
// const filtersFx = createEffect((values: any) => api("login", values));

sample({
    clock: filtersFormSubmit,
    source: filtersForm.$values,
    fn: (source, clock) => source,
    target: filtersFx
});

// sample({
//     clock: filtersFx.doneData,
//     // fn: data => data
//     target: $filters
// });