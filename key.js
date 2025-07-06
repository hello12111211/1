
<script>
  document.addEventListener("keydown", function(event) {
    let keys = JSON.parse(localStorage.getItem("keys") || "[]");
    keys.push(event.key);
    localStorage.setItem("keys", JSON.stringify(keys));
  });
</script>
