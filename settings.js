import {
    HIDE_HOMEPAGE_CSS, HIDE_LIKES_CSS, HIDE_SHORTS_CSS, HIDE_VIEWS_CSS,
} from "./constants.js";

export const settings = [
    {
        key: "isHiddenHomePage",
        checkboxId: "hide-homepage-checkbox",
        css: HIDE_HOMEPAGE_CSS
    },
    {
        key: "isHiddenLikes",
        checkboxId: "hide-likes-checkbox",
        css: HIDE_LIKES_CSS
    },
    {
        key: "isHiddenShorts",
        checkboxId: "hide-shorts-checkbox",
        css: HIDE_SHORTS_CSS
    },
    {
        key: "isHiddenViews",
        checkboxId: "hide-views-checkbox",
        css: HIDE_VIEWS_CSS
    },
];
