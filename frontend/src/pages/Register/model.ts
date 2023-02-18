import { createEffect, createEvent, createStore, sample } from "effector";
import { createForm } from "effector-react-form";
import api from "../../scripts/api";

export const $user = createStore({});

export const registerForm = createForm();

export const registerFormSubmit = createEvent<any>();

const registerFx = createEffect((values: any) => api("register", values));

sample({
    clock: registerFormSubmit,
    source: registerForm.$values,
    fn: (source, clock) => source,
    target: registerFx
});

sample({
    clock: registerFx.doneData,
    // fn: data => data
    target: $user
});