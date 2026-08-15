async function loadDashboard() {

    const response = await fetch(
        `${API_BASE_URL}/loads`
    );

    const loads = await response.json();

    const statusCounts = {};

    loads.forEach(load => {

        const status = load[17];

        if (!statusCounts[status]) {
            statusCounts[status] = 0;
        }

        statusCounts[status]++;

    });

    document.getElementById("open-loads").textContent =
        statusCounts["Open"] || 0;

    document.getElementById("covered-loads").textContent =
        statusCounts["Covered"] || 0;

    document.getElementById("dispatched-loads").textContent =
        statusCounts["Dispatched"] || 0;

    document.getElementById("at-pickup-loads").textContent =
        statusCounts["At Pickup"] || 0;

    document.getElementById("loaded-loads").textContent =
        statusCounts["Loaded"] || 0;

    document.getElementById("in-transit-loads").textContent =
        statusCounts["In Transit"] || 0;

    document.getElementById("at-delivery-loads").textContent =
        statusCounts["At Delivery"] || 0;

}

loadDashboard();