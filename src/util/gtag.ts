const GA_TRACKING_ID = 'G-TGQN3B4V22';

// 페이지 뷰 추적
export const pageview = (url: string) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};
