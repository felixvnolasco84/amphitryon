export default function CustomCalendar() {
  return (
    <div className="aspect-square h-full w-full overflow-x-scroll">
      <iframe
        src="https://embed.styledcalendar.com/#qPD5Mc0TBU9sdPnIFFjt"
        title="Styled Calendar"
        className="styled-calendar-container"
        style={{ width: "100%", border: "none" }}
        data-cy="calendar-embed-iframe"
      ></iframe>
      <iframe
        className="mx-auto h-full w-full"
        src="https://calendar.google.com/calendar/embed?src=c_b8a50ca9fdb33abe461d74c935c0a544a3ae2c9aff5291b18a14cae55389ee86%40group.calendar.google.com&ctz=America%2FMexico_City"
        width="100%"
        height="100%"
      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
      ></script>
    </div>
  );
}
