import ReactGA4 from "react-ga4";
const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize("GTM-WNGXG4N4");
};

const TrackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  console.log("GA event:", category, ":", action, ":", label);

  // Send GA4 Event
  ReactGA4.event(`evento: ${category} | ubicación: ${label}`);
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };
