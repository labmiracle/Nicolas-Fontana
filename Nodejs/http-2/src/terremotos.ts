type Magnitude = "all" | "1.0" | "2.5" | "4.5";
type Period = "hour" | "day" | "week" | "month";

const formatDateTime = (date: number) => {
    const dateFormatted = new Date(date);
    return dateFormatted.toLocaleString();
};

const getEarthquakes = async (mag: Magnitude, period: Period) => {
    try {
        if (mag !== "all" && mag !== "1.0" && mag !== "2.5" && mag !== "4.5")
            throw new Error("Invalid magnitude. Try with 'all', '1.0', '2.5', or '4.5'");
        if (period !== "hour" && period !== "day" && period !== "week" && period !== "month")
            throw new Error("Invalid period. Try with 'hour', 'day', 'week', or 'month'");

        const response = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${period}.geojson`);
        const data = await response.json();

        console.log("*****************************");
        console.log(data.metadata.title);
        console.log("    ---------------------    ");
        console.log(`total: ${data.metadata.count}`);
        console.log(`status: ${data.metadata.status}`);
        console.log("    ---------------------    ");
        console.log(formatDateTime(data.metadata.generated));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (const { properties, geometry } of data.features) {
            console.log("==============================");
            console.log(`M ${properties.mag} - ${properties.place}`);
            console.log(formatDateTime(properties.time));
            console.log(`Magnitude: ${properties.mag}`);
            console.log(`Status: ${properties.status}`);
            console.log(`Type: ${properties.type}`);
            console.log(`Location: ${properties.place}`);
            console.log(`Coordinates: ${geometry.coordinates[0]} , ${geometry.coordinates[1]}`);
            console.log(`Info: ${properties.url}`);
            console.log(`Details: ${properties.detail}`);
            console.log("==============================");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error getting earthquake data:", error.message);
    }
};

getEarthquakes("4.5", "day");
