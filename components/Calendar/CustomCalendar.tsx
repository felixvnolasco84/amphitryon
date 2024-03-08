export default function CustomCalendar() {
  return (
    <div className="aspect-square h-full w-full overflow-x-scroll">
      <iframe
        src="https://embed.styledcalendar.com/#bmU5KAjCRCAnaGZuVFld"
        title="Styled Calendar"
        className="styled-calendar-container"
        style={{ width: "100%", border: "none" }}
        data-cy="calendar-embed-iframe"
      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
      ></script>
    </div>
  );
}
