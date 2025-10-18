// CSS comments explanation: /* element being hidden, [note]  */
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

export const HIDE_COMMENTS_CSS = `
    /*** WATCH ***/
    /* player */
    ytd-player yt-player-quick-action-buttons toggle-button-view-model:has(path[d^="M1 6a4"]), /* comment button */
    /* comment section */
    ytd-comments, /* comment section */ 

    /*** SHORTS ***/
    ytd-reel-player-overlay-renderer #comments-button, /* comment button */
    ytd-shorts #anchored-panel-scrim, /* backdrop, small screens */
    ytd-shorts #anchored-panel:has(ytd-comments), /* comments dialog, small screens */

    /*** CHANNEL ***/
    /* posts */
    ytd-comment-action-buttons-renderer #reply-button-end /* comment button */ {
        display: none !important;
    }`;

export const HIDE_ENDSCREEN = `
    /*** MINI PLAYER ***/
    ytd-miniplayer .videowall-endscreen, /* end screen */

    /*** WATCH ***/
    /* player */
    ytd-player .ytp-fullscreen-grid, /* end screen, end of video */
    ytd-player [class^="ytp-ce"] /* end screen, near end of video */ {
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

export const HIDE_MEMBERVIDEOS_CSS = `
    /*** HOME/SUBSCRIPTIONS ***/
    ytd-rich-item-renderer:has(.badge-style-type-members-only), /* member videos */

    /*** CHANNEL ***/
    /* home */
    ytd-grid-video-renderer:has(.badge-style-type-members-only), /* member videos */

    /*** WATCH ***/
    /* related (TODO: don't use svgs) */
    yt-lockup-view-model.ytd-item-section-renderer:has(path[d="M6 11.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11Zm1.058-6.956L6 2 4.942 4.544l-2.746.22 2.092 1.792-.64 2.68L6 7.8l2.351 1.436-.64-2.68 2.093-1.792-2.746-.22Z"]) /* member videos */{
        display: none !important;
    }`;

export const HIDE_PLAYABLES_CSS = `
    /*** HOME/SUBSCRIPTIONS ***/
    ytd-rich-section-renderer:has(a[href^="/playables/"]), /* playables section */
    
    /*** TODO ***/
    ytd-browse[page-subtype="playables"], /* playables, entire page */
    ytd-browse[page-subtype="mini_app"], /* playables, game */ 

    a[title="Playables"] /* home, left sidebar link */ {
        display: none !important;
    }`;

export const HIDE_RELATEDVIDEOS_CSS = `
    /*** WATCH ***/
    ytd-watch-next-secondary-results-renderer #items /* related videos */ {
        display: none !important;
    }`;

export const HIDE_SHORTS_CSS = `
    /*** HOME/SUBSCRIPTIONS ***/
    ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]), /* shorts section */

    /*** SHORTS ***/
    ytd-shorts, /* shorts */

    /*** SEARCH ***/
    grid-shelf-view-model:has(ytm-shorts-lockup-view-model-v2), /* shorts grid */ 
    ytd-video-renderer:has(a[href^="/shorts/"]), /* shorts, shorts disguised as normal videos */
    ytd-grid-video-renderer:has(a[href^="/shorts/"]), /* shorts, shorts disguised as normal videos */

    /*** WATCH ***/
    /* related */
    ytd-reel-shelf-renderer, /* shorts shelf */ 

    /*** TODO ***/
    a[title="Shorts"], /* home, left sidebar link */
    ytm-shorts-lockup-view-model-v2, /* channel, short section */
    yt-tab-shape[tab-title="Shorts"] /* channel, tab-nav */ {
        display: none !important;
    }`;

export const HIDE_SUBSCRIBERCOUNT_CSS = `
    /*** CHANNEL ***/
    yt-page-header-renderer yt-content-metadata-view-model div:nth-of-type(2) > span:nth-child(-n + 2), /* delimiters & subscriber count */
    ytd-grid-channel-renderer #thumbnail-attribution, /* subscriber count */

    /*** SEARCH ***/
    ytd-channel-renderer #metadata :is(#dot, #dot + span), /* delimiter & subscriber count */

    /*** WATCH ***/
    /* player */
    ytd-player .ytp-ce-channel-subscribers-text, /* subscriber count */
    /* description */
    ytd-video-description-infocards-section-renderer #header-text #subtitle, /* subscriber count */
    /* top-row */
    ytd-video-owner-renderer yt-formatted-string#owner-sub-count /* subscriber count */ {
        display: none !important;
    }`;

export const HIDE_UPLOADDATE_CSS = `
    /*** LIVE ***/
    ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="DEFAULT"]) ytd-video-meta-block #metadata-line > span:nth-of-type(2), /* streamed date */
    ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="DEFAULT"]) ytd-video-meta-block #metadata-line > span:only-of-type, /* streamed date, members only */

    /*** WATCH ***/
    ytd-watch-info-text #date-text, /* views, fetched every 5 min -- live and regular videos after 5 min */
    /* end screen */
    ytd-player .ytp-modern-videowall-still-view-count-and-date-info, /* views, WARNING: hides upload date too */
    /* regular videos */
    #primary-inner:not(:has(.ytp-live)) ytd-watch-info-text:has(#date-text[aria-label=""]) yt-formatted-string#info span:nth-child(n + 3):nth-child(-n + 4), /* upload date /*
    /* live videos (TODO) */
    #primary-inner:has(.ytp-live) ytd-watch-info-text yt-formatted-string#info span:nth-child(-n+2), /* started streaming date */
    /* related */
    yt-lockup-view-model.ytd-item-section-renderer:not(:has(yt-thumbnail-view-model badge-shape .yt-badge-shape__icon)) yt-content-metadata-view-model :is(.yt-content-metadata-view-model__delimiter, .yt-content-metadata-view-model__delimiter + span), /* delimter & upload date, regular videos */
    yt-lockup-view-model.ytd-item-section-renderer:not(:has(yt-thumbnail-view-model badge-shape .yt-badge-shape__icon)) yt-content-metadata-view-model > div:nth-of-type(2):has(> span:only-child), /* streamed date */
    /* comments */
    ytd-comments #published-time-text, /* upload date */

    /*** PLAYLISTS ***/
    ytd-rich-item-renderer:has(yt-collections-stack) yt-content-metadata-view-model > div:nth-child(2):nth-last-child(2), /* updated date */

    /*** HOME ***/
    ytd-rich-item-renderer:not(:has(lockup-attachments-view-model)) yt-content-metadata-view-model div:nth-of-type(2) :is(.yt-content-metadata-view-model__delimiter, .yt-content-metadata-view-model__delimiter + span), /* delimter & upload date */
    /* mixes (TODO) */

    /*** SEARCH ***/
    ytd-video-renderer ytd-video-meta-block #metadata-line > span:nth-of-type(2), /* upload date */

    /*** CHANNEL ***/
    /* home > channel video */
    ytd-channel-video-player-renderer ytd-video-meta-block #metadata-line span:nth-of-type(2), /* upload date */
    /* home > posts */
    ytd-post-renderer :is(#author-divider, #published-time-text), /* upload date */
    /* posts */
    ytd-backstage-post-thread-renderer #published-time-text, /* upload date */

    /*** GAMING ***/
    ytd-shelf-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(2), /* upload date */
    ytd-horizontal-card-list-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(1) /* upload date, WARNING: hides views too */ {
        display: none !important;
    }`;

export const HIDE_VIDEODURATION_CSS = `
    /*** MINI PLAYER ***/
    ytd-miniplayer :is(.ytp-time-current, .ytp-time-separator, .ytp-time-duration, .ytp-storyboard-framepreview-timestamp), /* current/duration time & timestamp on drag */

    /*** HOME/SUBSCRIPTIONS ***/
    /* preview */
    ytd-video-preview yt-inline-player-controls yt-progress-bar yt-player-storyboard .ytPlayerStoryboardTimestamp, /* timestamp, drag */
    ytd-video-preview:not(:has(.ytInlinePlayerControlsLiveBadge)) yt-inline-player-controls .ytInlinePlayerControlsTimeDisplay, /* time remaining, hover */
    /* regular videos           vvv mixes don't have avatars vvv                 vvv "notify me" vvv                   vvv "now playing" vvv */
    ytd-rich-item-renderer:has(.yt-lockup-metadata-view-model__avatar):not(:has(lockup-attachments-view-model)):not(:has(lottie-component)) yt-thumbnail-view-model badge-shape:not(.yt-badge-shape--thumbnail-live), /* video duration */
    ytd-thumbnail-overlay-time-status-renderer[overlay-style="DEFAULT"]:not([hide-time-status]), /* video duration */

    /*** CHANNEL (TODO) ***/

    /*** SEARCH ***/
    ytd-video-renderer ytd-thumbnail ytd-thumbnail-overlay-time-status-renderer badge-shape:not(:has(.yt-badge-shape__icon)), /* video duration */
    ytd-video-renderer #time, /* timestamp, metadata snippet timestamp */

    /*** SHORTS ***/
    ytd-shorts yt-player-storyboard .ytPlayerStoryboardTimestamp, /* timestamp, hover */

    /*** WATCH ***/
    /* player */
    ytd-player .ytp-time-display, /* current/duration */
    ytd-player .ytp-fine-scrubbing-container .ytp-fine-scrubbing-seek-time, /* fine scrubbing time, drag up progress bar */
    ytd-player .ytp-tooltip-progress-bar-pill-time-stamp, /* scrubbing seek time, hover progress bar */
    /* end screen */
    ytd-player .ytp-ce-video-duration, /* video duration, creator added videos */
    ytd-player .ytp-videowall-still-info-duration, /* video duration, end of video */
    ytd-player .ytp-modern-videowall-still-info-duration, /* video duration */
    /* chapters */
    ytd-macro-markers-list-renderer #time, /* chapter timestamp, click view chapter button */
    ytd-macro-markers-list-item-renderer #time, /* chapter timestamp, inside description */
    ytd-horizontal-card-list-renderer[modern-chapters=""] #items::before, /* blue line connect chapters, inside description */
    /* related */
    yt-lockup-view-model.ytd-item-section-renderer:has(.yt-lockup-metadata-view-model__avatar):not(:has(lockup-attachments-view-model)) yt-thumbnail-view-model badge-shape:not(.yt-badge-shape--thumbnail-live) /* video duration */ {
        display: none !important;
    }`;

// views, watching, waiting, none-waiting
export const HIDE_VIEWS_CSS = `
    /*** MINI PLAYER ***/
    ytd-miniplayer .ytp-videowall-still-info-author, /* views, WARNING: hides author too */
    /*** HOME/SUBSCRIPTIONS ***/
    /* regular videos */
    ytd-rich-item-renderer:has(.yt-lockup-metadata-view-model__avatar) yt-content-metadata-view-model > div:nth-child(2):has(span + span) > :is(span:has(+ .yt-content-metadata-view-model__delimiter), .yt-content-metadata-view-model__delimiter), /* views & delimter */
    /* live streams */
    ytd-rich-item-renderer:has(.yt-badge-shape--thumbnail-live) yt-content-metadata-view-model > div:nth-of-type(2), /* watching */
    ytd-rich-item-renderer:has(lottie-component) yt-content-metadata-view-model > div:nth-child(2):has(> span:first-child:last-child), /* watching, now playing */
    /* shorts */
    ytm-shorts-lockup-view-model-v2 h3 + div, /* views */


    /*** LIVE STREAMS (TODO) ***/
    #dismissible:has(ytd-thumbnail[is-live-video]) #metadata-line > span:first-of-type, /* live, metadata-line, hide watching */
    #dismissible:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style]) #metadata-line > span:first-of-type:not(:only-of-type), /* live, metadata-line, hide waiting */

    /*** WATCH ***/
    ytd-watch-info-text #view-count, /* views, fetched every 5 min -- live and regular videos after 5 min */
    /* player */
    /* end screen */
    ytd-player .ytp-modern-videowall-still-view-count-and-date-info, /* views, WARNING: hides upload date too */
    /* regular videos */
    #primary-inner:not(:has(.ytp-live)) ytd-watch-info-text:has(#view-count[aria-label=""]) yt-formatted-string#info span:nth-child(-n+2), /* views /*
    /* live streams */
    #primary-inner:has(.ytp-live) yt-formatted-string#info:has(span:nth-of-type(3)) > span:nth-of-type(-n+3), /* watching, when first opening live stream */
    /* related */
    yt-lockup-view-model.ytd-item-section-renderer:has(.yt-lockup-metadata-view-model__avatar) yt-content-metadata-view-model > div:nth-child(2):has(span + span) > :is(span:has(+ .yt-content-metadata-view-model__delimiter), .yt-content-metadata-view-model__delimiter), /* views & delimter */
    yt-lockup-view-model.ytd-item-section-renderer:has(.yt-badge-shape--thumbnail-live) yt-content-metadata-view-model > div:nth-of-type(2), /* watching */
    /** description */
    ytd-structured-description-video-lockup-renderer yt-formatted-string#metadata-details, /* views, video in description */
    ytd-watch-info-text #tooltip, /* views, hover description tooltip WARNING: hides upload date too */

    /*** TODO ***/
    #metadata-line > .ytd-video-meta-block:not(:first-of-type)::before, /* search, metadata-line, dot between views and date */
    ytd-video-meta-block:not([rich-meta]) #metadata-line > span:first-of-type, /* search, metadata-line, videos w/o relative timestamp (music) */
    #live-viewers-count, /* gaming, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer span.ytd-grid-video-renderer:first-of-type, /* trending, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer > .ytd-grid-video-renderer:not(:first-of-type)::before, /* trending, grid-carousel-content, dot between views and date */
    .subtitle.ytd-watch-card-compact-video-renderer, /* search, sidebar, only on big enough screens */

    /*** GAMING ***/
    ytd-horizontal-card-list-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(1) /* views, WARNING: hides upload date too */ { 
        display: none !important;
    }`;
