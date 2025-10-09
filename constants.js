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
    ytd-comments, /* comment section */ 

    /*** SHORTS ***/
    ytd-reel-player-overlay-renderer #comments-button, /* comment button */
    ytd-shorts #anchored-panel-scrim, /* backdrop, small screens */
    ytd-shorts #anchored-panel:has(ytd-comments), /* comments dialog, small screens */

    /*** POSTS ***/
    ytd-comment-action-buttons-renderer #reply-button-end /* comment button */ {
        display: none !important;
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

export const HIDE_UPLOADDATE_CSS = `
    /*** LIVE STREAMS ***/
    ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="DEFAULT"]) ytd-video-meta-block #metadata-line > span:nth-of-type(2), /* streamed date */
    ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="DEFAULT"]) ytd-video-meta-block #metadata-line > span:only-of-type, /* streamed date, members only */

    /*** WATCH (regular videos, live streams ***/
    /* comments */
    ytd-comments #published-time-text, /* upload date */

    /*** PLAYLISTS ***/
    yt-lockup-view-model:has(yt-thumbnail-view-model badge-shape .yt-badge-shape__icon) yt-content-metadata-view-model > div:nth-child(2):nth-last-child(2), /* updated date */

    /*** MIXES ***/

    /*** REGULAR VIDEOS ***/
    /* (home, watch > related) */
    yt-lockup-view-model:not(:has(yt-thumbnail-view-model badge-shape .yt-badge-shape__icon)) yt-content-metadata-view-model :is(.yt-content-metadata-view-model__delimiter, .yt-content-metadata-view-model__delimiter + span), /* delimter & upload date */
    /* (search) */
    ytd-video-renderer ytd-video-meta-block #metadata-line > span:nth-of-type(2), /* upload date */
    /* (gaming) */
    ytd-shelf-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(2), /* upload date */
    ytd-horizontal-card-list-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(1) /* upload date, WARNING: hides views too */ {
        display: none !important;
    }`;

export const HIDE_VIDEODURATION_CSS = `
    /*** HOME/SUBSCRIPTIONS ***/
    /* regular videos */
    ytd-rich-item-renderer:has(yt-lockup-metadata-view-model .yt-lockup-metadata-view-model__avatar):not(:has(lockup-attachments-view-model)) yt-thumbnail-view-model badge-shape, /* video duration */
    ytd-video-preview yt-inline-player-controls .ytInlinePlayerControlsTimeDisplay .yt-badge-shape__text, /* time remaining, hover */
    ytd-video-preview yt-inline-player-controls yt-progress-bar yt-player-storyboard .ytPlayerStoryboardTimestamp, /* timestamp, drag */

    /*** CHANNEL ***/

    /*** SEARCH ***/
    ytd-video-renderer ytd-thumbnail ytd-thumbnail-overlay-time-status-renderer badge-shape:not(:has(.yt-badge-shape__icon)), /* video duration */

    /*** SHORTS ***/
    /* player */
    ytd-shorts yt-player-storyboard .ytPlayerStoryboardTimestamp, /* timestamp, hover */

    /*** WATCH ***/
    /* player */
    .ytp-left-controls :is(.ytp-time-current, .ytp-time-separator, .ytp-time-duration, .ytp-chapter-title-prefix), /* current/duration time */
    ytd-player .ytp-fine-scrubbing-container .ytp-fine-scrubbing-seek-time, /* fine scrubbing time, drag up progress bar */
    ytd-player .ytp-tooltip.ytp-preview .ytp-tooltip-bottom-text > span.ytp-tooltip-text, /* scrubbing seek time, hover progress bar */
    /* chapters */
    ytd-macro-markers-list-renderer #time, /* chapter timestamp, click view chapter button */
    /* related */
    yt-lockup-view-model:has(yt-lockup-metadata-view-model .yt-lockup-metadata-view-model__avatar):not(:has(lockup-attachments-view-model)) yt-thumbnail-view-model badge-shape /* video duration */ {
        display: none !important;
    }`;

// views, watching, waiting, none-waiting
export const HIDE_VIEWS_CSS = `
    /*** LIVE STREAMS (TODO) ***/
    #dismissible:has(ytd-thumbnail[is-live-video]) #metadata-line > span:first-of-type, /* live, metadata-line, hide watching */
    #dismissible:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style]) #metadata-line > span:first-of-type:not(:only-of-type), /* live, metadata-line, hide waiting */

    /*** WATCH (TODO) ***/
    ytd-watch-info-text[view-count-props*='"numberText":""'] yt-formatted-string#info > span:nth-child(-n+2), /* description, live stream & regular video related */
    #view-count, /* views, newly fetched views every 5 min */
    ytd-watch-info-text #tooltip, /* tooltip views, on hover description */
    .ytp-videowall-still-info-author, /* end screen video views, on hover video */

    /*** TODO ***/
    #metadata-line > .ytd-video-meta-block:not(:first-of-type)::before, /* search, metadata-line, dot between views and date */
    ytd-video-meta-block:not([rich-meta]) #metadata-line > span:first-of-type, /* search, metadata-line, videos w/o relative timestamp (music) */
    #live-viewers-count, /* gaming, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer span.ytd-grid-video-renderer:first-of-type, /* trending, grid-carousel-content */
    #metadata-line.ytd-grid-video-renderer > .ytd-grid-video-renderer:not(:first-of-type)::before, /* trending, grid-carousel-content, dot between views and date */
    .subtitle.ytd-watch-card-compact-video-renderer, /* search, sidebar, only on big enough screens */

    /*** SHORTS (TODO) ***/
    .shortsLockupViewModelHostOutsideMetadataSubhead > span, /* home & search, shorts */

    /*** REGULAR VIDEOS (separate home and related) ***/
    /* (home, watch > related) */
    yt-lockup-view-model:has(yt-lockup-metadata-view-model .yt-lockup-metadata-view-model__avatar) yt-content-metadata-view-model > div:nth-child(2):has(span + span) > :is(span:has(+ .yt-content-metadata-view-model__delimiter), .yt-content-metadata-view-model__delimiter), /* views & delimter */
    /* (gaming) */
    ytd-horizontal-card-list-renderer ytd-grid-video-renderer #metadata-line > span:nth-of-type(1) /* views, WARNING: hides upload date too */ { 
        display: none !important;
    }`;
