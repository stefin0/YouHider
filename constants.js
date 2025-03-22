// CSS comments explanation: /* page, location, [note]  */
export const HIDE_COMMENTCOUNT_CSS = `
    ytd-comments-header-renderer #leading-section.ytd-comments-header-renderer, /* watch, comments */
    #reply-button-end a .yt-core-attributed-string--white-space-no-wrap, /* search, latest posts */
    #more-replies .yt-core-attributed-string--white-space-no-wrap, /* watch, comments of a comment */
    #less-replies .yt-core-attributed-string--white-space-no-wrap, /* watch, comments of a comment */
    #expander.ytd-comment-replies-renderer .dot.ytd-comment-replies-renderer, /* watch, author comment - right dot */
    #comments-button .yt-core-attributed-string--word-wrapping, /* shorts, comment button */
    #contextual-info.ytd-engagement-panel-title-header-renderer /* shorts, comment dialog */ {
        display: none !important;
    }`;

export const HIDE_HOMEFEED_CSS = `
    ytd-browse[page-subtype="home"] /* home, main content */ {
        display: none !important;
    }`;

export const HIDE_LIKES_CSS = `
    .yt-spec-button-shape-next__button-text-content > .animated-rolling-number-wiz, /* watch, rating */
    button[title="I like this"] > .yt-spec-button-shape-next__button-text-content, /* watch, rating */
    #vote-count-middle.ytd-comment-engagement-bar, /* watch, comments */
    #vote-count-middle.ytd-comment-action-buttons-renderer, /* search, latest posts */
    #like-button.ytd-like-button-renderer .yt-core-attributed-string--word-wrapping /* shorts, rating */ {
        display: none !important;
    }`;

export const HIDE_PLAYABLES_CSS = `
    ytd-rich-section-renderer:has(ytd-rich-item-renderer[is-mini-game-card-shelf]), /* home, playables */
    a[title="Playables"], /* home, left sidebar link */
    ytd-browse[page-subtype="playables"], /* playables, entire page */
    ytd-browse[page-subtype="mini_app"] /* playables, game */ {
        display: none !important;
    }`;

export const HIDE_RELATEDVIDEOS_CSS = `
    #related.style-scope.ytd-watch-flexy /* watch, related videos */ {
        display: none !important;
    }`;

export const HIDE_SHORTS_CSS = `
    ytd-rich-shelf-renderer[is-shorts], /* home, recommended */
    ytd-reel-shelf-renderer, /* search & watch, recommended */ 
    a[title="Shorts"], /* home, left sidebar link */
    #shorts-container /* shorts, video */ {
        display: none !important;
    }`;

// views, watching, waiting, none-waiting
export const HIDE_VIEWS_CSS = `
    #metadata-line > .ytd-video-meta-block:not(:first-of-type)::before, /* search, metadata-line, dot between views and date */
    ytd-watch-info-text[view-count-props*='"numberText":""'] yt-formatted-string#info > span:nth-child(-n+2), /* watch, description, live stream & regular video related */
    #dismissible:has(ytd-thumbnail[is-live-video]) #metadata-line > span:first-of-type, /* live, metadata-line, hide watching */
    #dismissible:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style]) #metadata-line > span:first-of-type:not(:only-of-type), /* live, metadata-line, hide waiting */
    ytd-video-meta-block:not([rich-meta]) #metadata-line > span:first-of-type, /* search, metadata-line, videos w/o relative timestamp (music) */
    #view-count, /* watch, description, newly fetched views every 5 min */
    #live-viewers-count, /* gaming, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer span.ytd-grid-video-renderer:first-of-type, /* trending, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer > .ytd-grid-video-renderer:not(:first-of-type)::before, /* trending, grid-carousel-content, dot between views and date */
    ytd-watch-info-text #tooltip, /* watch, description, hide views when hovering over desc */
    .shortsLockupViewModelHostOutsideMetadataSubhead > span, /* home & search, shorts */
    .ytp-videowall-still-info-author, /* watch, video, on hover */
    .subtitle.ytd-watch-card-compact-video-renderer /* search, sidebar, only on big enough screens */ { 
        display: none !important;
    }`;
