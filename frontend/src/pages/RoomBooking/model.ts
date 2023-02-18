import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

// export const $user = createStore({});

export const roomBookingForm = createForm();

export const roomBookingFormSubmit = createEvent<any>();

// const roomBookingFx = createEffect((values: any) => api("login", values));
const roomBookingFx = createEffect((values: any) => console.log(values));

sample({
    clock: roomBookingFormSubmit,
    source: roomBookingForm.$values,
    fn: (source, clock) => source,
    target: roomBookingFx
});

// sample({
//     clock: loginFx.doneData,
//     // fn: data => data
//     target: $user
// });