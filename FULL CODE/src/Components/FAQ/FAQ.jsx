import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const data = {
  title: <h1 className="text-center font-bold m-auto">FAQ (How it works)</h1>,
  rows: [
    {
      title: "Q: How do I book a trip with UrFlyntym Travels & Tours?",
      content: `A: Booking with UrFlyntym is easy! Simply browse our website to explore our destinations and packages, then contact us via phone, email, or our online booking form to speak with one of our experienced travel advisors. We'll work with you to customize the perfect itinerary for your needs and preferences.`,
    },
    {
      title: "Q: Are your travel packages customizable?",
      content:
        "A: Yes! At UrFlyntym, we specialize in creating personalized travel experiences tailored to suit your individual interests, preferences, and budget. Whether you're dreaming of a romantic honeymoon, a family-friendly adventure, or a solo backpacking trip, we'll work with you to customize every aspect of your itinerary to make your dream vacation a reality.",
    },
    {
      title: "Q: What types of destinations do you offer?",
      content: `A: We offer a wide range of destinations to suit every traveler's taste and interests. From exotic beach getaways and thrilling safari adventures to cultural city tours and off-the-beaten-path expeditions, we have something for everyone. Browse our destination list on our website to discover your next dream destination!`,
    },
    {
      title: "Q: Do you offer travel insurance?",
      content: (
        <p>
          A: Yes, we offer comprehensive travel insurance options to provide you
          with peace of mind during your journey. Our travel insurance plans
          cover a range of potential risks, including trip cancellations,
          medical emergencies, and more. Speak with your travel advisor for more
          information on our insurance options.
        </p>
      ),
    },
    {
      title: "Q: What safety measures do you have in place for travelers?",
      content: (
        <p>
          A: The safety and well-being of our travelers are our top priorities.
          We closely monitor global travel advisories and work with trusted
          partners to ensure that our destinations are safe and secure for
          travelers. Additionally, we provide up-to-date information on health
          and safety guidelines, travel restrictions, and vaccination
          requirements for each destination.
        </p>
      ),
    },
    {
      title: "Q: What if I need to cancel or modify my trip?",
      content: (
        <p>
          A: We understand that plans can change, which is why we offer flexible
          cancellation and modification policies for our travel packages.
          Depending on the circumstances and the terms of your booking, we'll do
          our best to accommodate your needs and minimize any associated fees or
          penalties. Contact your travel advisor for assistance with canceling
          or modifying your trip.
        </p>
      ),
    },
    {
      title: "Q: How can I reach your customer support team?",
      content: (
        <p>
          A: Our customer support team is available to assist you 24/7 via
          phone, email, or live chat. Whether you have questions about your
          itinerary, need assistance during your trip, or require help with
          booking arrangements, our friendly and knowledgeable team is here to
          provide prompt and reliable assistance whenever you need it.
        </p>
      ),
    },
    {
      title: "Q: Do you offer group travel packages?",
      content: (
        <p>
          A: Yes, we offer a variety of group travel packages for families,
          friends, corporate groups, and special interest groups. Whether you're
          planning a destination wedding, a company retreat, or a group tour
          with like-minded travelers, we can tailor a package to accommodate
          your group's size, interests, and budget.
        </p>
      ),
    },
    {
      title: "Q: What payment methods do you accept?",
      content: (
        <p>
          A: We accept various payment methods to make booking with UrFlyntym
          convenient for our customers. We typically accept major credit cards,
          bank transfers. Your travel advisor will provide you with detailed
          instructions on how to make payment for your booking
        </p>
      ),
    },
    {
      title: "Q: Can you assist with special requests or accommodations?",
      content: (
        <p>
          A: Absolutely! We understand that every traveler has unique needs and
          preferences, which is why we're happy to assist with special requests
          and accommodations. Whether you require wheelchair accessibility,
          dietary restrictions, or special room arrangements, let us know, and
          we'll do our best to accommodate your needs.
        </p>
      ),
    },
    {
      title:
        "Q: Are there any travel advisories or restrictions I should be aware of?",
      content: (
        <p>
          A: We stay informed about travel advisories, restrictions, and
          requirements for all destinations we offer. Before booking your trip,
          we'll provide you with up-to-date information on any travel
          advisories, entry requirements, visa regulations, and health
          precautions relevant to your destination. We recommend checking
          official government websites and consulting with your travel advisor
          for the latest information.
        </p>
      ),
    },
    {
      title: "Q: Do you offer assistance with visas and travel documents?",
      content: (
        <p>
          A: Yes, we can provide assistance with visa applications and other
          travel documents required for your trip. Our team will guide you
          through the visa application process, provide necessary documentation,
          and offer support to ensure a smooth and hassle-free experience.
          Contact your travel advisor for assistance with visa requirements for
          your destination.
        </p>
      ),
    },
    {
      title:
        "Q: Can I purchase additional activities or excursions through UrFlyntym?",
      content: (
        <p>
          A: Absolutely! We offer a wide range of optional activities,
          excursions, and add-ons to enhance your travel experience. Whether
          you're interested in guided tours, outdoor adventures, cultural
          experiences, or culinary delights, we can help you arrange additional
          activities to complement your itinerary and make your trip even more
          memorable.
        </p>
      ),
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "blue",
  rowContentColor: "black",
  arrowColor: "black",
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};
const FAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
