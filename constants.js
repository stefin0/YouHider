// CSS comments explanation: /* page, location, [note]  */
export const HIDE_COMMENTCOUNT_CSS = `
    ytd-comments-header-renderer #leading-section.ytd-comments-header-renderer, /* watch, comments */
    #reply-button-end a .yt-core-attributed-string--white-space-no-wrap, /* search, latest posts */
    #more-replies .yt-core-attributed-string--white-space-no-wrap, /* watch, comments of a comment */
    #less-replies .yt-core-attributed-string--white-space-no-wrap, /* watch, comments of a comment */
    #expander.ytd-comment-replies-renderer .dot.ytd-comment-replies-renderer, /* watch, author comment - right dot */
    #comments-button .yt-core-attributed-string--word-wrapping, /* shorts, comment button */
    #contextual-info.ytd-engagement-panel-title-header-renderer, /* shorts, comment dialog */
    #replies:has(#more-replies-icon) #more-replies /* watch, comments, button after creator pfp */ {
        display: none !important;
    }

    #more-replies .yt-spec-button-shape-next__icon, /* watch, comments, center chevron down icon */ 
    #less-replies .yt-spec-button-shape-next__icon /* watch, comments, center chevron down icon */ {
        margin: 0 !important;
    }
    
    #more-replies button[aria-label*="repl"], /* watch, comments, transform to circle */ 
    #less-replies button[aria-label*="repl"] /* watch, comments, transform to circle */ {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-left: -8px;
    }`;

export const HIDE_ENDSCREEN = `
    .html5-endscreen, /* watch, end of video */
    ytd-player [class^="ytp-ce"] /* watch, near end of video */ {
        display: none !important;
    }`;

export const HIDE_HOMEFEED_CSS = `
    ytd-browse[page-subtype="home"], /* home, main content */
    a[title="Home"] /* home, left sidebar link */ {
        display: none !important;
    }`;

export const HIDE_LIKES_CSS = `
    .yt-spec-button-shape-next__button-text-content > .animated-rolling-number-wiz, /* watch, rating */
    button[title="I like this"] > .yt-spec-button-shape-next__button-text-content, /* watch, rating */
    #vote-count-middle, /* watch, comments */
    #vote-count-middle.ytd-comment-action-buttons-renderer, /* search, latest posts from {youtuber} */
    #like-button.ytd-like-button-renderer .yt-core-attributed-string--word-wrapping, /* shorts, rating */

    /* 9-15-2025 */
    like-button-view-model .yt-spec-button-shape-next__button-text-content /* watch, rating */ {
        display: none !important;
    }

    button[aria-label^="like this video"] .yt-spec-button-shape-next__icon /* watch, rating, center like button */ {
        margin: 0 !important;
    }`;

export const HIDE_LIVECHAT_CSS = `
    #chat-container, /* watch, live chat */
    #teaser-carousel:has([aria-label*="Live chat"]) /* watch, near description */ {
        display: none !important;
    }`;

export const HIDE_PLAYABLES_CSS = `
    ytd-browse[page-subtype="playables"], /* playables, entire page */
    ytd-browse[page-subtype="mini_app"], /* playables, game */ 

    ytd-rich-section-renderer:has(ytd-rich-item-renderer[is-mini-game-card-shelf]), /* home, playables */
    a[title="Playables"] /* home, left sidebar link */ {
        display: none !important;
    }`;

export const HIDE_RELATEDVIDEOS_CSS = `
    #related /* watch, related videos */ {
        display: none !important;
    }`;

export const HIDE_SHORTS_CSS = `
    ytd-shorts, /* shorts, video */

    ytd-rich-shelf-renderer[is-shorts], /* home, recommended */
    ytd-reel-shelf-renderer, /* search & watch, recommended */ 
    a[title="Shorts"], /* home, left sidebar link */

    /* 9-18-2025 */
    grid-shelf-view-model:has(ytm-shorts-lockup-view-model-v2, ytm-shorts-lockup-view-model), /* search, main */ 
    ytd-video-renderer:has(a[href^="/shorts/"]), /* search, main, shorts disguised as normal videos */
    ytm-shorts-lockup-view-model-v2, /* channel, short section */
    yt-tab-shape[tab-title="Shorts"] /* channel, tab-nav */ {
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
    .subtitle.ytd-watch-card-compact-video-renderer, /* search, sidebar, only on big enough screens */

    /* 9-18-2025 */
    ytd-rich-item-renderer .yt-content-metadata-view-model__metadata-row:has(.yt-content-metadata-view-model__delimiter) > span:first-child, /* home, metadata-line */
    ytd-rich-item-renderer .yt-content-metadata-view-model__delimiter, /* home, metadata-line, dot between views and date posted */
    yt-lockup-metadata-view-model .yt-content-metadata-view-model__metadata-row:has(.yt-content-metadata-view-model__delimiter) > span:first-child, /* watch, recommended videos */
    yt-lockup-metadata-view-model .yt-content-metadata-view-model__delimiter, /* watch, recommended videos metadata-line, dot between views and date posted */
    ytd-watch-info-text:has(#view-count:not([aria-label*="watching"])) #info > span:first-child, /* watch, main video metadata-line, non-live */
    ytd-watch-info-text:has(#view-count:not([aria-label*="watching"])) #info > span:first-child + span, /* watch, main video metadata-line, whitespace after view count and non-live */
    #watch-card-subtitle, /* search, right of main (on large screens) */
    yt-lockup-metadata-view-model .yt-content-metadata-view-model__metadata-row:has(.yt-content-metadata-view-model__delimiter) > span:first-child, /* watch, recommended, watching */
    yt-lockup-view-model:has(.yt-badge-shape--thumbnail-live) .yt-content-metadata-view-model__metadata-row:nth-of-type(2) /* home, recommended, watching */ { 
        display: none !important;
    }`;
