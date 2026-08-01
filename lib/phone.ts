export function normalizePhone(countryCode: string, phone: string) {
        return `${countryCode}${phone}`.replace(/[^0-9]/g, "");
        }