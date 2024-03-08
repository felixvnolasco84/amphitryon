export default function CustomCalendar() {
  return (
    <div className="aspect-square h-full w-full overflow-x-scroll">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_52a8099d5e40643984c12fa479d2c1532a429357fd679a952f2763ad759d469a%40group.calendar.google.com&ctz=America%2FMexico_City"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
