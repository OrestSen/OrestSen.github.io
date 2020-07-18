let basket = document.getElementById("clickme"),
  count = 0;
basket.onclick = function() {
  count += 1;
  basket.innerHTML = " " + count;
};
