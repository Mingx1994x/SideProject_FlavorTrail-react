import EventAbout from '@/pages/event/EventAbout';
import EventAgenda from '@/pages/event/EventAgenda';
import EventBanner from '@/pages/event/EventBanner';
import EventBreadcrumb from '@/pages/event/EventBreadcrumb';
import EventDeliverMeals from '@/pages/event/EventDeliverMeals';
import EventMarquee from '@/pages/event/EventMarquee';

function Event() {
  return (
    <>
      <EventBreadcrumb />
      <EventBanner />
      <EventAbout />
      <EventMarquee />
      <EventAgenda />
      <EventDeliverMeals />
    </>
  );
}

export default Event;
