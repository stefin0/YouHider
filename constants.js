export const HIDE_VIEWS_CSS = `
    #metadata-line span:first-of-type,
    #info span:nth-child(-n+2),
    #view-count,
    #metadata-line.ytd-video-meta-block
    > .ytd-video-meta-block:not(:first-of-type)::before,
    .shortsLockupViewModelHostOutsideMetadataSubhead > span,
    .ytp-videowall-still-info-author,
    .subtitle.ytd-watch-card-compact-video-renderer { 
        display: none !important;
    }`;

export const HIDE_LIKES_CSS = `
    .yt-spec-button-shape-next__button-text-content
    > .animated-rolling-number-wiz {
        display: none !important;
    }`;
