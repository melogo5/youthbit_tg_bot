import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

export const $roomFilters = createStore({});

export const roomFiltersForm = createForm();

export const roomFiltersFormSubmit = createEvent<any>();

const filtersFx = createEffect((values: any) => console.log(values));
// const filtersFx = createEffect((values: any) => api("login", values));

sample({
    clock: roomFiltersFormSubmit,
    source: roomFiltersForm.$values,
    fn: (source, clock) => source,
    target: filtersFx
});

// sample({
//     clock: filtersFx.doneData,
//     // fn: data => data
//     target: $filters
// });