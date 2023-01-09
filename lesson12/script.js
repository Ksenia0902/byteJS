const createTooltip = (elem, text) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    tooltip.innerText = text;
    
    document.body.append(tooltip);
    console.log(tooltip);

    const anchorElemCoords = elem.getBoundingClientRect();
    console.log(anchorElemCoords);

    const tooltipTop = anchorElemCoords.top - 5 - tooltip.clientHeight;
    console.log(tooltipTop);
    const tooltipLeft = anchorElemCoords.left + anchorElemCoords.width / 2 - tooltip.clientWidth / 2;
    console.log(tooltipLeft);

    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

    tooltip.setAttribute('hidden', '');

};

const button = document.getElementById('example');
createTooltip(button, 'example text bla bla bla');
const tooltip = document.querySelector('.tooltip');

const handleTooltipMouseover = () => {
    tooltip.removeAttribute('hidden');
};

const handleTooltipMouseout = () => {
    tooltip.setAttribute('hidden', '');
}

button.addEventListener('mouseover', handleTooltipMouseover);
button.addEventListener('mouseout', handleTooltipMouseout);
