// /* page, location, [note]  */
export const HIDE_VIEWS_CSS = `
    #metadata-line > span.inline-metadata-item:first-of-type, /* watch, recommended */
    #metadata-line.ytd-video-meta-block > .ytd-video-meta-block:not(:first-of-type)::before, /* search, metadata-line, the dot between views and date */
    ytd-watch-info-text:not([detailed]) #info.ytd-watch-info-text > span:nth-child(-n+2), /* watch, description */
    #view-count, /* watch, description, newly fetched views every 5 min */
    .shortsLockupViewModelHostOutsideMetadataSubhead > span, /* home & search, shorts */
    .ytp-videowall-still-info-author, /* watch, video, on hover */
    .subtitle.ytd-watch-card-compact-video-renderer /* search, sidebar, only on big enough screens */ { 
        display: none !important;
    }`;

export const HIDE_LIKES_CSS = `
    .yt-spec-button-shape-next__button-text-content > .animated-rolling-number-wiz /* watch, rating */ { 
        display: none !important;
    }`;

export const HIDE_SHORTS_CSS = `
    ytd-rich-shelf-renderer[standard-shelf-margins][is-shorts][is-show-more-hidden][is-show-less-hidden][is-truncated] #dismissible.ytd-rich-shelf-renderer, /* home, recommended */
    #title-container.ytd-reel-shelf-renderer, /* search & watch, recommended */
    #contents.ytd-reel-shelf-renderer, /* search & watch, recommended */
    ytd-reel-shelf-renderer.ytd-item-section-renderer /* search & watch, recommended */ {
        display: none !important;
    }`;
