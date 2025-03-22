// CSS comments explanation: /* page, location, [note]  */
export const HIDE_HOMEPAGE_CSS = `
    ytd-browse[page-subtype="home"] /* home, main content */ {
        display: none !important;
    }`;

export const HIDE_LIKES_CSS = `
    .yt-spec-button-shape-next__button-text-content > .animated-rolling-number-wiz, /* watch, rating */
    button[title="I like this"] > .yt-spec-button-shape-next__button-text-content, /* watch, rating */
    #vote-count-middle.ytd-comment-engagement-bar, /* watch, comments */
    #like-button.ytd-like-button-renderer .yt-core-attributed-string--word-wrapping /* shorts, rating */ {
        display: none !important;
    }`;

export const HIDE_RELATEDVIDEOS_CSS = `
    #related.style-scope.ytd-watch-flexy /* watch, related videos */ {
        display: none !important;
    }`;

export const HIDE_SHORTS_CSS = `
    ytd-rich-shelf-renderer[standard-shelf-margins][is-shorts][is-show-more-hidden][is-show-less-hidden][is-truncated] #dismissible.ytd-rich-shelf-renderer, /* home, recommended */
    #title-container.ytd-reel-shelf-renderer, /* search & watch, recommended */
    #contents.ytd-reel-shelf-renderer, /* search & watch, recommended */
    ytd-reel-shelf-renderer.ytd-item-section-renderer /* search & watch, recommended */ {
        display: none !important;
    }`;

export const HIDE_VIEWS_CSS = `
    #metadata-line.ytd-video-meta-block > span.inline-metadata-item:not(:only-of-type):first-of-type, /* search & watch, recommended, still keep date for scheduled videos */
    #metadata-line.ytd-video-meta-block > .ytd-video-meta-block:not(:first-of-type)::before, /* search, metadata-line, the dot between views and date */
    #info.ytd-watch-info-text > span:nth-child(-n+2), /* watch, description */
    #view-count, /* watch, description, newly fetched views every 5 min */
    .ytd-watch-info-text #tooltip, /* watch, description, hide views when hovering over desc */
    .shortsLockupViewModelHostOutsideMetadataSubhead > span, /* home & search, shorts */
    .ytp-videowall-still-info-author, /* watch, video, on hover */
    .subtitle.ytd-watch-card-compact-video-renderer /* search, sidebar, only on big enough screens */ { 
        display: none !important;
    }`;

