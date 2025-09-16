import {
  HIDE_COMMENTCOUNT_CSS,
  HIDE_HOMEFEED_CSS,
  HIDE_LIKES_CSS,
  HIDE_LIVECHAT_CSS,
  HIDE_PLAYABLES_CSS,
  HIDE_RELATEDVIDEOS_CSS,
  HIDE_SHORTS_CSS,
  HIDE_VIEWS_CSS,
} from "./constants.js";

export const settings = [
  {
    key: "isHiddenCommentCount",
    checkboxId: "hide-commentcount-checkbox",
    css: HIDE_COMMENTCOUNT_CSS,
  },
  {
    key: "isHiddenHomeFeed",
    checkboxId: "hide-homefeed-checkbox",
    css: HIDE_HOMEFEED_CSS,
  },
  {
    key: "isHiddenLikes",
    checkboxId: "hide-likes-checkbox",
    css: HIDE_LIKES_CSS,
  },
  {
    key: "isHiddenLiveChat",
    checkboxId: "hide-livechat-checkbox",
    css: HIDE_LIVECHAT_CSS,
  },
  {
    key: "isHiddenPlayables",
    checkboxId: "hide-playables-checkbox",
    css: HIDE_PLAYABLES_CSS,
  },
  {
    key: "isHiddenRelatedVideos",
    checkboxId: "hide-relatedvideos-checkbox",
    css: HIDE_RELATEDVIDEOS_CSS,
  },
  {
    key: "isHiddenShorts",
    checkboxId: "hide-shorts-checkbox",
    css: HIDE_SHORTS_CSS,
  },
  {
    key: "isHiddenViews",
    checkboxId: "hide-views-checkbox",
    css: HIDE_VIEWS_CSS,
  },
];
