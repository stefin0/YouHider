import { HIDE_VIEWS_CSS, HIDE_LIKES_CSS, HIDE_DISLIKES_CSS } from "./constants.js";

export const settings = [
    {
        key: "isHiddenViews",
        checkboxId: "hide-views-checkbox",
        css: HIDE_VIEWS_CSS
    },
    {
        key: "isHiddenLikes",
        checkboxId: "hide-likes-checkbox",
        css: HIDE_LIKES_CSS
    },
    {
        key: "isHiddenDislikes",
        checkboxId: "hide-dislikes-checkbox",
        css: HIDE_DISLIKES_CSS
    }
];
