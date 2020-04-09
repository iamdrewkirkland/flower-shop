export const retailerHtml = (retailer, distributor) => {
    return `
        <section class="retailerPreview">
            <div class="retailerPreview__info"><h3>${retailer.name}</h3><div>
            <div class="retailerPreview__flowers"></div>
            <div class="retailerPreview__distributors">${distributor.name}</div>
        </section>
    `;
};