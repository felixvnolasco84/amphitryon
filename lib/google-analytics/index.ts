import { FormSchema } from "@/components/forms/ContactForm";
import * as z from "zod";
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
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

const TrackingFormLead = (
  category: string,
  action: string,
  label: string,
  form: z.infer<typeof FormSchema>
) => {
  console.log("GA event:", category, ":", action, ":", label);

  // Send GA4 Event
  ReactGA4.event(
    {
      category: category,
      action: action,
      label: label,
    },
    {
      name: form.name,
      email: form.email,
      phone: form.phoneNumber,
      eventDescription: form.eventDescription,
      venue: form.venue,
      dateEvent: form.dateEvent,
    }
  );
};

export default InitializeGoogleAnalytics;
export {
  InitializeGoogleAnalytics,
  TrackGoogleAnalyticsEvent,
  TrackingFormLead,
};
