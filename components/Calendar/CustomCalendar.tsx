export default function CustomCalendar() {
  return (
    <div className="aspect-square h-full w-full overflow-x-scroll">
      <iframe
        className="mx-auto h-96 w-11/12 lg:h-96 lg:w-3/4"
        src="https://calendar.google.com/calendar/embed?src=c_b8a50ca9fdb33abe461d74c935c0a544a3ae2c9aff5291b18a14cae55389ee86%40group.calendar.google.com&ctz=America%2FMexico_City"
        width="800"
        height="600"
      ></iframe>
    </div>
  );
}
