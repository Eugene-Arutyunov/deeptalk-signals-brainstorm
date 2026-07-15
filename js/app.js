/* Рендер таблицы сигналов: сортировка по клику в th, фильтры-чипы
   по категориям и авторам, диалог с исходными фрагментами. */

(function () {
  const tbody = document.getElementById("signals-tbody");
  const countEl = document.getElementById("signals-count");
  const dialog = document.getElementById("src-dialog");
  const dialogTitle = document.getElementById("src-dialog-title");
  const dialogBody = document.getElementById("src-dialog-body");

  const state = {
    categories: new Set(),
    authors: new Set(),
    sortKey: null,
    sortDir: 1,
  };

  /* Фильтры */

  function collect(field) {
    const values = new Set();
    SIGNALS.forEach((s) => s[field].forEach((v) => values.add(v)));
    return [...values].sort((a, b) => a.localeCompare(b));
  }

  function buildChips(containerId, values, selected) {
    const container = document.getElementById(containerId);

    const all = document.createElement("button");
    all.className = "signals-chip active";
    all.textContent = "All";
    all.addEventListener("click", () => {
      selected.clear();
      render();
    });
    container.appendChild(all);

    values.forEach((value) => {
      const chip = document.createElement("button");
      chip.className = "signals-chip";
      chip.textContent = value;
      chip.addEventListener("click", () => {
        selected.has(value) ? selected.delete(value) : selected.add(value);
        render();
      });
      container.appendChild(chip);
    });
  }

  function updateChips(containerId, selected) {
    const chips = document.querySelectorAll("#" + containerId + " .signals-chip");
    chips.forEach((chip, i) => {
      const active = i === 0 ? selected.size === 0 : selected.has(chip.textContent);
      chip.classList.toggle("active", active);
    });
  }

  function matches(signal) {
    const byCategory =
      state.categories.size === 0 ||
      signal.categories.some((c) => state.categories.has(c));
    const byAuthor =
      state.authors.size === 0 ||
      signal.authors.some((a) => state.authors.has(a));
    return byCategory && byAuthor;
  }

  /* Сортировка */

  function sortValue(signal, key) {
    const value = signal[key];
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "boolean") return value ? 0 : 1; /* лайкнутые сверху */
    return value;
  }

  function compare(a, b) {
    const va = sortValue(a, state.sortKey);
    const vb = sortValue(b, state.sortKey);
    if (typeof va === "number") return (va - vb) * state.sortDir;
    if (va === "" && vb !== "") return 1; /* пустые всегда снизу */
    if (vb === "" && va !== "") return -1;
    return va.localeCompare(vb) * state.sortDir;
  }

  document.querySelectorAll("th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.sortKey === key) {
        state.sortDir = -state.sortDir;
      } else {
        state.sortKey = key;
        state.sortDir = 1;
      }
      render();
    });
  });

  /* Диалог с исходником */

  function openSrc(signal) {
    dialogTitle.textContent = signal.signal;
    dialogBody.textContent = "";
    signal.src.forEach((fragment) => {
      const wrap = document.createElement("div");
      wrap.className = "src-dialog__fragment";
      const author = document.createElement("h3");
      author.textContent = fragment.author;
      const text = document.createElement("div");
      text.className = "src-dialog__text";
      text.textContent = fragment.text;
      wrap.append(author, text);
      dialogBody.appendChild(wrap);
    });
    dialog.showModal();
  }

  document.getElementById("src-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close(); /* клик по бэкдропу */
  });

  /* Рендер */

  function cell(text, className) {
    const td = document.createElement("td");
    if (className) td.className = className;
    td.textContent = text;
    return td;
  }

  function render() {
    updateChips("filter-categories", state.categories);
    updateChips("filter-authors", state.authors);

    document.querySelectorAll("th[data-sort]").forEach((th) => {
      th.classList.toggle("sorted-asc", th.dataset.sort === state.sortKey && state.sortDir === 1);
      th.classList.toggle("sorted-desc", th.dataset.sort === state.sortKey && state.sortDir === -1);
    });

    const rows = SIGNALS.filter(matches);
    if (state.sortKey) rows.sort(compare);

    countEl.textContent =
      rows.length === SIGNALS.length
        ? SIGNALS.length + " signals"
        : rows.length + " of " + SIGNALS.length + " signals";

    tbody.textContent = "";
    rows.forEach((signal) => {
      const tr = document.createElement("tr");
      tr.append(
        cell(signal.signal),
        cell(signal.description, "signals-cell-text"),
        cell(signal.importance, "signals-cell-text"),
        cell(signal.audioWhy, "signals-cell-text"),
        cell(signal.categories.join(", ")),
        cell(signal.authors.join(", ")),
        cell(signal.ilyaLikes ? "+" : "", "signals-table__likes"),
        cell(signal.eugeneLikes ? "+" : "", "signals-table__likes"),
        cell(signal.grahamLikes ? "+" : "", "signals-table__likes")
      );

      const srcTd = document.createElement("td");
      const srcButton = document.createElement("button");
      srcButton.className = "signals-src-button";
      srcButton.textContent = "src";
      srcButton.addEventListener("click", () => openSrc(signal));
      srcTd.appendChild(srcButton);
      tr.appendChild(srcTd);

      tbody.appendChild(tr);
    });
  }

  buildChips("filter-categories", collect("categories"), state.categories);
  buildChips("filter-authors", collect("authors"), state.authors);
  render();
})();
