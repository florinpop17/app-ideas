const STATUS_URL = "https://www.githubstatus.com/api/v2/summary.json";

const overallStatus = document.querySelector("#overall-status");
const lastUpdated = document.querySelector("#last-updated");
const componentsList = document.querySelector("#components-list");
const componentsMessage = document.querySelector("#components-message");
const refreshButton = document.querySelector("#refresh-button");

const statusLabels = {
  operational: "Operational",
  under_maintenance: "Under maintenance",
  degraded_performance: "Degraded performance",
  partial_outage: "Partial outage",
  major_outage: "Major outage",
};

function getStatusLabel(status) {
  return statusLabels[status] ?? `Unknown status (${status})`;
}

function getStatusClass(status) {
  if (status === "operational" || status === "none") {
    return "";
  }
  if (
    status === "under_maintenance" ||
    status === "degraded_performance" ||
    status === "minor" ||
    status === "maintenance"
  ) {
    return "is-degraded";
  }
  if (
    status === "partial_outage" ||
    status === "major_outage" ||
    status === "major" ||
    status === "critical"
  ) {
    return "is-outage";
  }
  return "is-unknown";
}

function renderComponents(components) {
  componentsList.replaceChildren();

  for (const component of components) {
    const item = document.createElement("li");
    const card = document.createElement("article");
    const name = document.createElement("h3");
    const indicator = document.createElement("span");
    const status = document.createElement("p");
    const statusClass = getStatusClass(component.status);

    card.className = `component-card ${statusClass}`.trim();
    name.className = "component-name";
    name.textContent = component.name;
    indicator.className = `status-indicator ${statusClass}`.trim();
    indicator.setAttribute("aria-hidden", "true");
    status.className = "component-status";
    status.textContent = getStatusLabel(component.status);

    name.append(indicator);
    card.append(name, status);
    item.append(card);
    componentsList.append(item);
  }
}

function renderSummary(status) {
  const statusClass = getStatusClass(status.indicator);
  overallStatus.className = `overall-status ${statusClass}`.trim();
  overallStatus.textContent = status.description;
}

async function loadStatus() {
  refreshButton.disabled = true;
  refreshButton.textContent = "Refreshing…";
  componentsMessage.className = "message";
  componentsMessage.setAttribute("role", "status");
  componentsMessage.textContent = "";

  try {
    const response = await fetch(STATUS_URL);
    if (!response.ok) {
      throw new Error(`The status service returned HTTP ${response.status}.`);
    }

    const data = await response.json();
    if (!data.status || !Array.isArray(data.components)) {
      throw new Error("The status service returned an unexpected response.");
    }

    renderSummary(data.status);
    renderComponents(data.components);
    lastUpdated.textContent = `Updated ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    componentsMessage.className = "message is-error";
    componentsMessage.setAttribute("role", "alert");
    componentsMessage.textContent = `Unable to load GitHub status. ${error.message}`;
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = "Refresh status";
  }
}

refreshButton.addEventListener("click", loadStatus);
loadStatus();
